import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, 
  Target, 
  Network, 
  Trophy, 
  MapPin,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  DollarSign
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function LandingPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Animated counters for statistics
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 3 ? prev + 0.1 : 3));
    }, 50);
    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 2.8 ? prev + 0.1 : 2.8));
    }, 50);
    const timer3 = setInterval(() => {
      setCount3((prev) => (prev < 10 ? prev + 0.5 : 10));
    }, 50);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#E8F4FF] to-white flex items-center pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540]">
                Deliver Smart. Earn More. Return Rich.
              </h1>
              <p className="text-xl sm:text-2xl text-[#2C3E50]">
                The only delivery platform where riders earn on every kilometer—even on the way home.
              </p>
              <p className="text-lg text-gray-700">
                Hero Return × Zero Dead KM. Revolutionary logistics that respects your time and maximizes your earnings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white text-lg h-14"
                  onClick={() => window.location.href = '/driver-onboarding'}
                >
                  Join as a Rider
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white text-lg h-14"
                  onClick={() => window.location.href = '/partner-with-us'}
                >
                  Partner with Us
                </Button>
              </div>
              <p className="text-sm text-gray-600">App launching soon • Pre-register now</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Today's Earnings</p>
                      <p className="text-3xl font-bold text-[#0A2540]">₹1,850</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Express Corridor Active</span>
                      <span className="text-green-500 font-semibold">Live</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00B4D8] h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">The Industry's Hidden Problem</h2>
            <p className="text-xl text-gray-600">Dead kilometers are destroying margins and rider satisfaction</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-12 h-12 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">15-25% wasted travel</h3>
                    <p className="text-gray-600">Industry average of empty return trips</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">25-35% rider churn</h3>
                    <p className="text-gray-600">Burnout from empty returns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-12 h-12 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Hidden margin leak</h3>
                    <p className="text-gray-600">Every empty kilometer costs money</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-[#E8F4FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              The QuikBoys Difference: Hero Return × Zero Dead KM
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition duration-300 border-[#4A90E2]">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Hero Return Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Finish your deliveries perfectly? We reward you with priority orders on your route home. 
                    No empty returns, just continuous earnings.
                  </CardDescription>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ Earn while returning home</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition duration-300 border-[#4A90E2]">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Zero Dead Kilometers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our smart routing starts every delivery from your current location. No wasted travel to 
                    distant pickups. Every kilometer counts, every kilometer pays.
                  </CardDescription>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ +0.5 deliveries per hour</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition duration-300 border-[#4A90E2]">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-full flex items-center justify-center mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Flow-Based Dispatch</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dual-rider verification, instant acceptance, guaranteed pickups. The system works with you, 
                    not against you.
                  </CardDescription>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ Near-zero rejection rate</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">The QuikBoys Advantage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-white mb-2">&lt;{count1.toFixed(1)}%</p>
              <p className="text-[#4A90E2] text-lg">Dead KM</p>
              <p className="text-sm text-gray-400 mt-2">vs industry 15-25%</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-white mb-2">{count2.toFixed(1)}</p>
              <p className="text-[#4A90E2] text-lg">Deliveries/hour</p>
              <p className="text-sm text-gray-400 mt-2">vs industry 2.0-2.2</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-white mb-2">&lt;{count3.toFixed(0)}%</p>
              <p className="text-[#4A90E2] text-lg">Rider Churn</p>
              <p className="text-sm text-gray-400 mt-2">vs industry 25-35%</p>
            </div>
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold text-white mb-2">₹12</p>
              <p className="text-[#4A90E2] text-lg">Net per Delivery</p>
              <p className="text-sm text-gray-400 mt-2">Protected earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Your Journey with QuikBoys</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Join & Connect', desc: 'Select your primary hub from 100+ zones', number: '1' },
              { icon: Zap, title: 'Accept Smart Orders', desc: 'Get orders from your current location with flow-based routing', number: '2' },
              { icon: CheckCircle, title: 'Deliver with Excellence', desc: 'Complete deliveries, become a Hero', number: '3' },
              { icon: TrendingUp, title: 'Hero Return Home', desc: 'Tap "Return to My Hub" and earn on priority orders', number: '4' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-[#E8F4FF]">{step.number}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.desc}</CardDescription>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#4A90E2]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 100-Hub Join Model Section */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              100-Hub Join Model: Your City, Your Territory
            </h2>
            <p className="text-xl text-gray-600">We've mapped your city into 100 logical delivery zones</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-2xl flex items-center justify-center">
              <div className="grid grid-cols-10 gap-2 p-8">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 bg-white/30 rounded-sm hover:bg-white/80 transition cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Choose your primary hub location', desc: 'Work in your familiar neighborhood' },
                { icon: Target, title: 'Predictable, familiar routes', desc: 'Know your delivery area inside out' },
                { icon: Zap, title: 'Express corridors to nearby hubs', desc: 'Fast connections between zones' },
                { icon: TrendingUp, title: 'Scale with city growth', desc: 'Expand as the network grows' },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0A2540]">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section id="for-businesses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540]">Partner with QuikBoys</h2>
              <p className="text-xl text-gray-600">Reliable, efficient, scalable last-mile delivery</p>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  'Fast delivery times with zero-waste routing',
                  'Dedicated fleet management',
                  'API integration capabilities',
                  'Cost-effective per-delivery pricing',
                  'Real-time tracking and analytics',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white mt-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlights - HIDDEN */}
      {/* <section className="py-20 bg-gradient-to-br from-[#E8F4FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Built on Innovation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Network, title: 'DRC', subtitle: 'Demand Route Clustering', desc: 'Smart order bundling' },
              { icon: Target, title: 'RTR', subtitle: 'Route to Return', desc: 'Directional intelligence' },
              { icon: Zap, title: 'Dual-Rider Glow', subtitle: 'Instant Acceptance', desc: 'Guaranteed pickups' },
              { icon: Shield, title: 'Auto-Throttle', subtitle: 'Protection System', desc: 'Risk-controlled growth' },
            ].map((tech, index) => (
              <Card key={index} className="hover:shadow-xl transition duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#00B4D8] rounded-full flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold">{tech.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Rider Benefits Section */}
      <section id="for-riders" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Why Riders Choose QuikBoys</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🏆', title: 'Hero Status Rewards', desc: 'Priority routes, not cash gimmicks' },
              { emoji: '🔄', title: 'Never Return Empty', desc: 'Earn on every kilometer' },
              { emoji: '📍', title: 'Location Respect', desc: 'Orders start from where you are' },
              { emoji: '📊', title: 'Weekly Recovery Logic', desc: 'Bad day? Recover this week' },
              { emoji: '🛡️', title: 'Guaranteed Pickups', desc: 'No wasted trips' },
              { emoji: '💰', title: 'Transparent Earnings', desc: '₹12 net per delivery protected' },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{benefit.emoji}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Waitlist Section */}
      {/* <section id="waitlist" className="py-20 bg-gradient-to-br from-[#E8F4FF] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">App Launching Soon</h2>
            <p className="text-xl text-gray-600 mb-6">Be the first to experience the future of delivery</p>
            <p className="text-lg text-gray-700 mb-4">We're putting final touches on the QuikBoys app</p>
            <div className="space-y-2 mb-8">
              <p className="text-base flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Early access to the platform
              </p>
              <p className="text-base flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Exclusive onboarding benefits
              </p>
              <p className="text-base flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Priority hub selection
              </p>
              <p className="text-base flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Founding rider recognition
              </p>
            </div>
          </div>
          <Card className="border-[#4A90E2]">
            <CardContent className="pt-6">
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Select value={userType} onValueChange={setUserType} required>
                    <SelectTrigger className="h-12 text-lg">
                      <SelectValue placeholder="I am a..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rider">Rider</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="hub-supervisor">Hub Supervisor</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-[#00B4D8] hover:bg-[#0096B8] text-white text-lg h-12"
                >
                  Join the Waitlist
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What is Hero Return?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Hero Return is our unique technology that gives riders priority orders on their route back home after completing deliveries perfectly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What does Zero Dead KM mean?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Zero Dead KM means you never waste fuel or time traveling empty. Orders start from your current location, not from distant hubs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How much can I earn per delivery?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We guarantee ₹12 net per delivery, with additional opportunities through Hero Return and flow-based efficiency.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What is the 100-Hub Join Model?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Your city is divided into 100 logical hubs. You choose your primary hub and work in familiar territory with express corridors home.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                When will the app launch?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We're in final development stages. Pre-register now to get early access and exclusive benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How is QuikBoys different from other platforms?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We're the only platform that eliminates dead kilometers and lets you earn while returning home. Plus, our system starts orders from your location.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="contact" className="py-20 bg-[#E8F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              Ready to Experience Delivery That Works?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">I'm a Rider</CardTitle>
                <CardDescription className="text-center text-base">
                  Join the platform where every kilometer earns
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg"
                  className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white w-full"
                  onClick={() => window.location.href = '/driver-onboarding'}
                >
                  Start Driver Onboarding
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">I'm a Business</CardTitle>
                <CardDescription className="text-center text-base">
                  Partner with efficient, reliable delivery
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg"
                  className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white w-full"
                  onClick={() => window.location.href = '/partner-with-us'}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}