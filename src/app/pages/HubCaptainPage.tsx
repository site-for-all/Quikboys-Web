
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HubCaptainForm } from '../../components/HubCaptainForm';
import {
  Users, Briefcase, TrendingUp, Shield, Award,
  BarChart, BatteryCharging, UserCheck, Smartphone,
  MapPin, Clock, School, ArrowDown
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function HubCaptainPage() {
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
            Become a Hub Captain
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#38BDF8] font-semibold mb-4"
          >
            Lead. Manage. Grow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#CBD5E1] max-w-3xl mx-auto mb-10"
          >
            Take charge of local operations. Manage a team of riders. Build your leadership career with QuikBoys.
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

      {/* Section 2: What is a Hub Captain? */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A2744] mb-4">The Backbone of QuikBoys Operations</h2>
        </div>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center">
          <p>
            Hub Captains are local leaders who manage day-to-day delivery operations in their area. You'll be the bridge between our riders and the company, ensuring smooth operations, happy riders, and delighted customers.
          </p>
          <p>
            This isn't just a job—it's a leadership opportunity. You'll develop management skills, work directly with our operations team, and play a crucial role in QuikBoys' growth story.
          </p>
          <p className="font-medium text-[#1A2744]">
            As we expand across India, Hub Captains will be at the forefront of building our delivery network in new cities and neighborhoods.
          </p>
        </div>
      </section>

      {/* Section 3: Responsibilities */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-12">Your Responsibilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Manage Your Team", desc: "Recruit, onboard, and lead a team of delivery riders. Handle scheduling, resolve issues, and keep your team motivated and productive." },
              { icon: BarChart, title: "Run Smooth Operations", desc: "Ensure deliveries run on time in your hub. Monitor real-time performance, optimize routes, and maintain our delivery SLAs." },
              { icon: Shield, title: "Maintain Quality", desc: "Uphold QuikBoys' service standards. Handle customer escalations, conduct rider training, and ensure every delivery exceeds expectations." },
              { icon: UserCheck, title: "Build Relationships", desc: "Connect with local businesses. Help onboard new restaurant and retail partners. Be the face of QuikBoys in your area." },
              { icon: TrendingUp, title: "Drive Results", desc: "Track and report hub metrics. Identify improvement areas, implement solutions, and consistently beat your targets." },
              { icon: BatteryCharging, title: "Manage EV Program", desc: "Oversee EV scooter allocation in your hub. Coordinate charging logistics and support riders on the electric program." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1A2744] rounded-xl flex items-center justify-center text-white mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2744] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-12">Hub Captain Benefits</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "Competitive Salary", desc: "Fixed monthly salary + performance bonuses" },
            { icon: TrendingUp, title: "Growth Path", desc: "Fast-track to City Manager & Regional Head" },
            { icon: School, title: "Training & Development", desc: "Leadership training & operations mgmt courses" },
            { icon: Shield, title: "Health Insurance", desc: "Comprehensive medical coverage for you & family" },
            { icon: Smartphone, title: "Tools Provided", desc: "Company phone, laptop, and all tools needed" },
            { icon: Award, title: "Recognition", desc: "Monthly awards, annual trips, and dedicated rewards" }
          ].map((item, idx) => (
            <Card key={idx} className="border-none shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <item.icon className="w-10 h-10 mx-auto text-[#DC2626] mb-4" />
                <h3 className="font-bold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 5: Requirements */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-12">Who We're Looking For</h2>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                { label: "Experience", val: "0-2 years in logistics, delivery, retail, or team management" },
                { label: "Local Knowledge", val: "Deep understanding of your city's neighborhoods and routes" },
                { label: "Communication", val: "Excellent verbal skills in English + local language" },
                { label: "Leadership", val: "Ability to manage, motivate, and mentor a team" },
                { label: "Tech Comfort", val: "Comfortable with smartphones, apps, and dashboards" },
                { label: "Availability", val: "Full-time commitment, flexible with working hours" }
              ].map((req, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#00D26A]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00D26A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2744]">{req.label}</h4>
                    <p className="text-sm text-gray-600">{req.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Application Form */}
      <section ref={formRef} className="py-20 px-4 bg-white" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Apply to Lead</h2>
            <p className="text-xl text-gray-600">Ready to build your leadership career? Fill out the form below.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 p-1 md:p-8">
            <HubCaptainForm />
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto bg-white">
        <h2 className="text-2xl font-bold text-[#1A2744] text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {[
            { q: "What are the working hours for a Hub Captain?", a: "Hub Captains typically work full-time with flexible hours. Hours may vary during peak seasons or special events." },
            { q: "Is prior delivery experience mandatory?", a: "Not mandatory. Experience in logistics, retail operations, or team management is valuable." },
            { q: "Will I get training?", a: "Yes! All Hub Captains go through a comprehensive training program covering operations, leadership, and our tech platform." },
            { q: "How many riders will I manage?", a: "Typically 20-50 riders depending on your hub size and location. This may grow as your hub expands." },
            { q: "Can I become a Hub Captain if I'm currently a rider?", a: "Absolutely! We love promoting from within. High-performing riders with leadership potential are ideal Hub Captain candidates." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="font-medium text-[#1A2744]">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </div>
  );
}
