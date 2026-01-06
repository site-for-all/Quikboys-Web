import { z } from 'zod';

export const hubCaptainSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  dateOfBirth: z.string().refine((val) => {
    const date = new Date(val);
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
  }, { message: "You must be at least 18 years old." }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "Please select a state." }),
  pinCode: z.string().regex(/^\d{6}$/, { message: "Pin code must be exactly 6 digits." }),
  whatsappConsent: z.boolean().default(false).optional(),
  // For file upload, we'll validate the file list in the component or use a refined schema if needed.
  // Using 'any' here as a placeholder for the file object, which is handled via ref in React Hook Form or state.
  // Ideally, use z.instanceof(FileList) if using standard file input registration.
  resume: z.any().optional(), 
});

export type HubCaptainFormValues = z.infer<typeof hubCaptainSchema>;

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
