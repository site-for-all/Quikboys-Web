
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { SEO } from "../../components/SEO";

export function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use toast or alert
        alert("Thank you for reaching out! We've received your message and will respond within 24 hours.");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO
                title="Contact QuikBoys - Support & Inquiries | Bangalore & Hyderabad"
                description="Get in touch with QuikBoys. Rider support, business inquiries, and general questions. Active in Bangalore & Hyderabad. Email: support@quikboys.com"
                keywords="contact quikboys, quikboys support, customer care, rider support, business partnership inquiry, bangalore office, hyderabad office"
                canonical="https://quikboys.com/contact"
            />
            {/* Hero */}
            <section className="bg-white border-b border-gray-100 py-16 text-center">
                <h1 className="text-4xl font-bold text-[#1A2744] mb-2">Contact Us</h1>
                <p className="text-xl text-gray-500">We're Here to Help</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Contact Info & Categories */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1A2744] mb-6">Get in Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                <Mail className="text-[#DC2626] w-6 h-6 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#1A2744]">Email</p>
                                    <p className="text-gray-600">support@quikboys.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                <MessageCircle className="text-[#00D26A] w-6 h-6 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#1A2744]">WhatsApp</p>
                                    <p className="text-gray-600">+91 83413 45599</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                <Clock className="text-[#38BDF8] w-6 h-6 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#1A2744]">Response Time</p>
                                    <p className="text-gray-600">We typically respond within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1A2744] mb-6">How Can We Help You?</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-white border border-gray-100 rounded-lg hover:border-[#DC2626] transition-colors cursor-default">
                                <h3 className="font-bold text-[#1A2744]">For Riders</h3>
                                <p className="text-sm text-gray-500 mt-1">Questions about joining, earnings, or support.</p>
                                <p className="text-sm text-[#DC2626] mt-2 font-medium">riders@quikboys.com</p>
                            </div>
                            <div className="p-4 bg-white border border-gray-100 rounded-lg hover:border-[#DC2626] transition-colors cursor-default">
                                <h3 className="font-bold text-[#1A2744]">For Businesses</h3>
                                <p className="text-sm text-gray-500 mt-1">Partnership inquiries and business support.</p>
                                <p className="text-sm text-[#DC2626] mt-2 font-medium">partners@quikboys.com</p>
                            </div>
                            <div className="p-4 bg-white border border-gray-100 rounded-lg hover:border-[#DC2626] transition-colors cursor-default">
                                <h3 className="font-bold text-[#1A2744]">For Hub Captains</h3>
                                <p className="text-sm text-gray-500 mt-1">Roles and application queries.</p>
                                <p className="text-sm text-[#DC2626] mt-2 font-medium">careers@quikboys.com</p>
                            </div>
                            <div className="p-4 bg-white border border-gray-100 rounded-lg hover:border-[#DC2626] transition-colors cursor-default">
                                <h3 className="font-bold text-[#1A2744]">General</h3>
                                <p className="text-sm text-gray-500 mt-1">Media, press, or other inquiries.</p>
                                <p className="text-sm text-[#DC2626] mt-2 font-medium">support@quikboys.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-2xl font-bold text-[#1A2744] mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                                <Input id="name" required placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                                <Input id="email" type="email" required placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Mobile Number</Label>
                                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">I am a... <span className="text-red-500">*</span></Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select one" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="rider">Rider</SelectItem>
                                        <SelectItem value="business">Business Partner</SelectItem>
                                        <SelectItem value="captain">Hub Captain</SelectItem>
                                        <SelectItem value="customer">Customer</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                            <Input id="subject" required placeholder="How can we help?" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                            <Textarea id="message" required placeholder="Tell us more..." className="min-h-[150px]" />
                        </div>

                        <Button type="submit" className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white py-6 text-lg">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
