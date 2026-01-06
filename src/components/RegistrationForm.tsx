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
import { Loader2, CheckCircle } from 'lucide-react';

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<DriverFormValues>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      gender: undefined,
      city: '',
      state: '',
      pinCode: '',
      whatsappConsent: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;

  async function onSubmit(data: DriverFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    console.log('Form Submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <Card className="max-w-3xl mx-auto shadow-xl border-green-200 bg-green-50/50">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Registration Successful!</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto">
            Thank you for registering with QuikBoys. Our team will review your application and contact you within 24-48 hours.
          </p>
          <Button 
            onClick={() => window.location.href = '/'} 
            className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white min-w-[200px]"
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-xl">
      <CardHeader className="text-center pb-8 border-b">
        <CardTitle className="text-3xl font-bold text-[#0A2540]">Join as a Rider</CardTitle>
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

          {/* Address Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
              <Input 
                id="city" 
                placeholder="Enter your city" 
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
          </div>

          {/* Pin Code */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="pinCode">Pin Code <span className="text-red-500">*</span></Label>
              <Input 
                id="pinCode" 
                placeholder="123456" 
                maxLength={6}
                {...register('pinCode')} 
                className={errors.pinCode ? 'border-red-500' : ''}
              />
              {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode.message}</p>}
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
              className="w-full h-14 text-lg font-bold bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-lg hover:shadow-xl transition-all"
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
