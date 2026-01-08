
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { RegistrationForm } from '../../components/RegistrationForm';
import {
  Wallet, Truck, MapPin, Zap, Shield, Clock,
  BatteryCharging, Wrench, Leaf, CheckCircle,
  Smartphone, CreditCard, FileText, User, ArrowDown, HelpCircle,
  FileCheck, Rocket
} from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from '../components/ui/card';

export default function DriverOnboardingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      {/* Section 1: Hero Section */}
      <section className="bg-[#1A2744] text-white py-20 px-4 md:py-28 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#38BDF8]/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Become a QuikBoys Delivery Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#38BDF8] font-semibold mb-4"
          >
            Earn More. Ride Smart. Return Rich.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#CBD5E1] max-w-3xl mx-auto mb-10"
          >
            Join the revolution. Earn competitive payouts, get priority routes home, and never waste a kilometer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg px-8 h-12"
            >
              Apply Now <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Riders Choose QuikBoys */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-12">Why Riders Choose QuikBoys</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Truck,
              title: "Zero Dead KM",
              desc: "Our smart system ensures you never ride empty. Every single kilometer you travel earns you money—no exceptions."
            },
            {
              icon: MapPin, // Home icon equivalent
              title: "Hero Return",
              desc: "Get paid deliveries on your route back home at the end of your shift. Turn your commute into earnings."
            },
            {
              icon: Wallet,
              title: "High Monthly Earnings",
              desc: "Earn competitive per-delivery rates with weekly payouts and performance bonuses."
            },
            {
              icon: Zap,
              title: "Express Corridors",
              desc: "Earn extra on high-demand routes. Our AI identifies surge areas so you can maximize your earnings."
            },
            {
              icon: Shield,
              title: "Insurance Benefits",
              desc: "Comprehensive accidental insurance for you and your family. Ride with complete peace of mind."
            },
            {
              icon: Clock,
              title: "Work Your Way",
              desc: "Full-time or part-time—you decide. No minimum hours, no pressure. Be your own boss."
            }
          ].map((item, index) => (
            <Card key={index} className="border-t-4 border-t-[#38BDF8] hover:shadow-lg transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-[#1A2744] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: EV Program Highlight */}
      <section className="py-20 bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-white/80 text-[#00D26A] px-4 py-1 rounded-full text-sm font-bold border border-[#00D26A]/20 inline-block mb-4">
              🌱 GREEN INITIATIVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2744] mb-4">EV Scooters for Eligible Delivery Partners</h2>
            <p className="text-xl text-gray-700">No vehicle? No problem. We provide electric scooters to eligible riders.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "EV Scooter", desc: "Get a fully-maintained electric scooter when you qualify" },
              { icon: BatteryCharging, title: "Zero Fuel Costs", desc: "Save on petrol costs every month" },
              { icon: Wrench, title: "Free Maintenance", desc: "We handle all repairs and servicing" },
              { icon: Wallet, title: "Higher Take-Home", desc: "Lower costs = more money in your pocket" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 text-center">
                <benefit.icon className="w-10 h-10 text-[#00D26A] mx-auto mb-4" />
                <h3 className="font-bold text-[#1A2744] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Requirement */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-12">What You Need to Join</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: User, label: "Age", value: "Must be 18 years or older" },
            { icon: Smartphone, label: "Smartphone", value: "Android device with internet" },
            { icon: FileText, label: "Aadhaar Card", value: "Valid government-issued ID" },
            { icon: CreditCard, label: "PAN Card", value: "Required for tax compliance" },
            { icon: Truck, label: "Driving License", value: "Valid two-wheeler license" },
            { icon: Wallet, label: "Bank Account", value: "For weekly direct deposits" },
          ].map((req, i) => (
            <div key={i} className="flex items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-[#00D26A] mr-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#1A2744]">{req.label}</h4>
                <p className="text-sm text-gray-500">{req.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center justify-center text-center gap-3">
          <Truck className="text-[#38BDF8]" />
          <p className="text-[#1A2744]">
            Don't have a vehicle? <span className="font-semibold">Check if you're eligible for our EV Scooter Program!</span>
          </p>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-16">Start Earning in 3 Simple Steps</h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Timeline connectors (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10" />

            {[
              { icon: FileText, title: "Apply Online", desc: "Fill out the form below with your details and upload your documents. Takes just 5 minutes." },
              { icon: FileCheck, title: "Get Verified", desc: "Our team reviews your application and verifies your documents." },
              { icon: Rocket, title: "Start Delivering", desc: "Once the app is launched, download the app, start accepting deliveries. Earn from day one!" }
            ].map((step, idx) => (
              <div key={idx} className="text-center bg-white">
                <div className="w-16 h-16 bg-[#1A2744] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1A2744] mb-3">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Application Form */}
      <section ref={formRef} className="py-20 px-4 bg-gray-50" id="apply">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl p-1 md:p-8">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Section 7: Help & FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Need Help Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-[#1A2744] text-white p-6 rounded-xl sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6 text-[#38BDF8]" />
                <h3 className="text-xl font-bold">Need Help?</h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm">Have questions about the registration process? Our support team is here to help.</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">WhatsApp Support</p>
                  <a href="https://wa.me/918341345599" className="text-[#38BDF8] font-medium hover:underline">+91 83413 45599</a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Email</p>
                  <a href="mailto:riders@quikboys.com" className="text-[#38BDF8] font-medium hover:underline">riders@quikboys.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#1A2744] mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How long does the verification process take?", a: "You'll receive a confirmation via SMS and WhatsApp once approved." },
                { q: "When and how do I get paid?", a: "Payments are processed every week, directly to your bank account every Monday. No delays, no deductions." },
                { q: "Can I work part-time?", a: "Absolutely! You choose your own hours. Work 2 hours or 12 hours—it's completely up to you." },
                { q: "What is the EV Program?", a: "We provide electric scooters to eligible riders. You get zero fuel costs, free maintenance, and keep more of your earnings." },
                { q: "Do I need my own vehicle?", a: "Not necessarily. If you don't have a vehicle, you can check your eligibility for our EV Scooter Program." },
                { q: "What areas do you operate in?", a: "We're currently launching in Bangalore and Hyderabad, with pan-India expansion planned soon." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-[#1A2744]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
}
