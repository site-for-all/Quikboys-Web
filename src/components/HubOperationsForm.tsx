import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { hubOperationsSchema, type HubOperationsFormValues } from '../schemas/hubOperations';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../app/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../app/components/ui/card';
import { Label } from '../app/components/ui/label';
import { Checkbox } from '../app/components/ui/checkbox';
import { Textarea } from '../app/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../app/components/ui/radio-group';
import { Loader2, CheckCircle, Copy, Share2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { indianStates } from '../schemas/hubOperations';

export function HubOperationsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedReferralCode, setGeneratedReferralCode] = useState('');
  const [role, setRole] = useState('');

  const form = useForm<HubOperationsFormValues>({
    resolver: zodResolver(hubOperationsSchema),
    defaultValues: {
      role: undefined,
      fullName: '',
      gender: undefined,
      hasTwoWheeler: undefined,
      whatsappConsent: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue } = form;

  async function onSubmit(data: HubOperationsFormValues) {
    setIsSubmitting(true);
    try {
      let resumeUrl = '';

      if (data.resume && data.resume.length > 0) {
        const file = data.resume[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${data.role}_${Date.now()}.${fileExt}`;
        const filePath = `hub-operations-resumes/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('hub-operations-resumes')
          .upload(filePath, file);

        if (uploadError) throw new Error('Resume upload failed: ' + uploadError.message);

        const { data: { publicUrl } } = supabase.storage
          .from('hub-operations-resumes')
          .getPublicUrl(filePath);

        resumeUrl = publicUrl;
      }

      const payload = {
        role: data.role,
        full_name: data.fullName,
        phone_number: data.phoneNumber,
        email: data.email,
        date_of_birth: data.dateOfBirth,
        gender: data.gender,
        address_line_1: data.addressLine1,
        address_line_2: data.addressLine2,
        city: data.city,
        state: data.state,
        pin_code: data.pinCode,
        current_job_title: data.currentJobTitle,
        years_of_experience: data.yearsOfExperience,
        has_two_wheeler: data.hasTwoWheeler === 'yes',
        why_join: data.whyJoin,
        resume_url: resumeUrl,
        referred_by: data.referralCode || null,
        whatsapp_consent: data.whatsappConsent,
        application_status: 'pending'
      };

      const { data: insertedData, error: insertError } = await supabase
        .from('hub_operations_applications')
        .insert([payload])
        .select('referral_code')
        .single();

      if (insertError) throw insertError;

      if (insertedData) {
        setGeneratedReferralCode(insertedData.referral_code);
        setRole(data.role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()));
        setIsSuccess(true);
      }

    } catch (error: any) {
      console.error('Submission Error:', error);
      alert('Failed to submit application: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReferralCode);
    alert('Referral Code Copied!');
  };

  const shareOnWhatsApp = () => {
    const text = `Hey! I just applied for Hub Operations at QuikBoys 🚀 Join me and build your career in logistics! Use my referral code: ${generatedReferralCode}. Apply here: https://quikboys.com/hub-operations #QuikBoys #HubOperations #Careers`;
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
            <h2 className="text-3xl font-bold text-[#0A2540] mb-2">Application Submitted Successfully!</h2>
            <p className="text-xl text-gray-700">
              Thank you for applying to join QuikBoys Hub Operations!<br />
              Your application for <strong>{role}</strong> has been received.
            </p>
          </div>

          <div className="bg-[#ECFDF5] border border-green-200 p-6 rounded-xl max-w-md mx-auto">
            <p className="text-sm font-bold text-green-800 mb-4 uppercase tracking-wider">🎁 Your Referral Code</p>
            <div className="bg-white border-2 border-dashed border-green-300 rounded-lg p-4 mb-4">
              <span className="text-3xl font-mono font-bold text-[#0A2540] tracking-widest">{generatedReferralCode}</span>
            </div>
            <p className="text-sm text-green-700 mb-0">Share this code with friends. When they join Hub Operations using your code, you both earn rewards!</p>
          </div>

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
      </Card >
    );
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-xl" id="hub-ops-form">
      <CardHeader className="text-center pb-8 border-b">
        <CardTitle className="text-3xl font-bold text-[#0A2540]">Apply Now</CardTitle>
        <CardDescription className="text-lg">
          Fill out the form below to apply for Hub Operations. Select your preferred role and we'll get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* Row 1: Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role">Select Role <span className="text-red-500">*</span></Label>
            <Select onValueChange={(val) => setValue('role', val as any)}>
              <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select the role you're applying for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hub_manager">Hub Manager</SelectItem>
                <SelectItem value="hub_executive">Hub Executive</SelectItem>
                <SelectItem value="hub_captain">Hub Captain</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          {/* Row 2: Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input id="fullName" placeholder="Enter your full name" {...register('fullName')} className={errors.fullName ? 'border-red-500' : ''} />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-input bg-muted text-muted-foreground rounded-l-md text-sm">+91</span>
                <Input id="phoneNumber" placeholder="9876543210" maxLength={10} {...register('phoneNumber')} className={`rounded-l-none ${errors.phoneNumber ? 'border-red-500' : ''}`} />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          {/* Row 3: Email & DOB */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" placeholder="your.email@example.com" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
              <Input id="dateOfBirth" type="date" {...register('dateOfBirth')} className={errors.dateOfBirth ? 'border-red-500' : ''} />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
            </div>
          </div>

          {/* Row 4: Gender & Address */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val) => setValue('gender', val as any)}>
                <SelectTrigger className={errors.gender ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val) => setValue('city', val)}>
                <SelectTrigger className={errors.city ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
          </div>

          {/* Detailed Address */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="addressLine1">Address Line 1 <span className="text-red-500">*</span></Label>
              <Input id="addressLine1" placeholder="House No., Building, Street" {...register('addressLine1')} className={errors.addressLine1 ? 'border-red-500' : ''} />
              {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
              <Input id="addressLine2" placeholder="Landmark, Area" {...register('addressLine2')} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val) => setValue('state', val)}>
                <SelectTrigger className={errors.state ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pinCode">Pin Code <span className="text-red-500">*</span></Label>
              <Input id="pinCode" placeholder="123456" maxLength={6} {...register('pinCode')} className={errors.pinCode ? 'border-red-500' : ''} />
              {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode.message}</p>}
            </div>
          </div>

          {/* Professional Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="currentJobTitle">Current/Last Job Title</Label>
              <Input id="currentJobTitle" placeholder="e.g. Team Lead" {...register('currentJobTitle')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience <span className="text-red-500">*</span></Label>
              <Select onValueChange={(val) => setValue('yearsOfExperience', val)}>
                <SelectTrigger className={errors.yearsOfExperience ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fresher">Fresher</SelectItem>
                  <SelectItem value="0-1 year">0-1 year</SelectItem>
                  <SelectItem value="1-2 years">1-2 years</SelectItem>
                  <SelectItem value="2-3 years">2-3 years</SelectItem>
                  <SelectItem value="3+ years">3+ years</SelectItem>
                </SelectContent>
              </Select>
              {errors.yearsOfExperience && <p className="text-red-500 text-sm">{errors.yearsOfExperience.message}</p>}
            </div>
          </div>

          {/* Two Wheeler & Motivation */}
          <div className="space-y-2">
            <Label>Do you have a two-wheeler? <span className="text-red-500">*</span></Label>
            <RadioGroup onValueChange={(val) => setValue('hasTwoWheeler', val as any)} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="tw-yes" />
                <Label htmlFor="tw-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="tw-no" />
                <Label htmlFor="tw-no">No</Label>
              </div>
            </RadioGroup>
            {errors.hasTwoWheeler && <p className="text-red-500 text-sm">{errors.hasTwoWheeler.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyJoin">Why do you want to join Hub Operations?</Label>
            <Textarea id="whyJoin" placeholder="Tell us in 50-150 words..." {...register('whyJoin')} className={errors.whyJoin ? 'border-red-500' : ''} />
            {errors.whyJoin && <p className="text-red-500 text-sm">{errors.whyJoin.message}</p>}
          </div>

          {/* Documents & Referral */}
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume/CV (Optional)</Label>
            <Input id="resume" type="file" accept=".pdf,.doc,.docx" {...register('resume')} className="cursor-pointer file:bg-blue-50 file:text-blue-700 file:border-0 file:rounded-md file:mr-4 file:px-4 file:py-2" />
            <p className="text-xs text-gray-500">Max file size: 5MB. Formats: PDF, DOC, DOCX</p>
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message as any}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="referralCode">Referral Code (Optional)</Label>
            <Input id="referralCode" placeholder="Enter referral code (if any)" {...register('referralCode')} />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="whatsappConsent" onCheckedChange={(checked) => setValue('whatsappConsent', checked as boolean)} />
            <Label htmlFor="whatsappConsent">I agree to receive updates and notifications via WhatsApp</Label>
          </div>

          <div className="pt-6">
            <Button type="submit" className="w-full h-14 text-lg font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</> : 'Submit Application'}
            </Button>
            <p className="text-center text-sm text-gray-500 mt-4"><span className="text-red-500">*</span> All fields are required</p>
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
