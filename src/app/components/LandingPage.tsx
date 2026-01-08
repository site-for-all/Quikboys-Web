
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Bell, MapPin, Clock, BatteryCharging, Wrench, Leaf, TrendingUp } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute top-0 right-0 -z-10 bg-[#ECFDF5] w-1/2 h-full rounded-l-[100px] opacity-60 hidden lg:block" />

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
              </div>
            </div>

            {/* Visual Element - Earnings Card */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38BDF8]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00D26A]/20 rounded-full blur-2xl" />

              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 relative z-10 transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Today's Earnings</p>
                    <h3 className="text-4xl font-bold text-[#1A2744]">₹1,850</h3>
                  </div>
                  <div className="bg-[#ECFDF5] px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#00D26A] rounded-full animate-pulse" />
                    <span className="text-[#00D26A] font-bold text-sm">Live</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-[#DC2626]/10 p-3 rounded-lg text-[#DC2626]">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A2744]">Hero Return Active</p>
                      <p className="text-sm text-gray-500">Earning on return trip home</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-[#38BDF8]/10 p-3 rounded-lg text-[#38BDF8]">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A2744]">Express Corridor</p>
                      <p className="text-sm text-gray-500">Optimized route • +20% faster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Delivery Section */}
      <section className="py-24 bg-white">
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
      </section>

      {/* EV Program Section */}
      <section className="py-24 bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5]">
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

            <div className="lg:w-1/2 relative">
              {/* Placeholder for EV Scooter Image - Creating a CSS shape representation or use a generating image later */}
              <div className="aspect-square rounded-3xl bg-white/40 border border-white/50 backdrop-blur-xl p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00D26A]/10 to-transparent" />
                {/* Abstract representation of green energy/scooter */}
                <div className="text-center">
                  <Leaf className="w-32 h-32 text-[#00D26A] mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold text-[#1A2744]">Green Fleet</h3>
                  <p className="text-gray-600">Eco-friendly delivery network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
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

            {/* For Hub Captains */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#1A2744] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#1A2744] text-white rounded-full flex items-center justify-center text-sm font-bold">H</span>
                For Hub Captains
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">1</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Apply Now</h4>
                  <p className="text-gray-600">Submit your details and management experience.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">2</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Training</h4>
                  <p className="text-gray-600">Get trained on our fleet management systems.</p>
                </div>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#1A2744] rounded-full flex items-center justify-center font-bold text-[#1A2744] z-10">3</span>
                  <h4 className="text-xl font-bold text-[#1A2744] mb-2">Lead & Earn</h4>
                  <p className="text-gray-600">Manage your hub, lead riders, and grow your career.</p>
                </div>
              </div>
              <div className="mt-10">
                <Button onClick={() => navigate('/hub-captain')} className="w-full bg-[#1A2744] hover:bg-[#0A1830] text-white py-6 text-lg font-semibold">
                  Become a Captain
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
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-[#1A2744]">
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
      </section>
    </div>
  );
}