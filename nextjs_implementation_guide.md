# QuikBoys Driver Onboarding - Next.js Implementation Guide

## 🚀 Quick Start with Next.js

### 1. Create Next.js Project
```bash
npx create-next-app@latest quikboys-driver-onboarding
```

**During setup, choose:**
- ✅ TypeScript? → Yes (recommended) or No
- ✅ ESLint? → Yes
- ✅ Tailwind CSS? → Yes
- ✅ `src/` directory? → No
- ✅ App Router? → Yes (important!)
- ✅ Customize default import alias? → No

### 2. Install Required Dependencies
```bash
cd quikboys-driver-onboarding

# Form handling and validation
npm install react-hook-form zod @hookform/resolvers

# Icons (optional)
npm install @heroicons/react lucide-react

# Database (choose one based on your backend)
npm install mongoose  # For MongoDB
# OR
npm install @prisma/client prisma  # For PostgreSQL/MySQL

# Email service (optional, for confirmation emails)
npm install nodemailer
```

---

## 📁 Project Structure

```
quikboys-driver-onboarding/
├── app/
│   ├── layout.js                    # Root layout with header & footer
│   ├── page.js                      # Main driver onboarding page
│   ├── globals.css                  # Global styles
│   ├── api/
│   │   └── driver-onboarding/
│   │       └── route.js             # API endpoint for form submission
│   └── thank-you/
│       └── page.js                  # Success page after registration
│
├── components/
│   ├── Header.js                    # Navigation header component
│   ├── Footer.js                    # Footer component
│   ├── HeroSection.js               # Hero section component
│   ├── BenefitsSection.js           # Benefits section component
│   ├── CTASection.js                # Call-to-action section
│   └── RegistrationForm.js          # Form component (CLIENT)
│
├── lib/
│   ├── db.js                        # Database connection
│   ├── validations.js               # Zod validation schemas
│   └── email.js                     # Email service (optional)
│
├── public/
│   ├── images/
│   │   ├── logo-white.svg
│   │   ├── hero-rider.png
│   │   └── cta-rider.png
│   └── icons/
│       └── social/
│
└── .env.local                       # Environment variables
```

---

## 🎨 Step-by-Step Implementation

### Step 1: Setup Global Styles (app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --dark-blue: #0A2540;
  --light-blue: #4A90E2;
  --bright-blue: #00B4D8;
  --red: #D32F2F;
  --light-pink: #FFF5F5;
}

