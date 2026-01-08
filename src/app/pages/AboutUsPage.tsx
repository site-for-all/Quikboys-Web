
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Box, TrendingUp, Leaf, Smartphone } from "lucide-react";

export function AboutUsPage() {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1A2744] mb-6">
                        About QuikBoys
                    </h1>
                    <p className="text-xl md:text-2xl text-[#DC2626] font-medium">
                        Redefining Last-Mile Logistics in India
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#1A2744] mb-8">Born from a Simple Belief</h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            QuikBoys was founded with one revolutionary idea: delivery partners deserve to earn on every kilometer they ride—not just when they're carrying a package.
                        </p>
                        <p>
                            We saw an industry where riders spent hours returning empty-handed after deliveries, burning fuel and time with nothing to show for it. We knew there had to be a better way.
                        </p>
                        <p>
                            That's why we built <span className="font-semibold text-[#DC2626]">Hero Return × Zero Dead KM</span>—a system that ensures our riders earn on every single kilometer, whether they're heading to a pickup or returning home.
                        </p>
                        <p>
                            But we didn't stop there. We asked ourselves: what if we could make deliveries not just profitable, but sustainable? That's when our EV Program was born. Today, we're proud to provide free electric scooters to riders who need them, creating India's greenest delivery fleet while putting more money in our partners' pockets.
                        </p>
                        <p className="font-medium text-[#1A2744]">
                            QuikBoys isn't just a logistics company. We're a movement—for smarter earnings, sustainable deliveries, and respect for the people who power India's delivery economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#1A2744] text-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-[#38BDF8]">Our Mission</h3>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            To build India's most rider-centric and sustainable delivery platform—where every kilometer counts, every delivery matters, and every partner thrives.
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-[#00D26A]">Our Vision</h3>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            A future where last-mile logistics is efficient, eco-friendly, and fair. Where technology serves people, not the other way around. Where delivery partners are respected, well-compensated, and proud of what they do.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="bg-[#DC2626]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#DC2626]">
                                <TrendingUp size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1A2744] mb-3">Rider First</h4>
                            <p className="text-gray-600">
                                Everything we build starts with one question: does this help our riders earn more and work better? If not, we go back to the drawing board.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="bg-[#38BDF8]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#38BDF8]">
                                <Box size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1A2744] mb-3">Transparency Always</h4>
                            <p className="text-gray-600">
                                Real-time tracking isn't just for customers—it's our philosophy. Clear earnings, honest communication, no hidden surprises.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="bg-[#00D26A]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#00D26A]">
                                <Leaf size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1A2744] mb-3">Sustainability Matters</h4>
                            <p className="text-gray-600">
                                We're committed to making deliveries greener. Our EV Program is just the beginning of our journey toward zero-emission logistics.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <div className="bg-[#1A2744]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#1A2744]">
                                <Smartphone size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1A2744] mb-3">Technology with Purpose</h4>
                            <p className="text-gray-600">
                                We use AI and smart systems not to replace people, but to empower them. Better routes, better earnings, better lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanding Across India */}
            <section className="py-16 bg-[#ECFDF5] border-y border-[#00D26A]/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Starting Local. Going National.</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        QuikBoys is launching in <strong>Bangalore</strong> and <strong>Hyderabad</strong>—two of India's most dynamic cities. But this is just the beginning.
                        Our vision is Pan-India coverage, bringing the QuikBoys revolution to every city, every town, and every rider who wants to earn smarter.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#00D26A] font-semibold text-sm shadow-sm border border-[#00D26A]/20">
                        Watch this space. We're just getting started. 🚀
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2744] mb-8">Be Part of Something Bigger</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={() => navigate('/driver-onboarding')}
                        className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg px-8 py-6 h-auto"
                    >
                        Join as a Rider <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/partner-with-us')}
                        className="border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white text-lg px-8 py-6 h-auto"
                    >
                        Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => navigate('/hub-captain')}
                        className="border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white text-lg px-8 py-6 h-auto"
                    >
                        Become a Hub Captain <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
