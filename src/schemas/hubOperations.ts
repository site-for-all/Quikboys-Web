import { z } from 'zod';

export const hubOperationsSchema = z.object({
  role: z.enum(["cluster_manager", "hub_executive", "hub_captain"], {
    required_error: "Please select a role.",
  }),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select a gender.",
  }),

  // Address
  addressLine1: z.string().min(5, "Address Line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pinCode: z.string().regex(/^\d{6}$/, "Pin code must be 6 digits"),

  // Professional
  currentJobTitle: z.string().optional(),
  yearsOfExperience: z.string().min(1, "Please select experience"),
  hasTwoWheeler: z.enum(["yes", "no"], {
    required_error: "Please specify if you own a two-wheeler",
  }),
  whyJoin: z.string().optional(),

  // Documents
  resume: z.any()
    .optional()
    .refine((file) => !file || file.length === 0 || file[0]?.size <= 5000000, "Max file size is 5MB")
    .refine(
      (file) => !file || file.length === 0 || ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file[0]?.type),
      "Only .pdf, .doc, .docx formats are supported"
    ),

  // Referral & Consent
  referralCode: z.string().optional(),
  whatsappConsent: z.boolean().optional(),
});

export type HubOperationsFormValues = z.infer<typeof hubOperationsSchema>;

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
