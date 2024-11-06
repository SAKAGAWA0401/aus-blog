export default function PrivacyPage() {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you use our blog, such as when you comment on a post or contact us.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to operate and improve our blog, and to communicate with you.</p>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>We do not share your personal information with third parties except as described in this privacy policy.</p>
          <h2>4. Data Security</h2>
          <p>We use reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
          <h2>5. Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us through our contact page.</p>
        </div>
      </div>
    )
  }