html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #2C3E50;
}
```

---

### Step 2: Create Root Layout (app/layout.js)

```jsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Driver Onboarding - QuikBoys',
  description: 'Join QuikBoys as a delivery partner. Earn competitive payouts every month with flexible hours.',
  keywords: 'delivery partner, driver jobs, QuikBoys, delivery driver registration',
  openGraph: {
    title: 'Become a QuikBoys Delivery Partner',
    description: 'Register now and start earning',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

### Step 3: Create Header Component (components/Header.js)

```jsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToForm = (e) => {
    e.preventDefault()
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-[#0A2540] fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo-white.svg" 
              alt="QuikBoys" 
              width={180} 
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="https://quikboys.com" 
              className="text-white hover:text-[#4A90E2] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/supervisor" 
              className="text-white hover:text-[#4A90E2] transition-colors"
            >
              Supervisor
            </Link>
          </div>

          {/* Join Now Button */}
          <button
            onClick={scrollToForm}
            className="hidden md:block bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B71C1C] transition-all"
          >
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link 
              href="https://quikboys.com" 
              className="block text-white py-2 hover:text-[#4A90E2]"
            >
              Home
            </Link>
            <Link 
              href="/supervisor" 
              className="block text-white py-2 hover:text-[#4A90E2]"
            >
              Supervisor
            </Link>
            <button
              onClick={scrollToForm}
              className="w-full mt-4 bg-[#D32F2F] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Join Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
```

---

### Step 4: Create Validation Schema (lib/validations.js)

```javascript
import { z } from 'zod'

export const driverRegistrationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
  
  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  dateOfBirth: z
    .string()
    .refine((date) => {
      const today = new Date()
      const birthDate = new Date(date)
      const age = today.getFullYear() - birthDate.getFullYear()
      return age >= 18
    }, 'You must be at least 18 years old'),
  
  gender: z
    .enum(['male', 'female', 'other'], {
      errorMap: () => ({ message: 'Please select your gender' }),
    }),
  
  city: z
    .string()
    .min(2, 'Please enter your city'),
  
  state: z
    .string()
    .min(2, 'Please select your state'),
  
  pinCode: z
    .string()
    .regex(/^\d{6}$/, 'Please enter a valid 6-digit pin code'),
})

// Indian states list
export const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
]
```

---

### Step 5: Create Registration Form (components/RegistrationForm.js)

```jsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { driverRegistrationSchema, indianStates } from '@/lib/validations'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegistrationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(driverRegistrationSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/driver-onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        reset()
        router.push('/thank-you')
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Driver Registration Form
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details to start your journey with QuikBoys
          </p>
        </div>

        {/* Form Container */}
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {submitError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('firstName')}
                placeholder="Enter your first name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('lastName')}
                placeholder="Enter your last name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                  +91
                </span>
                <input
                  type="tel"
                  {...register('phoneNumber')}
                  placeholder="XXXXX XXXXX"
                  className={`w-full px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register('dateOfBirth')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth.message}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                {...register('gender')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.gender ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('city')}
                placeholder="Enter your city"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <select
                {...register('state')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                  errors.state ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select state</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Pin Code - Full Width */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pin Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('pinCode')}
              placeholder="Enter 6-digit pin code"
              maxLength="6"
              className={`w-full md:w-1/2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent ${
                errors.pinCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.pinCode && (
              <p className="mt-1 text-sm text-red-500">{errors.pinCode.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#D32F2F] hover:bg-[#B71C1C] hover:scale-[1.02] shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Submit Application
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          {/* Helper Text */}
          <p className="mt-4 text-center text-sm text-gray-500">
            <span className="text-red-500">*</span> All fields are required
          </p>
        </form>
      </div>
    </section>
  )
}
```

---

### Step 6: Create API Route (app/api/driver-onboarding/route.js)

```javascript
import { NextResponse } from 'next/server'
import { driverRegistrationSchema } from '@/lib/validations'

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate data
    const validatedData = driverRegistrationSchema.parse(body)

    // TODO: Store in database
    // Example: await Driver.create(validatedData)
    
    // TODO: Send confirmation email
    // Example: await sendConfirmationEmail(validatedData.email)

    // For now, just log the data
    console.log('New driver registration:', validatedData)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful! We will contact you within 24-48 hours.',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Registration error:', error)

    // Validation error
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    // Server error
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    )
  }
}
```

---

### Step 7: Create Thank You Page (app/thank-you/page.js)

```jsx
import Link from 'next/link'

export const metadata = {
  title: 'Registration Successful - QuikBoys',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8F4FF] to-white px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-[#0A2540] mb-4">
          Registration Successful!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for registering with QuikBoys!
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-gray-700">
            Our team will review your application and contact you within <strong>24-48 hours</strong> via phone or email.
          </p>
        </div>

        {/* Next Steps */}
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-4">What's Next?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#D32F2F] mr-3 mt-1">✓</span>
              <span>Our verification team will verify your details</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D32F2F] mr-3 mt-1">✓</span>
              <span>You'll receive an onboarding call from our team</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D32F2F] mr-3 mt-1">✓</span>
              <span>Complete document verification and training</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D32F2F] mr-3 mt-1">✓</span>
              <span>Start delivering and earning with QuikBoys!</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-[#D32F2F] text-white rounded-lg font-semibold hover:bg-[#B71C1C] transition-all"
          >
            Back to Home
          </Link>
          <Link 
            href="/driver-onboarding"
            className="px-8 py-3 border-2 border-[#0A2540] text-[#0A2540] rounded-lg font-semibold hover:bg-[#0A2540] hover:text-white transition-all"
          >
            Register Another Driver
          </Link>
        </div>

        {/* Contact Support */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Have questions? Contact us at{' '}
            <a href="mailto:support@quikboys.com" className="text-[#4A90E2] hover:underline">
              support@quikboys.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

---

## 🗄️ Database Integration

### Option 1: MongoDB with Mongoose

**Install:**
```bash
npm install mongoose
```

**Create Database Connection (lib/db.js):**
```javascript
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
```

**Create Driver Model (lib/models/Driver.js):**
```javascript
import mongoose from 'mongoose'

const DriverSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'verified', 'approved', 'rejected'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Driver || mongoose.model('Driver', DriverSchema)
```

**Update API Route to Use Database:**
```javascript
import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Driver from '@/lib/models/Driver'
import { driverRegistrationSchema } from '@/lib/validations'

export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const validatedData = driverRegistrationSchema.parse(body)

    // Check if driver already exists
    const existingDriver = await Driver.findOne({
      $or: [
        { email: validatedData.email },
        { phoneNumber: validatedData.phoneNumber }
      ]
    })

    if (existingDriver) {
      return NextResponse.json(
        {
          success: false,
          message: 'A registration with this email or phone number already exists.',
        },
        { status: 400 }
      )
    }

    // Create new driver
    const driver = await Driver.create(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful!',
        driverId: driver._id,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    )
  }
}
```

---

## 🔐 Environment Variables (.env.local)

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quikboys?retryWrites=true&w=majority

# Email Service (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

Visit: `http://localhost:3000`

---

## 📦 Deployment on Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Provide HTTPS
- Give you a production URL
- Auto-deploy on git push

---

## ✅ Testing Checklist

- [ ] Form validation works for all fields
- [ ] Error messages display correctly
- [ ] Submit button disabled during submission
- [ ] Success page shows after submission
- [ ] Data saved to database
- [ ] Duplicate email/phone check works
- [ ] Mobile responsive (test on real devices)
- [ ] All navigation links work
- [ ] Smooth scroll to form works
- [ ] Loading states work properly

---

## 🎯 Performance Optimization

**Next.js automatically provides:**
- ✅ Code splitting
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Font optimization
- ✅ Static generation

**Additional optimizations:**
- Use `next/image` for all images
- Minimize bundle size
- Use Server Components where possible
- Implement caching strategies

---

This implementation guide provides everything needed to build the Driver Onboarding page with Next.js!
