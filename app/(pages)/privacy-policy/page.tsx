// export default function PrivacyPolicy() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-700">
//       <h1 className="text-3xl font-bold text-center text-black">
//         Privacy Policy
//       </h1>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
//         <p>
//           This Privacy Policy explains how we collect, use, and protect your
//           personal information when you interact with our website or services.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           2. Information We Collect
//         </h2>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Personal details (e.g., name, email address, phone number)</li>
//           <li>Usage data (e.g., IP address, browser type, pages visited)</li>
//           <li>Cookies and tracking technologies</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           3. How We Use Your Information
//         </h2>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>To provide and maintain our services</li>
//           <li>To improve user experience</li>
//           <li>To communicate with you</li>
//           <li>To comply with legal obligations</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           4. Sharing of Information
//         </h2>
//         <p>
//           We do not sell your personal information. We may share it with trusted
//           third parties only to provide our services or as required by law.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your data.
//           However, no method of transmission over the internet is 100% secure.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Access, update or delete your personal data</li>
//           <li>Withdraw consent at any time</li>
//           <li>Opt-out of marketing communications</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">
//           7. Changes to This Policy
//         </h2>
//         <p>
//           We may update this policy occasionally. Changes will be posted on this
//           page with an updated effective date.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
//         <p>
//           If you have any questions about this Privacy Policy, please contact us
//           at{" "}
//           <a
//             href="mailto:privacy@yourdomain.com"
//             className="text-blue-600 underline"
//           >
//             privacy@yourdomain.com
//           </a>
//           .
//         </p>
//       </section>
//     </div>
//   );
// }
const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "info-we-collect", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Sharing of Information" },
  { id: "security", title: "5. Data Security" },
  { id: "rights", title: "6. Your Rights" },
  { id: "changes", title: "7. Changes to This Policy" },
  { id: "contact", title: "8. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 sm:px-6 lg:px-12 py-10 gap-10">
      {/* Sticky Sidebar Navigation */}
      <aside className="hidden lg:block md:w-1/4 w-full sticky top-24 self-start space-y-4 bg-white z-10">
        <h2 className="text-lg font-semibold text-[#444444]">Jump To</h2>
        <ul className="space-y-2 text-sm text-gray-500">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="hover:text-black transition block"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full space-y-10 mt-20">
        <section id="introduction">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you interact with our website or services.
          </p>
        </section>

        <section id="info-we-collect">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal details (e.g., name, email address, phone number)</li>
            <li>Usage data (e.g., IP address, browser type, pages visited)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section id="usage">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To improve user experience</li>
            <li>To communicate with you</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section id="sharing">
          <h2 className="text-xl font-semibold mb-2">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell your personal information. We may share it with
            trusted third parties only to provide our services or as required by
            law.
          </p>
        </section>

        <section id="security">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is 100%
            secure.
          </p>
        </section>

        <section id="rights">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, update or delete your personal data</li>
            <li>Withdraw consent at any time</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section id="changes">
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this policy occasionally. Changes will be posted on
            this page with an updated effective date.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:info@assetium.com"
              className="text-blue-600 underline"
            >
              info@assetium.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
