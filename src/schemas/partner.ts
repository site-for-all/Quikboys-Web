import { z } from 'zod';

export const partnerSchema = z.object({
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
  ownerName: z.string().min(2, { message: "Owner name must be at least 2 characters." }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }).refine((val) => {
    const domain = val.split('@')[1];
    return domain && domain.includes('.');
  }, { message: "Email must contain a valid domain (e.g., .com, .in)." }),
  businessType: z.enum(["restaurant", "grocery", "pharmacy", "retail", "other"], {
    required_error: "Please select a business type.",
  }),
  gstNumber: z.string().optional(),
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "Please select a state." }),
  pinCode: z.string().regex(/^\d{6}$/, { message: "Pin code must be exactly 6 digits." }),
  whatsappConsent: z.boolean().default(false).optional(),
});

export type PartnerFormValues = z.infer<typeof partnerSchema>;

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

export const businessTypes = [
    { value: "restaurant", label: "Restaurant / Cloud Kitchen" },
    { value: "grocery", label: "Grocery / Supermarket" },
    { value: "pharmacy", label: "Pharmacy / Medical Store" },
    { value: "retail", label: "Retail Store" },
    { value: "other", label: "Other" }
];
