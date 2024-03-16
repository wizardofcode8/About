import React, { useState } from "react";

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAnswer = (val) => {
    setOpenSection(openSection === val ? null : val);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "We are covering every major country worldwide. The shipment leaves from US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "We are covering every major country worldwide. The shipment leaves from US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "We are covering every major country worldwide. The shipment leaves from US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "We are covering every major country worldwide. The shipment leaves from US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "We are covering every major country worldwide. The shipment leaves from US as it is our headquarters. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
    },
  ];

  return (
    <div className="my-36 flex flex-col px-7 md:px-0 lg:flex-row text-[#0D3473] ">
      <div className="flex-1 text-center md:text-start mb-7 lg:mb-0">
        <h1 className="text-[52px] font-bold leading-[50px] pb-5">Frequently Asked <br /> Questions</h1>
        <p className="text-[18px] ">
          Not able to find the answers you’re looking for? <br /> Reach out to our
          <span className="text-[#E88C30] ">customer support</span> team.
        </p>
      </div>
      <div className="flex-1">
        {/* FAQ Sections */}
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-semibold text-xl leading-5 text-[#0D3473]">
                {item.question}
              </h3>
              <button
                aria-label="toggle"
                className="text-[#0D3473] cursor-pointer "
              >
                <svg
                  className={`cursor-pointer text-[#0D3473] transform ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" />
                </svg>
              </button>
            </div>
            <p
              className={`font-normal text-base leading-6 text-[#0D3473] mt-4 w-11/12 ${
                openSection === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
            <hr className="my-7 bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
