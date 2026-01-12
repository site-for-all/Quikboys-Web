import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, BarChart, Store, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { HubOperationsForm } from '../../components/HubOperationsForm';

// FAQ Data
const faqs = [
  {
    q: "What's the difference between Cluster Manager, Hub Executive, and Hub Captain?",
    a: "Cluster Manager manages riders and hub operations at the central hub. Hub Executive oversees multiple Hub Captains across vendor locations. Hub Captain manages the delivery fleet directly at vendor sites."
  },
  {
    q: "Can I switch between roles later?",
    a: "Yes! Based on your performance and interest, you can transition to different roles. Many Hub Captains have grown into Hub Executives and Cluster Managers."
  },
  {
    q: "What are the working hours?",
    a: "Hub Operations roles are full-time with flexible hours. Typical shifts align with peak delivery hours. Specific timings depend on your role and location."
  },
  {
    q: "Do I need prior experience?",
    a: "Hub Captain roles welcome freshers (0-1 year). Cluster Manager requires 0-2 years, and Hub Executive requires 1-3 years. Skills and attitude matter most."
  },
  {
    q: "Will I receive training?",
    a: "Absolutely! All Hub Operations team members go through comprehensive training covering operations, technology, leadership, and customer service."
  },
  {
    q: "How does the referral program work?",
    a: "After submitting your application, you get a unique referral code. Share it with friends. When they apply and get onboarded, you both earn rewards."
  },
  {
    q: "Is a two-wheeler mandatory?",
    a: "A two-wheeler is required for Hub Executives due to field visits. For Cluster Managers and Hub Captains, it's preferred but not mandatory."
  }
];

export default function HubOperationsPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Hub Operations - Multiple Roles (Manager, Executive, Captain)",
    "description": "Join QuikBoys Hub Operations team. Roles available: Cluster Manager, Hub Executive, Hub Captain.",
    "datePosted": "2026-01-09",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "QuikBoys",
      "sameAs": "https://quikboys.com",
      "logo": "https://quikboys.com/images/logo.png"
    },
    "jobLocation": [
      { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" } },
      { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "addressCountry": "IN" } }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Hub Operations Jobs - Cluster Manager, Executive & Captain | QuikBoys Careers</title>
        <meta name="description" content="Join QuikBoys Hub Operations team. Three exciting roles: Cluster Manager, Hub Executive, Hub Captain. Apply now in Bangalore & Hyderabad!" />
        <meta name="keywords" content="hub operations job, hub manager job, hub executive job, hub captain job, logistics careers" />
        <link rel="canonical" href="https://quikboys.com/hub-operations" />
        <script type="application/ld+json">{JSON.stringify(jobPostingSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[#E6FFFA] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6FFFA] text-[#00D26A] font-semibold text-sm mb-6 border border-[#00D26A]/20">
              🚀 Build your career in logistics operations
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A2744] mb-6 tracking-tight">
              Join Hub Operations<br />
              <span className="text-[#38BDF8]">Lead. Manage. Excel.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Choose from three exciting roles and grow with QuikBoys as we expand across India.
            </p>
            <Button onClick={scrollToForm} size="lg" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg h-14 px-8 shadow-xl shadow-red-100">
              Explore Roles ↓
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Roles Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A2744] mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Find the role that matches your skills and ambitions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cluster Manager */}
            <div className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A2744] mb-2">Cluster Manager</h3>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">Operations Leadership</span>
              <p className="text-gray-600 mb-6">Be the backbone of hub operations. Manage riders, track metrics, and ensure smooth functioning.</p>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Manage & mentor delivery riders</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Monitor performance & attendance</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Ensure hub targets are met</li>
              </ul>
              <Button onClick={scrollToForm} variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">Apply as Cluster Manager</Button>
            </div>

            {/* Hub Executive */}
            <div className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-10 -mt-10" />
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A2744] mb-2">Hub Executive</h3>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-4">Strategic Oversight</span>
              <p className="text-gray-600 mb-6">Oversee multiple Hub Captains. Ensure delivery quality and drive operational excellence.</p>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Supervise Hub Captains</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Multi-site metrics monitoring</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Handle escalations & reviews</li>
              </ul>
              <Button onClick={scrollToForm} className="w-full bg-[#1A2744] hover:bg-[#2a3e6a] text-white">Apply as Hub Executive</Button>
            </div>

            {/* Hub Captain */}
            <div className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Store className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A2744] mb-2">Hub Captain</h3>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-4">Vendor Operations</span>
              <p className="text-gray-600 mb-6">Be the face of QuikBoys at vendor locations. Manage fleet on-site and ensure on-time delivery.</p>
              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Manage riders at vendor site</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Coordinate order handoffs</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1" /> Handle on-ground issues</li>
              </ul>
              <Button onClick={scrollToForm} variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">Apply as Hub Captain</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-12">Compare Roles at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border-hidden">
              <thead>
                <tr className="bg-[#1A2744] text-white">
                  <th className="p-4 text-left rounded-tl-xl">Aspect</th>
                  <th className="p-4 text-left">Cluster Manager</th>
                  <th className="p-4 text-left">Hub Executive</th>
                  <th className="p-4 text-left rounded-tr-xl">Hub Captain</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50"><td className="p-4 font-semibold">Focus Area</td><td className="p-4">Hub & Rider Management</td><td className="p-4">Multi-site Oversight</td><td className="p-4">Vendor Location</td></tr>
                <tr className="border-b hover:bg-gray-50"><td className="p-4 font-semibold">Reports To</td><td className="p-4">City Operations</td><td className="p-4">Regional Manager</td><td className="p-4">Hub Executive</td></tr>
                <tr className="border-b hover:bg-gray-50"><td className="p-4 font-semibold">Experience</td><td className="p-4">1-2 years</td><td className="p-4">0-2 years</td><td className="p-4">0-1 year (Freshers ok)</td></tr>
                <tr className="hover:bg-gray-50"><td className="p-4 font-semibold rounded-bl-xl">Location</td><td className="p-4">Central Hub</td><td className="p-4">Field + Office</td><td className="p-4 rounded-br-xl">Vendor Site</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HubOperationsForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A2744] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                <h3 className="font-bold text-lg text-[#1A2744] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
