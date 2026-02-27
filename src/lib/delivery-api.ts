/**
 * Delivery Backend API Client
 *
 * This module provides functions to interact with the QuikBoys NestJS backend API.
 * Used for driver registration and other authentication-related operations.
 */

// In production, use relative URL to leverage Amplify proxy (avoids CORS issues)
// In development, use the environment variable or localhost
const API_BASE_URL = import.meta.env.PROD
  ? '/api/v1'
  : (import.meta.env.VITE_DELIVERY_API_URL || 'http://localhost:3000/api/v1');

/**
 * Registration data interface matching the backend WebRegistrationDto
 */
export interface RegistrationData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  dateOfBirth?: string;
  gender: 'male' | 'female' | 'other';
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  referredBy?: string;
  evProgramInterest?: boolean;
  whatsappConsent?: boolean;
}

/**
 * Registration response interface
 */
export interface RegistrationResponse {
  success: boolean;
  message: string;
  data?: {
    applicationId: string;
    referralCode: string;
    status: string;
  };
}

/**
 * API error class for handling backend errors
 */
export class DeliveryApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'DeliveryApiError';
    this.statusCode = statusCode;
  }
}

/**
 * Submit driver application to the NestJS backend
 *
 * @param data - Registration form data
 * @param aadhaarFile - Aadhaar card file
 * @param drivingLicenseFile - Driving license file
 * @returns Registration response with referral code
 */
export async function submitDriverApplication(
  data: RegistrationData,
  aadhaarFile: File | null,
  drivingLicenseFile: File | null
): Promise<RegistrationResponse> {
  const formData = new FormData();

  // Add text fields
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('phoneNumber', data.phoneNumber);
  formData.append('gender', data.gender);
  formData.append('addressLine1', data.addressLine1);
  formData.append('city', data.city);
  formData.append('state', data.state);
  formData.append('pinCode', data.pinCode);

  // Optional fields
  if (data.email) {
    formData.append('email', data.email);
  }
  if (data.dateOfBirth) {
    formData.append('dateOfBirth', data.dateOfBirth);
  }
  if (data.addressLine2) {
    formData.append('addressLine2', data.addressLine2);
  }
  if (data.referredBy) {
    formData.append('referredBy', data.referredBy);
  }
  if (data.evProgramInterest !== undefined) {
    formData.append('evProgramInterest', String(data.evProgramInterest));
  }
  if (data.whatsappConsent !== undefined) {
    formData.append('whatsappConsent', String(data.whatsappConsent));
  }

  // Add files
  if (aadhaarFile) {
    formData.append('aadhaarCard', aadhaarFile);
  }
  if (drivingLicenseFile) {
    formData.append('drivingLicense', drivingLicenseFile);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register-application`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header - browser will set it with boundary for multipart
    });

    const result = await response.json();

    if (!response.ok) {
      throw new DeliveryApiError(
        result.message || 'Failed to submit application',
        response.status
      );
    }

    return result;
  } catch (error) {
    if (error instanceof DeliveryApiError) {
      throw error;
    }

    // Network error or other issue
    throw new DeliveryApiError(
      error instanceof Error ? error.message : 'Network error - please check your connection',
      0
    );
  }
}

/**
 * Hub Operations application data interface
 */
export interface HubOperationsData {
  role: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  dateOfBirth?: string;
  gender: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  currentJobTitle?: string;
  yearsOfExperience?: string;
  hasTwoWheeler?: string;
  whyJoin?: string;
  referredBy?: string;
  whatsappConsent?: boolean;
}

/**
 * Partner application data interface
 */
export interface PartnerData {
  businessName: string;
  ownerName: string;
  phoneNumber: string;
  email: string;
  businessType: string;
  gstNumber?: string;
  website?: string;
  city: string;
  state: string;
  pinCode: string;
  dailyDeliveries?: string;
  requirements?: string;
  whatsappConsent?: boolean;
}

/**
 * Career application data interface
 */
export interface CareerData {
  fullName: string;
  email: string;
  phoneNumber: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  department: string;
  experienceYears?: string;
}

/**
 * Generic application response
 */
export interface ApplicationResponse {
  success: boolean;
  message: string;
  data?: {
    applicationId: string;
    referralCode?: string;
    status: string;
  };
}

/**
 * Submit hub operations application
 */
export async function submitHubOperationsApplication(
  data: HubOperationsData,
  resumeFile: File | null,
): Promise<ApplicationResponse> {
  const formData = new FormData();

  formData.append('role', data.role);
  formData.append('fullName', data.fullName);
  formData.append('phoneNumber', data.phoneNumber);
  formData.append('gender', data.gender);
  formData.append('addressLine1', data.addressLine1);
  formData.append('city', data.city);
  formData.append('state', data.state);
  formData.append('pinCode', data.pinCode);

  if (data.email) formData.append('email', data.email);
  if (data.dateOfBirth) formData.append('dateOfBirth', data.dateOfBirth);
  if (data.addressLine2) formData.append('addressLine2', data.addressLine2);
  if (data.currentJobTitle) formData.append('currentJobTitle', data.currentJobTitle);
  if (data.yearsOfExperience) formData.append('yearsOfExperience', data.yearsOfExperience);
  if (data.hasTwoWheeler !== undefined) formData.append('hasTwoWheeler', String(data.hasTwoWheeler === 'yes'));
  if (data.whyJoin) formData.append('whyJoin', data.whyJoin);
  if (data.referredBy) formData.append('referredBy', data.referredBy);
  if (data.whatsappConsent !== undefined) formData.append('whatsappConsent', String(data.whatsappConsent));

  if (resumeFile) {
    formData.append('resume', resumeFile);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/hub-operations/apply`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new DeliveryApiError(
        result.message || 'Failed to submit application',
        response.status,
      );
    }

    return result;
  } catch (error) {
    if (error instanceof DeliveryApiError) throw error;
    throw new DeliveryApiError(
      error instanceof Error ? error.message : 'Network error - please check your connection',
      0,
    );
  }
}

/**
 * Submit partner application
 */
export async function submitPartnerApplication(
  data: PartnerData,
): Promise<ApplicationResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/partner/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new DeliveryApiError(
        result.message || 'Failed to submit application',
        response.status,
      );
    }

    return result;
  } catch (error) {
    if (error instanceof DeliveryApiError) throw error;
    throw new DeliveryApiError(
      error instanceof Error ? error.message : 'Network error - please check your connection',
      0,
    );
  }
}

/**
 * Submit career/talent network application
 */
export async function submitCareerApplication(
  data: CareerData,
): Promise<ApplicationResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/careers/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new DeliveryApiError(
        result.message || 'Failed to submit application',
        response.status,
      );
    }

    return result;
  } catch (error) {
    if (error instanceof DeliveryApiError) throw error;
    throw new DeliveryApiError(
      error instanceof Error ? error.message : 'Network error - please check your connection',
      0,
    );
  }
}

/**
 * Check if the backend API is available
 * @returns true if the API is reachable
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api/v1', '')}/api/v1/health`, {
      method: 'GET',
    });
    return response.ok;
  } catch {
    return false;
  }
}
