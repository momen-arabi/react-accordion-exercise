import React, { useState } from "react";

export function Item({ faq, number, currNo, onChangeNo }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
    onChangeNo(number);
  }

  return (
    <div
      className={`item ${currNo === number && isOpen ? `open` : ``}`}
      onClick={() => {
        handleClick();
        console.log("Accordion Number: " + number);
      }}
    >
      <div className="number">{`0${number}`}</div>
      <div className="title">{faq.title}</div>
      <div className="icon">{currNo === number && isOpen ? "-" : "+"}</div>
      {currNo === number && isOpen ? (
        <div className="content-box">
          <ul>{faq.text}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
