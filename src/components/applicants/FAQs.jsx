const FAQsPage = () => {
  const faqs = [
    {
      question: "Can I use Flowbite in open-source projects?",
      answer: [
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
        "Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.",
      ],
    },
    {
      question: "Is there a Figma file available?",
      answer: [
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
        "Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
      ],
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer: [
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
        "Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
      ],
    },
  ];

  return <FAQAccordion title="Frequently Asked Questions" faqs={faqs} />;
};

export default FAQsPage;
