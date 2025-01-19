import React, { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Our chairs are assembled in our state-of-the-art facility located in Italy, ensuring top-notch craftsmanship and quality control.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "You have 30 days from the date of delivery to return your chair, provided it is in its original condition and packaging.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes, we offer international shipping to most countries worldwide. Additional shipping fees and customs duties may apply depending on your location.",
  },
];

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-7/12 py-20">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-800 from-green-600">Accordion Challenge</span>
      </h1>
      <div className="accordion mt-10 w-full">
        {faqs.map((faq, index) => (
          <Accordion faq={faq} key={index + 1} number={index + 1} />
        ))}
      </div>
    </div>
  );
}

function Accordion({ faq, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return <Item faq={faq} number={number} openStatus={isOpen} onClickHandle={handleClick} />;
}

function Item({ faq, number, openStatus, onClickHandle }) {
  return (
    <div className={`item ${openStatus ? `open` : ``}`} onClick={onClickHandle}>
      <div className="number">{`0${number}`}</div>
      <div className="title">{faq.title}</div>
      <div className="title">{openStatus ? "-" : "+"}</div>
      {openStatus ? (
        <div className="content-box">
          <ul>{faq.text}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
