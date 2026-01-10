import { z } from 'zod';

export const driverSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }).refine((val) => {
    const domain = val.split('@')[1];
    return domain && domain.includes('.');
  }, { message: "Email must contain a valid domain (e.g., .com, .in)." }),
  dateOfBirth: z.string().refine((val) => {
    const dob = new Date(val);
    const today = new Date();
    // Calculate 18 years ago from today
    const storedDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    // If DOB is after that date, they are younger than 18
    return dob <= storedDate;
  }, { message: "You must be at least 18 years old to register." }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  addressLine1: z.string().min(5, { message: "Address must be at least 5 characters." }),
  addressLine2: z.string().optional(),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "Please select a state." }),
  pinCode: z.string().regex(/^\d{6}$/, { message: "Pin code must be exactly 6 digits." }),
  referralCode: z.string().optional(),
  interestedInEV: z.boolean().default(false).optional(),
  whatsappConsent: z.boolean().default(false).optional(),
});

export type DriverFormValues = z.infer<typeof driverSchema>;

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
