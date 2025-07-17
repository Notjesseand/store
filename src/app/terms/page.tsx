import Header from "@/components/Header";
import Footer from "@/components/Footer";

// app/terms/page.tsx
export default function TermsPage() {
  return (
    <>
      {/* @ts-ignore */}
      <Header />
      <div className="p-6 max-w-4xl mx-auto font-montserrat text-gray-800 pt-32  ">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">Last Updated: July 16, 2025</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          Welcome to [Your App Name]. These Terms and Conditions govern your use
          of our website, products, and services. By accessing or using any part
          of the service, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Purchases and Payments
        </h2>
        <p className="mb-4">
          All payments are processed securely through our payment partner,
          <a href="https://paddle.com" className="text-blue-600 underline">
            {" "}
            Paddle
          </a>
          . Paddle acts as the Merchant of Record and handles billing and
          invoicing.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Policy</h2>
        <p className="mb-4">
          We offer refunds within 7 days of purchase for valid reasons. If you
          are not satisfied with your purchase, please contact us at
          <strong> support@[yourdomain].com</strong>. Refunds are issued at our
          discretion and may take up to 5–10 business days to process.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Use of Service</h2>
        <p className="mb-4">
          You agree not to misuse the service or attempt to interfere with our
          systems. We reserve the right to terminate accounts that violate these
          terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, logos, designs, and intellectual property on this site
          are owned by [Your App Name] and may not be used without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not liable for any indirect or consequential damages resulting
          from the use of our services. Use is at your own risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Privacy</h2>
        <p className="mb-4">
          Your privacy is important to us. Please refer to our
          <a href="/privacy" className="text-blue-600 underline">
            {" "}
            Privacy Policy
          </a>
          to understand how we collect and use data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Contact Information
        </h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at
          <strong> support@[yourdomain].com</strong>.
        </p>
      </div>
      <Footer />
    </>
  );
}
