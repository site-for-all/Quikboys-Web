
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../app/components/ui/button';
import { Input } from '../app/components/ui/input';
import { Label } from '../app/components/ui/label';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../app/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../app/components/ui/card';
import { supabase } from '../lib/supabase';

const careersSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    linkedIn: z.string().url("Invalid URL").optional().or(z.literal("")),
    portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),
    department: z.string().min(1, "Please select a department"),
    experience: z.string().min(1, "Please select experience"),
    coverLetter: z.string().optional(),
});

type CareersFormData = z.infer<typeof careersSchema>;

export function CareersForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<CareersFormData>({
        resolver: zodResolver(careersSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            linkedIn: '',
            portfolio: '',
            department: '',
            experience: '',
            coverLetter: '',
        }
    });

    const onSubmit = async (data: CareersFormData) => {
        setIsSubmitting(true);
        setUploadError(null);

        try {
            // In a real implementation, we would handle file upload here if we had a file input
            // For now, we'll just insert the data

            const { error } = await supabase
                .from('careers_talent_pool')
                .insert({
                    full_name: data.fullName,
                    email: data.email,
                    phone_number: data.phone,
                    linkedin_url: data.linkedIn || null,
                    portfolio_url: data.portfolio || null,
                    department: data.department,
                    experience_years: data.experience,
                    // resume_url: resumeUrl // If we had file upload
                });

            if (error) throw error;

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error('Error submitting application:', error);
            setUploadError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <Card className="w-full max-w-2xl mx-auto border-green-100 bg-green-50">
                <CardContent className="pt-6 text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A2744] mb-2">Application Received!</h3>
                    <p className="text-gray-600">
                        Thank you for your interest in QuikBoys. We have added you to our talent network and will contact you if a suitable role opens up.
                    </p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 bg-[#1A2744] text-white"
                    >
                        Submit Another
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-gray-100">
            <CardHeader className="text-center bg-gray-50/50 pb-8 border-b border-gray-100">
                <CardTitle className="text-2xl font-bold text-[#1A2744]">Join Our Talent Network</CardTitle>
                <CardDescription className="text-lg mt-2">
                    Don't see the right role? specialized? Drop your details and we'll keep you on our radar.
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                            <Input id="fullName" {...register('fullName')} placeholder="John Doe" className={errors.fullName ? "border-red-500" : ""} />
                            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                            <Input id="email" type="email" {...register('email')} placeholder="john@example.com" className={errors.email ? "border-red-500" : ""} />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                            <Input id="phone" {...register('phone')} placeholder="9876543210" className={errors.phone ? "border-red-500" : ""} />
                            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="department">Department Interest <span className="text-red-500">*</span></Label>
                            <Select onValueChange={(val) => setValue('department', val)}>
                                <SelectTrigger className={errors.department ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="engineering">Engineering & Tech</SelectItem>
                                    <SelectItem value="operations">Operations & Logistics</SelectItem>
                                    <SelectItem value="product">Product Management</SelectItem>
                                    <SelectItem value="marketing">Marketing & Growth</SelectItem>
                                    <SelectItem value="sales">Sales & Partnerships</SelectItem>
                                    <SelectItem value="finance">Finance & Admin</SelectItem>
                                    <SelectItem value="hr">Human Resources</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.department && <p className="text-red-500 text-xs">{errors.department.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience <span className="text-red-500">*</span></Label>
                        <Select onValueChange={(val) => setValue('experience', val)}>
                            <SelectTrigger className={errors.experience ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select Experience Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="student">Student / Intern</SelectItem>
                                <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                                <SelectItem value="junior">1-3 years</SelectItem>
                                <SelectItem value="mid">3-5 years</SelectItem>
                                <SelectItem value="senior">5-8 years</SelectItem>
                                <SelectItem value="lead">8+ years</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.experience && <p className="text-red-500 text-xs">{errors.experience.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="linkedIn">LinkedIn Profile (Optional)</Label>
                            <Input id="linkedIn" {...register('linkedIn')} placeholder="https://linkedin.com/in/..." />
                            {errors.linkedIn && <p className="text-red-500 text-xs">{errors.linkedIn.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="portfolio">Portfolio / Website (Optional)</Label>
                            <Input id="portfolio" {...register('portfolio')} placeholder="https://..." />
                            {errors.portfolio && <p className="text-red-500 text-xs">{errors.portfolio.message}</p>}
                        </div>
                    </div>

                    {uploadError && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">
                            {uploadError}
                        </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#1A2744] hover:bg-[#0A1830] text-white h-12 text-lg">
                        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Join Talent Network'}
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting this form, you agree to our privacy policy. We'll only contact you for career opportunities.
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
