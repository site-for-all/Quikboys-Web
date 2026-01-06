import { motion } from 'framer-motion';
import { RegistrationForm } from '../../components/RegistrationForm';
import { CheckCircle, MapPin, Truck, Wallet } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function DriverOnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#4A90E2]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a QuikBoys Delivery Partner
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution. Earn competitive payouts, get priority routes home, and never waste a kilometer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Benefits (Desktop only) or Top (Mobile) */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Why Partner with Us?</h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Wallet,
                    title: "High Monthly Earnings",
                    desc: "Earn competitive rates with weekly payouts and performance incentives."
                  },
                  {
                    icon: Truck,
                    title: "Zero Dead KM",
                    desc: "Our system ensures you never ride empty. Every kilometer pays."
                  },
                  {
                    icon: MapPin,
                    title: "Hero Return",
                    desc: "Get paid deliveries on your route back home at the end of your shift."
                  },
                  {
                    icon: CheckCircle,
                    title: "Insurance Benefits",
                    desc: "Comprehensive accidental insurance for you and your family."
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-[#D32F2F] shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex gap-4 items-start">
                      <div className="bg-red-50 p-2 rounded-full text-[#D32F2F]">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 bg-[#E8F4FF] p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-[#0A2540] mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about the registration process? Contact our support team.
                </p>
                <a href="tel:+919876543210" className="text-[#00B4D8] font-semibold hover:underline">
                  Call Support: +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RegistrationForm />
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
