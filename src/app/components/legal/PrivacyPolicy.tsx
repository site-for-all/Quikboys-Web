import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#0A2540] mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: February 6, 2026</p>

          {/* 1. Introduction & Company Identity */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to QuikBoys. QuikBoys is a product of <strong>OMLVS Private Limited</strong> ("Company", "we", "us", or "our"), a company incorporated under the laws of India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the QuikBoys platform, including our website (<a href="https://quikboys.com" className="text-[#DC2626] hover:underline">quikboys.com</a>), mobile application, and all related services (collectively, the "Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Platform, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Platform.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#0A2540] mt-4 mb-2">a. Personal Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you register on the Platform or use our services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Full name, date of birth, and gender</li>
              <li>Email address and phone number</li>
              <li>Residential address (including city, state, and pin code)</li>
              <li>Government-issued identity documents such as Aadhaar card and driving license (for delivery riders)</li>
              <li>Bank account details for payment processing (for delivery riders)</li>
              <li>Profile photograph (if applicable)</li>
              <li>Referral codes</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A2540] mt-6 mb-2">b. Location Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect real-time and historical location data from delivery riders to enable our delivery services, optimize routes, and power features such as Hero Return and Zero Dead KM. Location data may be collected even when the app is running in the background during active delivery sessions.
            </p>

            <h3 className="text-xl font-semibold text-[#0A2540] mt-6 mb-2">c. Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you access our Platform, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Device information (device model, operating system, unique device identifiers)</li>
              <li>IP address and browser type</li>
              <li>App usage data, crash logs, and performance diagnostics</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Cookies and similar tracking technologies (see our <Link to="/cookie-policy" className="text-[#DC2626] hover:underline">Cookie Policy</Link> for details)</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To create and manage your account on the Platform</li>
              <li>To provide, operate, and maintain our delivery services</li>
              <li>To process transactions and disbursements to delivery riders</li>
              <li>To verify your identity using uploaded documents (Aadhaar, driving license)</li>
              <li>To track and optimize delivery routes using location data</li>
              <li>To send you service-related communications, technical notices, and updates</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To monitor and analyze usage trends and improve Platform performance</li>
              <li>To detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes, such as registration and location tracking.</li>
              <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill our contractual obligations to you as a user or delivery rider on the Platform.</li>
              <li><strong>Legitimate Interest:</strong> Processing is necessary for our legitimate business interests, such as fraud prevention, platform security, and service improvement.</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with applicable laws and regulations, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.</li>
            </ul>
          </section>

          {/* 5. Information Sharing & Disclosure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">5. Information Sharing & Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with third parties only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>With your consent:</strong> When you have explicitly agreed to the sharing of your data.</li>
              <li><strong>Service providers:</strong> With trusted third-party vendors who assist us in operating the Platform (e.g., cloud hosting, analytics, payment processing). These providers are contractually bound to protect your data.</li>
              <li><strong>Business partners:</strong> With restaurants, merchants, and businesses you interact with through our Platform, limited to information necessary to complete deliveries.</li>
              <li><strong>Legal requirements:</strong> To comply with applicable laws, regulations, legal processes, or government requests.</li>
              <li><strong>Protection of rights:</strong> To protect and defend the rights, property, or safety of OMLVS Private Limited, our users, or the public.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets, your data may be transferred as part of the transaction.</li>
            </ul>
          </section>

          {/* 6. Third-Party Services & SDKs */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">6. Third-Party Services & SDKs</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Platform uses third-party services and software development kits (SDKs) that may collect data on our behalf. These include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Supabase:</strong> For database and backend services, including storage of user data and uploaded documents.</li>
              <li><strong>Vercel Analytics:</strong> For website performance monitoring and usage analytics.</li>
              <li><strong>Google Maps / Location Services:</strong> For real-time location tracking and route optimization.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Each of these third-party providers has its own privacy policy governing the use of your data. We encourage you to review their respective policies. We are responsible for ensuring that third-party code used in our Platform complies with applicable data protection standards.
            </p>
          </section>

          {/* 7. Data Storage & Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">7. Data Storage & International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your data may be stored and processed on servers located outside India, including servers operated by our third-party service providers. By using the Platform, you consent to the transfer of your information to facilities outside your country of residence, where data protection laws may differ.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We take appropriate measures to ensure that your personal data remains protected in accordance with this Privacy Policy and applicable Indian laws, regardless of where it is stored or processed.
            </p>
          </section>

          {/* 8. Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">8. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encryption of data in transit using HTTPS/TLS protocols</li>
              <li>Secure storage of sensitive data with encryption at rest</li>
              <li>Access controls and role-based permissions for internal systems</li>
              <li>Regular security reviews and monitoring</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* 9. Data Retention & Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">9. Data Retention & Deletion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws. Specific retention periods include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account data:</strong> Retained for the duration of your account and deleted upon account deletion request.</li>
              <li><strong>Financial records:</strong> Retained as required by tax and financial regulations (typically 7 years).</li>
              <li><strong>Identity documents:</strong> Deleted after verification is complete, unless retention is required by law.</li>
              <li><strong>Location data:</strong> Retained for operational purposes and deleted periodically.</li>
            </ul>
          </section>

          {/* 10. Account Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">10. Account Deletion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request deletion of your account and all associated personal data. Upon receiving a valid deletion request, we will permanently remove your personal data, including your profile information, delivery history, uploaded documents, and location data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certain information may be retained for a limited period as required by applicable laws (such as financial transaction records for tax purposes). You will be informed of any such retention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To request account deletion, please visit our <Link to="/delete-account" className="text-[#DC2626] hover:underline">Delete Account</Link> page or email us at <a href="mailto:support@quikboys.com" className="text-[#DC2626] hover:underline">support@quikboys.com</a>.
            </p>
          </section>

          {/* 11. Cookies & Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">11. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to collect usage information and improve your experience on our Platform. For detailed information about the types of cookies we use, how they work, and how you can manage your cookie preferences, please refer to our <Link to="/cookie-policy" className="text-[#DC2626] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* 12. Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">12. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under applicable data protection laws, including the Digital Personal Data Protection Act, 2023, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> Request correction of any inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing at any time. This will not affect the lawfulness of processing carried out before withdrawal.</li>
              <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with us or with the Data Protection Board of India if you believe your data rights have been violated.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:info@omlvs.com" className="text-[#DC2626] hover:underline">info@omlvs.com</a>.
            </p>
          </section>

          {/* 13. Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">13. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Platform and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected personal data from a child under 18, we will take steps to delete such information promptly. If you believe a child has provided us with personal data, please contact us at <a href="mailto:info@omlvs.com" className="text-[#DC2626] hover:underline">info@omlvs.com</a>.
            </p>
          </section>

          {/* 14. Changes to This Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">14. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date. For significant changes, we may also notify you via email or in-app notification. Your continued use of the Platform after such changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* 15. Grievance Officer */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">15. Grievance Officer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with the Information Technology Act, 2000 and the rules made thereunder, the details of the Grievance Officer are provided below. You may contact the Grievance Officer for any complaints or concerns regarding the processing of your personal data:
            </p>
            <div className="mt-4 p-4 bg-[#E8F4FF] rounded-lg">
              <p className="text-gray-700"><strong>Grievance Officer</strong></p>
              <p className="text-gray-700">Name: Balaji Chennupati</p>
              <p className="text-gray-700">Designation: Managing Director</p>
              <p className="text-gray-700">Organization: OMLVS Private Limited</p>
              <p className="text-gray-700">Address: Second Floor, Prema Nilaya, Site No. 1630, 5th Main Road, 8th A Cross, MCEC Housing Layout, Sahakarnagar, Bangalore, Karnataka - 560092</p>
              <p className="text-gray-700">Email: <a href="mailto:balajic@quikboys.com" className="text-[#DC2626] hover:underline">balajic@quikboys.com</a></p>
              <p className="text-gray-700 mt-2 text-sm">The Grievance Officer shall acknowledge your complaint within 24 hours and resolve it within 15 days of receipt.</p>
            </div>
          </section>

          {/* 16. Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">16. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#E8F4FF] rounded-lg space-y-1">
              <p className="text-gray-700 font-semibold">OMLVS Private Limited</p>
              <p className="text-gray-700">(Operating as QuikBoys)</p>
              <p className="text-gray-700 mt-2">Address: Second Floor, Prema Nilaya, Site No. 1630, 5th Main Road, 8th A Cross, MCEC Housing Layout, Sahakarnagar, Bangalore, Karnataka - 560092</p>
              <p className="text-gray-700 mt-2">Email: <a href="mailto:info@omlvs.com" className="text-[#DC2626] hover:underline">info@omlvs.com</a></p>
              <p className="text-gray-700">Support: <a href="mailto:support@quikboys.com" className="text-[#DC2626] hover:underline">support@quikboys.com</a></p>
              <p className="text-gray-700">WhatsApp: <a href="https://wa.me/918341345599" className="text-[#DC2626] hover:underline">+91 83413 45599</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
