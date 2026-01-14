
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { driverSchema, indianStates, type DriverFormValues } from '../schemas/driver';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../app/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../app/components/ui/card';
import { Label } from '../app/components/ui/label';
import { Checkbox } from '../app/components/ui/checkbox';
import { Loader2, CheckCircle, Upload, Copy, Share2 } from 'lucide-react';

import { submitDriverApplication, DeliveryApiError } from '../lib/delivery-api';

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referralCode, setReferralCode] = useState<string>('');
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);

  const form = useForm<DriverFormValues>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      gender: undefined,
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pinCode: '',
      referralCode: '',
      interestedInEV: false,
      whatsappConsent: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (f: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  async function onSubmit(data: DriverFormValues) {
    setIsSubmitting(true);
    try {
      if (!aadhaarFile || !licenseFile) {
        alert("Please upload both Aadhaar Card and Driving License");
        setIsSubmitting(false);
        return;
      }

      // Submit to NestJS backend API
      const response = await submitDriverApplication(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || undefined,
          city: data.city,
          state: data.state,
          pinCode: data.pinCode,
          referredBy: data.referralCode || undefined,
          evProgramInterest: data.interestedInEV,
          whatsappConsent: data.whatsappConsent,
        },
        aadhaarFile,
        licenseFile
      );

      if (response.success && response.data) {
        setReferralCode(response.data.referralCode);
        setIsSuccess(true);
      } else {
        throw new Error(response.message || 'Failed to submit application');
      }
    } catch (error: unknown) {
      console.error('Submission Error:', error);

      if (error instanceof DeliveryApiError) {
        if (error.statusCode === 409) {
          alert('This phone number or email is already registered. Please use different details or contact support.');
        } else if (error.statusCode === 400) {
          alert('Invalid data: ' + error.message);
        } else if (error.statusCode === 0) {
          // Network error - could offer fallback or retry
          alert('Unable to connect to server. Please check your internet connection and try again.');
        } else {
          alert('Failed to submit application: ' + error.message);
        }
      } else {
        alert('Failed to submit application: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral Code Copied!');
  };

  const shareOnWhatsApp = () => {
    const text = `Hey! I just joined QuikBoys as a Delivery Partner 🚀 Earn on every kilometer and get weekly payouts! Use my referral code: ${referralCode}. Apply here: https://quikboys.com/driver-onboarding #QuikBoys #DeliveryPartner #EarnMore`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (isSuccess) {
    return (
      <Card className="max-w-3xl mx-auto shadow-xl border-green-200 bg-green-50/50">
        <CardContent className="pt-10 pb-10 text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-2">Registration Successful!</h2>
            <p className="text-xl text-gray-700">
              Thank you for registering with QuikBoys.<br />
              Our team will review your application and contact you within 24-48 hours.
            </p>
          </div>

          {referralCode && (
            <div className="bg-[#ECFDF5] border border-green-200 p-6 rounded-xl max-w-md mx-auto">
              <p className="text-sm font-bold text-green-800 mb-4 uppercase tracking-wider">🎁 Your Referral Code</p>
              <div className="bg-white border-2 border-dashed border-green-300 rounded-lg p-4 mb-4">
                <span className="text-3xl font-mono font-bold text-[#0A2540] tracking-widest">{referralCode}</span>
              </div>
              <p className="text-sm text-green-700 mb-0">Share this code with friends to earn rewards when they join!</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={copyToClipboard} variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              <Copy className="w-4 h-4 mr-2" /> Copy Code
            </Button>
            <Button onClick={shareOnWhatsApp} className="bg-[#25D366] hover:bg-[#128C7E] text-white">
              <Share2 className="w-4 h-4 mr-2" /> Share on WhatsApp
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">⚠️ Save your referral code! Take a screenshot or copy it now.</p>

          <Button onClick={() => window.location.href = '/'} variant="link" className="text-gray-500">
            Back to Home
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-xl bg-white">
      <CardHeader className="text-center pb-8 border-b">
        <CardTitle className="text-3xl font-bold text-[#1A2744]">Join as a Rider</CardTitle>
        <CardDescription className="text-lg">
          Fill in your details to start your journey with QuikBoys
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-input bg-muted text-muted-foreground rounded-l-md text-sm">
                  +91
                </span>
                <Input
                  id="phoneNumber"
                  placeholder="9876543210"
                  type="tel"
                  maxLength={10}
                  {...register('phoneNumber')}
                  className={`rounded-l-none ${errors.phoneNumber ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
              <Input
                id="dateOfBirth"
                type="date"
                max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                {...register('dateOfBirth')}
                className={errors.dateOfBirth ? 'border-red-500' : ''}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val: "male" | "female" | "other") => setValue('gender', val)}>
                <SelectTrigger id="gender" className={errors.gender ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </div>
          </div>

          {/* New Address Fields */}
          <div className="space-y-2">
            <Label htmlFor="addressLine1">Address Line 1 <span className="text-red-500">*</span></Label>
            <Input
              id="addressLine1"
              placeholder="House/Flat No., Building Name, Street"
              {...register('addressLine1')}
              className={errors.addressLine1 ? 'border-red-500' : ''}
            />
            {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
            <Input
              id="addressLine2"
              placeholder="Landmark, Area"
              {...register('addressLine2')}
            />
          </div>

          {/* City State Zip */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
              <Input
                id="city"
                placeholder="Enter city"
                {...register('city')}
                className={errors.city ? 'border-red-500' : ''}
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val) => setValue('state', val)}>
                <SelectTrigger id="state" className={errors.state ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pinCode">Pin Code <span className="text-red-500">*</span></Label>
              <Input
                id="pinCode"
                placeholder="City Pincode"
                maxLength={6}
                {...register('pinCode')}
                className={errors.pinCode ? 'border-red-500' : ''}
              />
              {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode.message}</p>}
            </div>
          </div>

          {/* Document Uploads */}
          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div className="space-y-3">
              <Label htmlFor="aadhaar">Aadhaar Card <span className="text-red-500">*</span></Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#DC2626] transition-colors cursor-pointer relative bg-gray-50">
                <Input
                  id="aadhaar"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileChange(e, setAadhaarFile)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">{aadhaarFile ? aadhaarFile.name : "Drag & drop or Click to Upload"}</p>
                  <p className="text-xs text-gray-500 mt-1">Max 5MB (JPG, PNG, PDF)</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="license">Driving License <span className="text-red-500">*</span></Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#DC2626] transition-colors cursor-pointer relative bg-gray-50">
                <Input
                  id="license"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileChange(e, setLicenseFile)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">{licenseFile ? licenseFile.name : "Drag & drop or Click to Upload"}</p>
                  <p className="text-xs text-gray-500 mt-1">Max 5MB (JPG, PNG, PDF)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Code */}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <Label htmlFor="referralCode">Referral Code (Optional)</Label>
            <Input
              id="referralCode"
              placeholder="Enter referral code (if any)"
              {...register('referralCode')}
            />
          </div>

          {/* Prominent EV Checkbox */}
          <div className="pt-4 pb-2">
            <div className="flex items-start bg-green-50 border border-green-200 p-4 rounded-lg hover:bg-green-100 transition-colors">
              <Checkbox
                id="interestedInEV"
                checked={watch('interestedInEV')}
                onCheckedChange={(checked) => setValue('interestedInEV', checked as boolean)}
                className="mt-1 border-green-500 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
              />
              <div className="ml-3">
                <Label
                  htmlFor="interestedInEV"
                  className="font-bold text-[#1A2744] cursor-pointer"
                >
                  I want a FREE EV Scooter from QuikBoys 🛵
                </Label>
                <p className="text-sm text-green-700 mt-1">
                  Check this box to apply for our Zero Investment, Zero EMI EV Program.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="whatsappConsent"
              checked={watch('whatsappConsent')}
              onCheckedChange={(checked) => setValue('whatsappConsent', checked as boolean)}
            />
            <Label
              htmlFor="whatsappConsent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive updates and notifications via WhatsApp
            </Label>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg hover:shadow-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
            <p className="text-center text-sm text-gray-500 mt-4">
              <span className="text-red-500">*</span> All fields are required
            </p>
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
