
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Bell, MapPin, Clock, BatteryCharging, Wrench, Leaf, TrendingUp } from "lucide-react";
import { SEO } from '../../components/SEO';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function LandingPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuikBoys, setIsQuikBoys] = useState(true);

  const evSlides = [
    "/images/ev-slide-1.png",
    "/images/ev-slide-2.png",
    "/images/ev-slide-3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % evSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO
        title="QuikBoys - Delivery Partner Jobs & Business Logistics Solutions"
        description="Join QuikBoys as a delivery partner and earn on every kilometer. Businesses: Get reliable real-time delivery services. Now in Bangalore & Hyderabad. Apply today!"
        keywords="delivery partner, delivery boy job, logistics service, real-time delivery, bangalore delivery, hyderabad delivery, ev delivery, quikboys"
        canonical="https://quikboys.com/"
        ogTitle="QuikBoys - Deliver Smart. Earn More. Return Rich."
        ogDescription="India's smartest delivery platform. Riders earn on every kilometer. Businesses get real-time tracking. Join the revolution!"
        ogImage="https://quikboys.com/images/og-home.jpg"
        ogUrl="https://quikboys.com/"
        twitterTitle="QuikBoys - Deliver Smart. Earn More. Return Rich."
        twitterDescription="India's smartest delivery platform. Join as a rider or partner your business today!"
        twitterImage="https://quikboys.com/images/twitter-home.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "QuikBoys",
          "alternateName": "QuikBoys Delivery",
          "url": "https://quikboys.com",
          "logo": "https://quikboys.com/images/logo.png",
          "description": "India's smartest delivery platform offering real-time tracked deliveries for businesses and earning opportunities for delivery partners.",
          "foundingDate": "2025",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-83413-45599",
              "contactType": "customer service",
              "email": "support@quikboys.com",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Kannada", "Telugu"]
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/quikboys",
            "https://www.instagram.com/quikboys",
            "https://twitter.com/quikboys",
            "https://www.facebook.com/quikboys"
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute top-0 right-0 -z-10 bg-[#ECFDF5] w-1/2 h-full rounded-l-[100px] opacity-60 hidden lg:block" />

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <button
                onClick={() => document.getElementById('ev-program')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-[#00D26A] font-bold text-sm shadow-sm md:mb-0 hover:bg-green-100 hover:border-green-300 transition-colors cursor-pointer"
              >
                ⚡ Get an EV Scooter @ ₹0 Investment
              </button>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#1A2744] leading-[1.1]">
                Deliver Smart. <br />
                Earn More. <br />
                <span className="text-[#DC2626]">Return Rich.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                The only delivery platform where riders earn on every kilometer—even on the way home.
                <br />
                <span className="font-semibold mt-2 block text-[#1A2744]">Hero Return × Zero Dead KM</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg h-14 px-8"
                  onClick={() => navigate('/driver-onboarding')}
                >
                  Join as a Rider <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white text-lg h-14 px-8"
                  onClick={() => navigate('/partner-with-us')}
                >
                  Partner with Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white text-lg h-14 px-8"
                  onClick={() => navigate('/hub-operations')}
                >
                  Join Hub Operations
                </Button>
              </div>
            </div>

            {/* Visual Element - Hero Return Simulator */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38BDF8]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#DC2626]/20 rounded-full blur-2xl" />

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
                {/* Header / Toggle */}
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#1A2744] mb-4 text-center">Return Trip Home 🏠</h3>
                  <div className="flex bg-gray-200 p-1 rounded-xl relative">
                    <div className="w-1/2 text-center py-2 z-10 cursor-pointer font-bold text-gray-500 transition-colors" onClick={() => setIsQuikBoys(false)}>
                      Other Apps
                    </div>
                    <div className="w-1/2 text-center py-2 z-10 cursor-pointer font-bold text-[#DC2626] transition-colors" onClick={() => setIsQuikBoys(true)}>
                      QuikBoys
                    </div>
                    <motion.div
                      className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm"
                      animate={{ x: isQuikBoys ? "100%" : "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </div>
                </div>

                {/* Simulation Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {isQuikBoys ? (
                      <motion.div
                        key="quikboys"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        {/* Route Visualization */}
                        <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-2">
                          <span>Drop Location</span>
                          <span className="text-[#00D26A] font-bold">New Order!</span>
                          <span>Home</span>
                        </div>
                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-[#00D26A] to-gray-200 w-full" />
                        </div>

                        {/* Stats */}
                        <div className="bg-[#ECFDF5] border border-[#00D26A]/20 rounded-xl p-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-[#00D26A] text-white p-2 rounded-lg">
                              <TrendingUp size={20} />
                            </div>
                            <div>
                              <p className="text-sm text-[#065F46]">Return Trip</p>
                              <p className="font-bold text-[#064E3B]">Earning Active</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-[#00D26A]">+₹120</p>
                            <p className="text-xs text-[#065F46]">Profit</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="others"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                      >
                        {/* Route Visualization */}
                        <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-2">
                          <span>Drop Location</span>
                          <span className="text-red-400">Empty Return</span>
                          <span>Home</span>
                        </div>
                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-red-300 to-gray-200 w-full opacity-50" />
                        </div>

                        {/* Stats */}
                        <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                              <BatteryCharging size={20} className="rotate-180" />
                            </div>
                            <div>
                              <p className="text-sm text-red-800">Return Trip</p>
                              <p className="font-bold text-red-900">Fuel Cost</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-red-600">-₹40</p>
                            <p className="text-xs text-red-800">Loss</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Delivery Section */}
      < section className="py-24 bg-white" >
        <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A2744] mb-6">Real-Time Delivery. <br className="hidden md:block" /> Every Order Tracked.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience logistics transparency like never before. From pickup to doorstep, every moment is visible.</p>
        </div>

        <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="mx-auto w-16 h-16 bg-[#DC2626]/5 rounded-full flex items-center justify-center mb-6 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A2744] mb-3">Live GPS Tracking</h3>
            <p className="text-gray-600">Track every delivery in real-time. Customers and businesses see exactly where their order is.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="mx-auto w-16 h-16 bg-[#DC2626]/5 rounded-full flex items-center justify-center mb-6 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
              <Bell size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A2744] mb-3">Instant Updates</h3>
            <p className="text-gray-600">Automatic notifications at every milestone—pickup, in-transit, nearby, and delivered.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="mx-auto w-16 h-16 bg-[#DC2626]/5 rounded-full flex items-center justify-center mb-6 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A2744] mb-3">Express Corridors</h3>
            <p className="text-gray-600">Smart routing through optimized delivery corridors. Faster deliveries, efficient rides.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="mx-auto w-16 h-16 bg-[#DC2626]/5 rounded-full flex items-center justify-center mb-6 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A2744] mb-3">Accurate ETAs</h3>
            <p className="text-gray-600">AI-powered delivery time predictions that customers can trust. Reliability that builds business.</p>
          </div>
        </div>
      </section >

      {/* EV Program Section */}
      < section id="ev-program" className="py-24 bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5]" >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-[#00D26A] font-bold text-sm shadow-sm border border-[#00D26A]/20 mb-6">
                <Leaf size={16} /> Sustainability Initiative
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A2744] mb-6">EV Scooters for Eligible Delivery Partners</h2>
              <p className="text-xl text-gray-700 mb-8">Join India's greenest delivery fleet. We provide electric scooters to riders who need them—zero fuel costs, zero emissions.</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg text-[#00D26A] shadow-sm"><BatteryCharging size={24} /></div>
                  <div>
                    <h4 className="font-bold text-[#1A2744] text-lg">Zero Fuel Costs</h4>
                    <p className="text-gray-600">Save ₹3,000-5,000 monthly on petrol costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg text-[#00D26A] shadow-sm"><Wrench size={24} /></div>
                  <div>
                    <h4 className="font-bold text-[#1A2744] text-lg">Free Maintenance</h4>
                    <p className="text-gray-600">We handle all repairs. You just ride and earn.</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#00D26A] hover:bg-[#00b359] text-white text-lg h-14 px-8 shadow-lg shadow-[#00D26A]/20"
                onClick={() => navigate('/driver-onboarding')}
              >
                Apply for EV Program <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/50 shadow-2xl bg-gray-200">
                {evSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide}
                    alt="QuikBoys EV Fleet"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00D26A]/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white drop-shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="text-white fill-white" size={24} />
                      <span className="font-bold text-lg">Green Fleet</span>
                    </div>
                    <p className="text-white/90 font-medium">Zero Emissions. 100% Savings.</p>
                  </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                  {evSlides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* NEW: Work Part-Time Section */}
      < section className="py-24 bg-[#FFFBEB]" >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-amber-100 rounded-[2.5rem] p-8 md:p-16 border border-amber-200 shadow-xl overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-[#B45309] font-bold text-sm shadow-sm border border-amber-200 mb-6">
                  <Clock size={16} /> Flexible Hours
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-[#78350F] mb-6 leading-tight">
                  Work Part-Time. <br /> Earn Full-Time.
                </h2>
                <p className="text-xl text-[#92400E] mb-8 leading-relaxed font-medium">
                  Got a few hours free? Turn your spare time into cash. Whether you're a student, professional, or just looking for extra income.
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    "🌙 Evening Shifts",
                    "🌅 Morning Shifts",
                    "📅 Weekends Only",
                    "⏱️ 2-4 Hours/Day"
                  ].map((tag, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-xl text-[#B45309] font-bold shadow-sm border border-amber-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[#F59E0B]/20">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-md text-[#F59E0B]">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[#78350F] text-lg">Earn up to ₹300/hour</p>
                      <p className="text-[#92400E] text-sm">During peak hours and surge times.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/50 relative transform hover:rotate-1 transition-transform duration-500">
                  <div className="absolute -top-6 -right-6 bg-[#F59E0B] text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-center text-xs p-2 shadow-lg rotate-12 z-20">
                    INSTANT PAYOUTS
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A2744] mb-6 text-center">Your Earning Potential</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div>
                        <p className="font-bold text-[#1A2744]">2 Hours / Day</p>
                        <p className="text-xs text-gray-500">Part-Time (Student)</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#00D26A] text-xl">₹8,000+</p>
                        <p className="text-[10px] text-gray-400">per month</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 scale-105 shadow-md border-l-4 border-l-[#F59E0B]">
                      <div>
                        <p className="font-bold text-[#1A2744]">4 Hours / Day</p>
                        <p className="text-xs text-gray-500">Half-Day (Professional)</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#00D26A] text-xl">₹18,000+</p>
                        <p className="text-[10px] text-gray-400">per month</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div>
                        <p className="font-bold text-[#1A2744]">Weekends Only</p>
                        <p className="text-xs text-gray-500">Sat & Sun (10 hrs)</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#00D26A] text-xl">₹12,000+</p>
                        <p className="text-[10px] text-gray-400">per month</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate('/driver-onboarding')}
                    className="w-full mt-8 bg-[#1A2744] hover:bg-[#0A1830] text-white h-12 text-lg font-bold"
                  >
                    Start Part-Time Job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* How It Works Section */}
      < section className="py-24 bg-white" >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2744] mb-4">Built Different. Built Better.</h2>
            <p className="text-xl text-gray-600">Streamlined process for everyone involved.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Riders */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#1A2744] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center text-sm font-bold">R</span>
                For Riders
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#DC2626] rounded-full flex items-center justify-center font-bold text-[#DC2626] z-10">1</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Sign Up</h4>
                  <p className="text-gray-600">Complete quick registration with your documents.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#DC2626] rounded-full flex items-center justify-center font-bold text-[#DC2626] z-10">2</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Get Verified</h4>
                  <p className="text-gray-600">Our team verifies your profile in 24-48 hours.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#DC2626] rounded-full flex items-center justify-center font-bold text-[#DC2626] z-10">3</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Start Earning</h4>
                  <p className="text-gray-600">Go online, accept deliveries, earn on every kilometer.</p>
                </div>
              </div>
              <div className="mt-10">
                <Button onClick={() => navigate('/driver-onboarding')} className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white py-6 text-lg font-semibold">
                  Start your Journey
                </Button>
              </div>
            </div>

            {/* For Hub Operations */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#1A2744] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#1A2744] text-white rounded-full flex items-center justify-center text-sm font-bold">H</span>
                Hub Operations
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">1</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">3 Roles Available</h4>
                  <p className="text-gray-600">Cluster Manager, Hub Executive, or Hub Captain.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">2</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Build Career</h4>
                  <p className="text-gray-600">Lead riders, manage logistics, and grow with us.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">3</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Competitive Pay</h4>
                  <p className="text-gray-600">Salary + Performance Incentives from day one.</p>
                </div>
              </div>
              <div className="mt-10">
                <Button onClick={() => navigate('/hub-operations')} className="w-full bg-[#1A2744] hover:bg-[#0A1830] text-white py-6 text-lg font-semibold">
                  Explore Roles
                </Button>
              </div>
            </div>

            {/* For Businesses */}
            <div className="bg-[#1A2744] rounded-3xl p-8 lg:p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#38BDF8] text-[#1A2744] rounded-full flex items-center justify-center text-sm font-bold">B</span>
                For Businesses
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-white/20">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-[#1A2744] border-2 border-[#38BDF8] rounded-full flex items-center justify-center font-bold text-[#38BDF8] z-10">1</span>
                  <h4 className="text-xl font-bold text-white mb-2">Partner With Us</h4>
                  <p className="text-gray-300">Fill a simple form, tell us your needs.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-[#1A2744] border-2 border-[#38BDF8] rounded-full flex items-center justify-center font-bold text-[#38BDF8] z-10">2</span>
                  <h4 className="text-xl font-bold text-white mb-2">Get Integrated</h4>
                  <p className="text-gray-300">We set up your delivery operations seamlessly.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-[#1A2744] border-2 border-[#38BDF8] rounded-full flex items-center justify-center font-bold text-[#38BDF8] z-10">3</span>
                  <h4 className="text-xl font-bold text-white mb-2">Scale Seamlessly</h4>
                  <p className="text-gray-300">Real-time tracking, reliable deliveries, grew revenue.</p>
                </div>
              </div>
              <div className="mt-10">
                <Button onClick={() => navigate('/partner-with-us')} variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#1A2744] py-6 text-lg font-semibold">
                  Partner Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Careers CTA Section */}
      < section className="py-20 bg-gradient-to-r from-[#1A2744] to-[#2D3F65] text-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5">
            <div className="inline-block px-4 py-1.5 bg-[#38BDF8]/20 border border-[#38BDF8]/30 rounded-full text-[#38BDF8] font-bold text-sm mb-6">
              WE ARE HIRING
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Build the Future of Logistics</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join a team of dreamers and doers. We are looking for passionate individuals to help us revolutionize last-mile delivery. Engineering, Operations, Marketing, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              {["🚀 Fast-Paced Growth", "💡 Innovation First", "🤝 Great Culture"].map((tag, i) => (
                <span key={i} className="flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-1.5 h-1.5 bg-[#00D26A] rounded-full" /> {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full max-w-sm text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Join Our Talent Network</h3>
              <p className="text-gray-300 mb-6 text-sm">Be the first to know about open roles.</p>
              <Button
                onClick={() => navigate('/careers')}
                className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#1A2744] font-bold h-12 text-lg"
              >
                View Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section >

      {/* Final CTA Banner */}
      < section className="py-20 bg-[#1A2744]" >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the QuikBoys Revolution?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Whether you're a rider looking to earn more or a business seeking reliable deliveries—we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/driver-onboarding')}
              className="bg-white text-[#1A2744] hover:bg-gray-100 text-lg px-10 py-6 h-auto font-bold"
            >
              Join as a Rider
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/partner-with-us')}
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-10 py-6 h-auto"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section >
    </div >
  );
}