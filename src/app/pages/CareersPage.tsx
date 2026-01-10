
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

import { ArrowRight, Users, Zap, Heart, Globe, Briefcase, Rocket } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CareersForm } from '../../components/CareersForm';

export default function CareersPage() {


    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <SEO
                title="Careers at QuikBoys | Join Our Team"
                description="Join QuikBoys and help revolutionize last-mile delivery. We are hiring for Engineering, Operations, Marketing, and more. View open positions now!"
                keywords="QuikBoys careers, jobs at QuikBoys, delivery startup jobs, startup hiring, operations jobs, engineering jobs"
                canonical="https://quikboys.com/careers"
            />

            {/* Hero Section */}
            <section className="bg-[#1A2744] text-white py-20 px-4 md:py-32 relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#38BDF8]/10 to-transparent pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#38BDF8] font-medium mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38BDF8]"></span>
                        </span>
                        We are Hiring!
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Build the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#00D26A]">Last-Mile Logistics</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Join a fast-paced team that's changing how things move. We're looking for dreamers, doers, and relentless executors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            onClick={() => document.getElementById('join-talent-network')?.scrollIntoView({ behavior: 'smooth' })}
                            size="lg"
                            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 h-14 text-lg rounded-full"
                        >
                            Join Talent Network <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We believe in moving fast, breaking barriers, and delivering happiness (literally).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Velocity", desc: "We move fast. Speed is our currency. We iterate, learn, and improve every single day." },
                            { icon: Users, title: "Customer Obsession", desc: "We work backward from the customer. Every decision starts and ends with them." },
                            { icon: Heart, title: "Empathy", desc: "We care about our partners, our riders, and our team. Success is shared." },
                            { icon: Globe, title: "Impact", desc: "We are solving real-world problems at scale. Your work here matters." },
                            { icon: Briefcase, title: "Ownership", desc: "We act like owners. We take responsibility and don't make excuses." },
                            { icon: Rocket, title: "Innovation", desc: "We challenge the status quo. 'It's always been done this way' is not an answer." }
                        ].map((value, i) => (
                            <Card key={i} className="border-gray-100 hover:shadow-lg transition-shadow group">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#38BDF8] mb-6 group-hover:scale-110 transition-transform">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A2744] mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}


            {/* Talent Network Form Section */}
            <section className="py-24 px-4 bg-white" id="join-talent-network">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center md:hidden">
                        <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Join Our Talent Network</h2>
                        <p className="text-gray-600">Don't see the right role? specialized? Drop your details and we'll keep you on our radar.</p>
                    </div>
                    <CareersForm />
                </div>
            </section>
        </div>
    );
}
