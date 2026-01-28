
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { RegistrationForm } from '../../components/RegistrationForm';
import { SEO } from '../../components/SEO';
import {
  Wallet, Truck, CheckCircle,
  Smartphone, FileText, User, ArrowDown, HelpCircle,
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

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Delivery Partner",
    "description": "Join QuikBoys as a delivery partner. Earn on every kilometer with our Hero Return program. Flexible hours, weekly payouts, and EV scooter option available.",
    "datePosted": "2026-01-08",
    "validThrough": "2026-12-31",
    "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "QuikBoys",
      "sameAs": "https://quikboys.com",
      "logo": "https://quikboys.com/images/logo.png"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      }
    ],
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 15000,
        "maxValue": 50000,
        "unitText": "MONTH"
      }
    },
    "qualifications": "Valid driving license, Aadhaar Card, PAN Card, Android smartphone",
    "responsibilities": "Deliver orders to customers, maintain delivery quality, use QuikBoys app for navigation and order management",
    "skills": "Two-wheeler riding, smartphone usage, customer service, time management",
    "incentiveCompensation": "Weekly payouts, performance bonuses, zero dead KM earnings, hero return payments",
    "jobBenefits": "Flexible hours, insurance coverage, EV scooter program for eligible riders"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I become a QuikBoys delivery partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit quikboys.com/driver-onboarding, fill out the application form with your details, upload your Aadhaar card and driving license, and submit. Our team will verify your documents and contact you."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required to join QuikBoys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a valid Aadhaar Card, PAN Card, Driving License, and an Android smartphone with internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need my own vehicle to join QuikBoys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. QuikBoys offers an EV scooter program for eligible riders who don't have their own vehicle."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO
        title="Delivery Boy Job in Bangalore & Hyderabad | Join QuikBoys - Earn Daily"
        description="Apply for delivery partner jobs at QuikBoys. Earn ₹30,000+ monthly, get free EV scooter option, weekly payouts. No experience needed. Join now in Bangalore & Hyderabad!"
        keywords="delivery boy job, delivery partner job, bike delivery job, delivery job bangalore, delivery job hyderabad, part time delivery, ev scooter delivery job"
        canonical="https://quikboys.com/driver-onboarding"
        ogTitle="Delivery Boy Jobs - Join QuikBoys & Earn More"
        ogDescription="Become a QuikBoys delivery partner. Zero dead kilometers, hero return payments, flexible hours. Apply in 5 minutes!"
        ogImage="https://quikboys.com/images/og-rider.jpg"
        ogUrl="https://quikboys.com/driver-onboarding"
        twitterTitle="Delivery Partner Jobs at QuikBoys"
        twitterDescription="Earn on every kilometer. Weekly payouts. EV scooter option. Apply now!"
        schema={[jobPostingSchema, faqSchema]}
      />

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
            className="text-lg text-[#CBD5E1] max-w-3xl mx-auto mb-8"
          >
            Join the revolution. No education needed. No experience required. Earn on every kilometer — even on your way home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: "🎓", text: "No Education Required" },
              { icon: "🌟", text: "Freshers Welcome" },
              { icon: "🛵", text: "Free EV Option" },
              { icon: "💳", text: "Weekly Payouts" }
            ].map((badge, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium text-white flex items-center gap-2">
                <span>{badge.icon}</span> {badge.text}
              </span>
            ))}
          </motion.div>

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

      {/* Section 2: EV Program Highlight (Moved Up & Redesigned) */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#DC2626] text-white px-6 py-2 rounded-full text-base font-bold shadow-lg shadow-red-500/30 mb-4 md:mb-6 uppercase tracking-wider"
            >
              🔥 First Come, First Served!
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2744] mb-4">
              Get an EV Scooter — <span className="text-[#00D26A]">ZERO Investment</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Want to ride electric? Eligible riders get an electric scooter with absolutely no upfront cost, no EMIs, and no interest — ever.
            </p>
          </div>

          {/* 6 Key Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {[
              { emoji: "💰", title: "₹0 Investment", desc: "No down payment. No deposit. No hidden charges.", badge: "ZERO COST" },
              { emoji: "📅", title: "₹0 EMI Forever", desc: "No monthly installments. No interest charges. No loan.", badge: "NO EMI" },
              { emoji: "⛽", title: "₹0 Fuel Expense", desc: "Electric = No petrol. Save ₹5,000/mo on fuel.", badge: "SAVE ₹5K/MONTH" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-2xl p-6 hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-green-100 text-[#00D26A] text-xs font-bold px-2 py-1 rounded-lg">
                  {item.badge}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-xl font-bold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Eligibility & Steps */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A2744] mb-6 flex items-center gap-2">
                <span className="bg-[#1A2744] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">?</span>
                Who Can Get an EV Scooter?
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Age 18 years or older",
                  "Valid Driving License (two-wheeler)",
                  "Aadhaar Card & PAN Card",
                  "Android smartphone with internet",
                  "Willing to work minimum 6 hours/day",
                  "Available at least 6 days/week"
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-[#00D26A] flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
                <h4 className="font-bold text-yellow-800 mb-1 flex items-center gap-2">
                  📋 PRIORITY ALLOCATION
                </h4>
                <p className="text-yellow-700 text-sm">
                  EV scooters are allocated on a <strong>First Come, First Served</strong> basis. Apply early to secure your EV scooter!
                </p>
              </div>

              <Button
                onClick={() => {
                  document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#00D26A] hover:bg-[#00b359] text-white text-lg h-14 font-bold shadow-lg shadow-green-500/20"
              >
                🛵 I Want a FREE EV Scooter — Apply Now
              </Button>
              <p className="text-center text-xs text-gray-500 mt-2 font-medium">
                ⚡ First Come, First Served! No investment. No EMI.
              </p>
            </div>

            {/* Steps Visual */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1A2744] mb-6 text-center lg:text-left">Get Your EV in 4 Steps</h3>
              {[
                { step: "1", title: "Apply Online", desc: "Fill the form below and check 'I want an EV Scooter'" },
                { step: "2", title: "Get Verified", desc: "We verify your documents and check eligibility" },
                { step: "3", title: "Complete Training", desc: "Short training on EV handling and app usage" },
                { step: "4", title: "Start Earning", desc: "Collect your scooter and begin deliveries!" }
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/60 p-4 rounded-xl border border-white/50">
                  <div className="w-12 h-12 bg-[#1A2744] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2744] text-lg">{s.title}</h4>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* No Education Banner */}
      <section className="bg-[#EFF6FF] border-y border-blue-100 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
            <span className="text-3xl">🎓</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1A2744] mb-3">NO EDUCATION REQUIRED</h2>
          <p className="text-xl text-blue-800 font-medium max-w-2xl mx-auto">
            8th pass, 10th pass, 12th pass, graduate — ALL are welcome! <br />
            Your skills matter, not your degree.
          </p>
        </div>
      </section>

      {/* Section 3: Why Riders Choose QuikBoys (Re-added) */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-8 md:mb-12">Why Riders Choose QuikBoys</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎓",
              title: "Education Not Required",
              desc: "8th pass to graduate — everyone can join. Your skills matter, not your degree.",
              color: "text-blue-600",
              msg: "No Degree Needed"
            },
            {
              icon: "🌟",
              title: "No Experience Needed",
              desc: "Never done delivery before? No problem! We'll train you.",
              color: "text-[#DC2626]",
              msg: "Freshers Welcome"
            },
            {
              icon: "🚛",
              title: "Zero Dead KM",
              desc: "Every single kilometer you travel earns you money—no exceptions.",
              color: "text-[#1A2744]",
              msg: "Earn More"
            },
            {
              icon: "🏠",
              title: "Hero Return",
              desc: "Get paid deliveries on your route back home at the end of your shift.",
              color: "text-[#1A2744]",
              msg: "Paid Commute"
            },
            {
              icon: "💳",
              title: "Weekly Payouts",
              desc: "Money in your bank every Monday. No delays.",
              color: "text-[#1A2744]",
              msg: "Fast Payment"
            }
          ].map((item, index) => (
            <Card key={index} className="border-t-4 border-t-[#38BDF8] hover:shadow-lg transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-md ${item.color}`}>
                    {item.msg}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="border-t-4 border-t-[#00D26A] bg-[#ECFDF5] hover:shadow-lg transition-all transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">🛵</div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-green-100 text-[#00D26A] rounded-md">
                  Apply Now
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1A2744] mb-2">Free EV Scooter</h3>
              <p className="text-gray-600 leading-relaxed">No vehicle? Get an EV scooter with zero investment, zero EMI.</p>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Section 4: Requirement */}
      <section className="py-12 md:py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-8 md:mb-12">What You Need to Join</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
          {[
            { icon: User, label: "Age", value: "Must be 18 years or older" },
            { icon: Smartphone, label: "Smartphone", value: "Android device with internet" },
            { icon: FileText, label: "Aadhaar Card", value: "Valid government-issued ID" },
            { icon: Truck, label: "Driving License", value: "Valid two-wheeler license" },
            { icon: Wallet, label: "Bank Account", value: "For weekly direct deposits" },
            { icon: "🎓", label: "Education", value: "NO education requirement — everyone welcome!", highlight: true },
          ].map((req, i) => (
            <div key={i} className={`flex items-center p-4 bg-white rounded-lg border ${req.highlight ? 'border-green-200 bg-green-50' : 'border-gray-100'} shadow-sm`}>
              <div className={`${req.highlight ? 'text-green-600 text-2xl' : 'text-[#00D26A]'} mr-4`}>
                {typeof req.icon === 'string' ? req.icon : <req.icon className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="font-bold text-[#1A2744]">{req.label}</h4>
                <p className={`text-sm ${req.highlight ? 'text-green-700 font-bold' : 'text-gray-500'}`}>{req.value}</p>
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

      {/* Referral Program Section */}
      <section className="py-12 md:py-20 bg-[#FFFBEB]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-amber-100 rounded-3xl p-6 md:p-12 border border-amber-200 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-[#F59E0B] text-white px-4 py-1 rounded-full text-sm font-bold">
                🎁 REFER & EARN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#78350F]">
                Earn Bonus For Every Friend You Refer!
              </h2>
              <p className="text-lg text-[#92400E]">
                Know someone looking for a delivery job? Refer them to QuikBoys an you BOTH get rewards!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full text-[#F59E0B] font-bold">1</div>
                  <p className="text-[#92400E] font-medium pt-1">Apply below and get your unique referral code</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full text-[#F59E0B] font-bold">2</div>
                  <p className="text-[#92400E] font-medium pt-1">Share the code with your friends on WhatsApp</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full text-[#F59E0B] font-bold">3</div>
                  <p className="text-[#92400E] font-medium pt-1">When they complete 50 deliveries, you both get a cash bonus!</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="text-[100px] leading-none select-none">🎁</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E293B] text-center mb-8 md:mb-16">Start Earning in 3 Simple Steps</h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
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
      <section ref={formRef} className="py-12 md:py-20 px-4 bg-gray-50" id="apply">
        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl p-1 md:p-8">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Section 7: Help & FAQ */}
      <section className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
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
