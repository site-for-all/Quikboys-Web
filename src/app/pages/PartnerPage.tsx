// import { motion } from 'framer-motion'; 
import { PartnerForm } from '../../components/PartnerForm';
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grow Your Business with QuikBoys
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join our network of top merchants and reach more customers with our ultra-fast delivery fleet.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div>
            <PartnerForm />
          </div>

          {/* Right Column: Benefits */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Why Partner with Us?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Increase Revenue",
                    desc: "Reach a wider audience and get more orders with our efficient delivery network."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Reliable Delivery",
                    desc: "Our dedicated riders ensure your products reach customers safely and on time."
                  },
                  {
                    icon: Users,
                    title: "Customer Loyalty",
                    desc: "Fast delivery builds trust and keeps your customers coming back for more."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Business Support",
                    desc: "Get access to our merchant dashboard and dedicated support team to manage operations."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0A2540]">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#0A2540] mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#E3F2FD] p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#0A2540] mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Have questions about partnership rates or coverage areas?
              </p>
              <p className="font-semibold text-[#0066CC]">
                Call Merchant Support: +91 98765 43210
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
