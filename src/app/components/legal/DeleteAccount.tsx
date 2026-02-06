export function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#0A2540] mb-4">Delete Your Account</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: February 6, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Account Deletion Request</h2>
            <p className="text-gray-700 leading-relaxed">
              At QuikBoys, we respect your right to control your personal data. If you wish to delete your QuikBoys account and all associated data, you can submit a request by contacting us via email. Our team will process your request and confirm the deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">How to Request Account Deletion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To delete your account, please send an email to:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold text-[#0A2540]">
                <a href="mailto:support@quikboys.com" className="text-[#DC2626] hover:underline">support@quikboys.com</a>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please include the following details in your email:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Subject line: <strong>Account Deletion Request</strong></li>
              <li>Your registered phone number</li>
              <li>Your registered email address (if applicable)</li>
              <li>Your full name as registered on the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">What Happens When Your Account Is Deleted</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once your account deletion request is processed, the following data will be permanently removed:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your profile information (name, email, phone number)</li>
              <li>Delivery address history</li>
              <li>Order history and transaction records</li>
              <li>Saved payment methods</li>
              <li>Any uploaded documents (ID, license, etc.)</li>
              <li>Location and activity data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Certain information may be retained for a limited period as required by applicable laws and regulations, including financial transaction records for tax and compliance purposes. Any retained data will be securely stored and deleted once the legal retention period expires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Processing Time</h2>
            <p className="text-gray-700 leading-relaxed">
              Account deletion requests are typically processed within <strong>7 business days</strong>. You will receive a confirmation email once your account and associated data have been successfully deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about the account deletion process, please reach out to us:
            </p>
            <p className="text-gray-700 mt-2">Email: <a href="mailto:support@quikboys.com" className="text-[#DC2626] hover:underline">support@quikboys.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
