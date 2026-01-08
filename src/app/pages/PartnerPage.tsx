
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { PartnerForm } from '../../components/PartnerForm';
import {
  Users, Truck,
  CheckCircle2, MapPin, Zap, LayoutGrid, ArrowRight,
  Pizza, ShoppingCart, Activity, Package, Gift
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export function PartnerPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-16">

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
            Partner With QuikBoys
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#38BDF8] font-semibold mb-4"
          >
            Reliable Deliveries. Real-Time Visibility. Real Results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#CBD5E1] max-w-3xl mx-auto mb-10"
          >
            From local businesses to enterprise operations—we power deliveries that delight your customers.
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
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Partner With QuikBoys */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Logistics That Works for Your Business</h2>
          <p className="text-xl text-gray-600">We're not just another delivery service. We're your growth partner.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Real-Time Tracking", desc: "Full visibility into every delivery. Share tracking links with customers and eliminate 'where's my order?' calls." },
            { icon: CheckCircle2, title: "Verified Riders", desc: "Background-verified, trained delivery partners who represent your brand professionally. Consistent quality every time." },
            { icon: Zap, title: "Express Delivery", desc: "Quick delivery times for local orders. Keep your customers happy with speed." },
            { icon: LayoutGrid, title: "Transparent Pricing", desc: "Pay per delivery or choose a monthly plan. No hidden fees, no surprises. Clear pricing from day one." },
            { icon: Truck, title: "Quick Setup", desc: "Get started quickly. API integration available for tech-enabled businesses. We handle the complexity." },
            { icon: Users, title: "Dedicated Support", desc: "A dedicated account manager for your business. We're invested in your growth and success." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#DC2626] mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2744] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Real-Time Delivery Benefits */}
      <section className="py-24 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A2744] mb-4">The Power of Real-Time Delivery</h2>
            <p className="text-xl text-gray-600">See why businesses are switching to QuikBoys for their delivery operations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "100% Visibility", desc: "Track every order from pickup to delivery. Live rider locations & ETAs." },
              { title: "Digital POD", desc: "Photos, e-signatures, and timestamps for every delivery." },
              { title: "Automated Updates", desc: "SMS/WhatsApp updates for customers at every stage." },
              { title: "Data & Insights", desc: "Detailed reports on delivery times, success rates, and peak hours." },
              { title: "Smart Routing", desc: "AI optimizes routes for faster deliveries and lower costs." },
              { title: "Scalability", desc: "From 10 to 10,000 orders a day—our platform scales with you." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#38BDF8] flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A2744] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Solutions for Every Business</h2>
            <p className="text-xl text-gray-600">Whatever you sell, we deliver.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Pizza, name: "Food & Restaurants", ex: "Cloud kitchens, cafes, QSRs" },
              { icon: ShoppingCart, name: "E-Commerce", ex: "Online stores, D2C brands" },
              { icon: Activity, name: "Pharmacy & Healthcare", ex: "Labs, pharmacies, hospitals" },
              { icon: Truck, name: "Grocery & FMCG", ex: "Supermarkets, kirana stores" },
              { icon: Package, name: "Documents & Parcels", ex: "Couriers, corporate offices" },
              { icon: Gift, name: "Specialty Items", ex: "Flowers, gifts, fragile items" }
            ].map((ind, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-[#38BDF8] transition-colors group">
                <ind.icon className="w-10 h-10 text-gray-400 group-hover:text-[#38BDF8] mb-4 transition-colors" />
                <h3 className="font-bold text-[#1A2744] text-lg mb-1">{ind.name}</h3>
                <p className="text-sm text-gray-500">{ind.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A2744] mb-16">Getting Started is Easy</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Tell Us Your Needs", desc: "Fill out the form below with your requirements." },
              { title: "Custom Proposal", desc: "We design a solution tailored to your business." },
              { title: "Quick Onboarding", desc: "We train your team and connect your systems." },
              { title: "Deliver & Grow", desc: "Scale your operations with real-time performance." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 bg-[#DC2626] text-white rounded-2xl rotate-3 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  <span className="-rotate-3">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#1A2744] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Application Form */}
      <section ref={formRef} className="py-20 px-4 bg-white" id="apply">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Let's Power Your Deliveries</h2>
            <p className="text-xl text-gray-600">Fill out the form and our partnerships team will contact you soon.</p>
          </div>

          <div className="shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
            <div className="p-1 md:p-8 bg-white">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1A2744] text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {[
            { q: "What areas do you cover?", a: "We currently operate in Bangalore and Hyderabad. Pan-India expansion is underway." },
            { q: "How quickly can we get started?", a: "Most partners are up and running quickly after signing up. Complex integrations may take a few days." },
            { q: "Do you offer API integration?", a: "Yes! We have REST APIs for order creation, tracking, and webhooks." },
            { q: "What's the minimum order volume?", a: "No minimum! Whether you have 5 orders a day or 500, we're happy to partner with you." },
            { q: "How does pricing work?", a: "We offer flexible pricing—pay per delivery or monthly plans. Contact us for a custom quote." },
            { q: "Can you handle COD (Cash on Delivery)?", a: "Absolutely! Our riders are trained to handle COD orders. Funds are settled to your account promptly." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`partner-faq-${i}`}>
              <AccordionTrigger className="font-medium text-[#1A2744]">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </div>
  );
}
