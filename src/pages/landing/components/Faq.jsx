import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 

const Faq = () => {
  const { t } = useTranslation(); 
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: t("faq.questions.0.title"), 
      desc: t("faq.questions.0.description"),
      id: 1,
    },
    {
      title: t("faq.questions.1.title"),
      desc: t("faq.questions.1.description"),
      id: 2,
    },
    {
      title: t("faq.questions.2.title"),
      desc: t("faq.questions.2.description"),
      id: 3,
    },
    {
      title: t("faq.questions.3.title"),
      desc: t("faq.questions.3.description"),
      id: 4,
    },
    {
      title: t("faq.questions.4.title"),
      desc: t("faq.questions.4.description"),
      id: 5,
    },
    {
      title: t("faq.questions.5.title"),
      desc: t("faq.questions.5.description"),
      id: 6,
    },
    {
      title: t("faq.questions.6.title"),
      desc: t("faq.questions.6.description"),
      id: 7,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl w-full p-6 text-white">
        <h1 className="text-3xl font-bold mb-8">{t("faq.title")}</h1>
        <div>
          {items.map((item, index) => (
            <div key={item.id} className="mb-4 bg-gray-800">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-5 px-6 text-left text-lg font-semibold focus:outline-none text-white"
              >
                <span className="flex-1">{item.title}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">{item.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
