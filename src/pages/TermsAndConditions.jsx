// File: src/pages/TermsAndConditions.jsx
import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

const terms = [
  {
    title: "1. Services Overview",
    desc: "Pflegentz provides medical recruitment services, including connecting healthcare professionals with institutions and supporting their integration into Germany’s healthcare system. By using our services, you agree to comply with all applicable laws and regulations.",
    options: [],
  },
  {
    title: "2. Intellectual Property",
    desc: "All content, including software, designs, logos, text, and other intellectual property provided by Pflegentz is the property of Pflegentz or its licensors. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.",
    options: [],
  },
  {
    title: "3. User Obligations",
    desc: "As a user of Pflegentz’s services, you agree to:",
    options: [
      "Provide accurate and up-to-date information, including credentials and certifications.",
      "Use the services in a manner that respects the rights and privacy of others.",
      "Refrain from using the services for illegal, harmful, or unethical activities.",
    ],
  },
  {
    title: "4. Pricing and Payment Terms",
    desc: "",
    options: [
      "Pricing for our services will be specified in individual agreements with clients.",
      "Payments must be made according to the terms outlined in the invoice issued by Pflegentz.",
      "Failure to pay within the agreed timeframe may result in suspension of services or legal action.",
    ],
  },
  {
    title: "5. Confidentiality",
    desc: "Pflegentz is committed to protecting your confidential information. We will not disclose your personal or professional data to third parties without your explicit consent, except as required by law.",
    options: [],
  },
  {
    title: "6. Limitation of Liability",
    desc: "",
    options: [
      "Pflegentz will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      "Our liability is limited to the amount paid for the specific service in question.",
      "We are not responsible for external factors, such as delays in credential verifications or regulatory approvals.",
    ],
  },
  {
    title: "7. Warranty Disclaimer",
    desc: 'Pflegentz provides services on an "as-is" basis. We do not guarantee that our services will meet all expectations or be error-free. No other warranties are provided, express or implied.',
    options: [],
  },
  {
    title: "8. Termination",
    desc: "We reserve the right to terminate or suspend access to our services at any time for reasons including, but not limited to, breach of these Terms. Upon termination, all rights granted to you will immediately cease.",
    options: [],
  },
  {
    title: "9. Governing Law",
    desc: "These Terms are governed by the laws of the Federal Republic of Germany. Any disputes will be subject to the jurisdiction of the courts in Aachen, Germany.",
    options: [],
  },
  {
    title: "10. Modifications",
    desc: "Pflegentz reserves the right to modify these Terms at any time. Changes will be posted on our website, and continued use of our services after such changes constitutes acceptance of the updated Terms.",
    options: [],
  },
  {
    title: "11. Contact Information",
    desc: "If you have any questions about these Terms and Conditions, please contact us:",
    options: [],
  },
];

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="p-5 bg-white lg:px-20 text-[#556987] rounded-lg">
        <ol>
          {terms.map((item, index) => (
            <li key={index} className="mb-5 ">
              <h1 className="font-bold text-[24px] mb-3">{item.title}</h1>
              {item.desc && (
                <p className="font-normal  text-xl mb-3">{item.desc}</p>
              )}
              {item.options.length > 0 && (
                <ul className="list-disc px-10 ">
                  {item.options.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-xl ">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <div className="text-xl mt-10 ">
          <p>Email: info&#64;Pflegentz.de</p>
          <p>Phone: (+49) 0241 412 17701</p>
          <p>Address: Jülicher Str. 209d, 52070 Aachen, NRW</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
