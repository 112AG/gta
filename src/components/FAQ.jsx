import React, { useState } from "react";

const faqData = [
  { question: "Do I need experience?", answer: "no text" },
  { question: "Will I get direct time with Sachin Rao?", answer: "no text" },
  { question: "Is there a swing trading course too?", answer: "no text" },
  {
    question: "How fast can I get funded?",
    answer:
      "Many students pass their first prop firm challenge within 1–3 months when they follow Sachin’s system and risk rules seriously.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4">
      <h2 className="uppercase text-[48px] whitespace-nowrap text-center font-[900] leading-[48px] text-white mb-12">
        frequently
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          &nbsp;asked questions
        </span>
      </h2>

<div className="flex flex-col items-center justify-center gap-3">
  {faqData.map((item, index) => (
    <div
      key={index}
      onClick={() => toggleFAQ(index)}
      className={`w-[1009px] rounded-[6px] border-b border-white/10 cursor-pointer transition-all duration-300
      ${openIndex === index ? "bg-[#2C313A]" : "bg-[#131B23]"}`}
    >
      <div className="flex items-center justify-between gap-[474.37px] px-[24px] pt-[23px] pb-[25px]">
        <h3 className="text-white font-medium text-base">{item.question}</h3>
        <span className="text-white text-lg">
          {openIndex !== index ? (
            <i className="ri-arrow-down-s-line text-white text-xl"></i>
          ) : (
            <i className="ri-arrow-right-s-line text-white text-xl"></i>
          )}
        </span>
      </div>

      {openIndex === index && item.answer && (
        <div className="px-[24px] pb-[25px]">
          <p className="text-sm text-gray-300 mt-2">{item.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
}

export default FAQ;
