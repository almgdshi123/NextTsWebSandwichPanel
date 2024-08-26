"use client"
import React, { useState } from 'react';
import './faq.css'; 

const FAQ = () => {
  // حالة لتخزين ما إذا كان كل قسم مفتوحًا أم لا
  const [openIndex, setOpenIndex] = useState(null);

  // دالة لتبديل حالة القسم
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // بيانات الأسئلة والأجوبة
  const faqs = [
    {
      question: "What is Krushi?",
      answer: "Krushi is a Public Charitable Trust designed to carry out farming on extensive scale Natural & Sustainable methods."
    },
    {
      question: "How does it work?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto."
    },
    {
      question: "What are the major challanges of current agriculture?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto."
    },
    {
      question: "How does the Krushi address the above challanges?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto."
    },
    {
      question: "How can I be a part of Krushi?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto."
    }
  ];

  return (
    <div className="wrapper">
      <p>The Beginning of a New Asset Class</p>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <button
            className={`accordion ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <i className={`fa-solid fa-chevron-down ${openIndex === index ? 'rotate' : ''}`}></i>
          </button>
          <div className={`pannel ${openIndex === index ? 'show' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
