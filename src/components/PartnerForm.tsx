import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partnerSchema, indianStates, businessTypes, type PartnerFormValues } from '../schemas/partner';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../app/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../app/components/ui/card';
import { Label } from '../app/components/ui/label';
import { Checkbox } from '../app/components/ui/checkbox';
import { Loader2, CheckCircle, Store } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      businessName: '',
      ownerName: '',
      phoneNumber: '',
      email: '',
      businessType: undefined,
      gstNumber: '',
      website: '',
      city: '',
      state: '',
      pinCode: '',
      dailyDeliveries: undefined,
      needs: '',
      whatsappConsent: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;

  async function onSubmit(data: PartnerFormValues) {
    setIsSubmitting(true);
    try {
      const payload = {
        business_name: data.businessName,
        owner_name: data.ownerName,
        phone_number: data.phoneNumber,
        email: data.email,
        business_type: data.businessType,
        gst_number: data.gstNumber || null,
        website: data.website || null,
        city: data.city,
        state: data.state,
        pin_code: data.pinCode,
        daily_deliveries: data.dailyDeliveries,
        requirements: data.needs || null,
        whatsapp_consent: data.whatsappConsent,
        status: 'pending'
      };

      const { error } = await supabase.from('partners').insert([payload]);

      if (error) {
        throw error;
      }

      console.log('Form Submitted to Supabase:', data);
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Submission Error:', error);
      if (error.message?.includes('violates row-level security') || error.message?.includes('fetch failed')) {
        alert('Supabase connection failed (Check Console). Demo mode: Success!');
        setIsSuccess(true);
      } else {
        alert('Failed to submit application: ' + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="max-w-3xl mx-auto shadow-xl border-green-200 bg-green-50/50">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Partner Application Received!</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto">
            Thanks for choosing QuikBoys. We're excited to help you grow your business. Our team will contact you shortly.
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
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-50 rounded-full">
            <Store className="w-8 h-8 text-[#0A2540]" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-[#0A2540]">Partner with Us</CardTitle>
        <CardDescription className="text-lg">
          Join our network of merchants and grow your delivery business
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Business Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name <span className="text-red-500">*</span></Label>
              <Input
                id="businessName"
                placeholder="e.g. Tasty Bites point"
                {...register('businessName')}
                className={errors.businessName ? 'border-red-500' : ''}
              />
              {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val: any) => setValue('businessType', val)}>
                <SelectTrigger id="businessType" className={errors.businessType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner Name <span className="text-red-500">*</span></Label>
              <Input
                id="ownerName"
                placeholder="Enter owner full name"
                {...register('ownerName')}
                className={errors.ownerName ? 'border-red-500' : ''}
              />
              {errors.ownerName && <p className="text-red-500 text-sm">{errors.ownerName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gstNumber">GST Number <span className="text-gray-400 font-normal">(Optional)</span></Label>
              <Input
                id="gstNumber"
                placeholder="GSTIN..."
                {...register('gstNumber')}
                className={errors.gstNumber ? 'border-red-500' : ''}
              />
              {errors.gstNumber && <p className="text-red-500 text-sm">{errors.gstNumber.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Company Website <span className="text-gray-400 font-normal">(Optional)</span></Label>
            <Input
              id="website"
              placeholder="https://yourbusiness.com"
              type="url"
              {...register('website')}
              className={errors.website ? 'border-red-500' : ''}
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
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
                placeholder="business@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Address Fields */}
          <div className="grid md:grid-cols-2 gap-6">
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
          </div>

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
            <div className="space-y-2">
              <Label htmlFor="dailyDeliveries">Est. Daily Deliveries <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val: any) => setValue('dailyDeliveries', val)}>
                <SelectTrigger id="dailyDeliveries" className={errors.dailyDeliveries ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
              {errors.dailyDeliveries && <p className="text-red-500 text-sm">{errors.dailyDeliveries.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="needs">Tell us about your delivery needs</Label>
            <Input
              id="needs"
              placeholder="e.g. specialized handling, specific hours..."
              {...register('needs')}
            />
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
                'Be a Partner'
              )}
            </Button>
            <p className="text-center text-sm text-gray-500 mt-4">
              <span className="text-red-500">*</span> All fields are required unless marked optional
            </p>
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
