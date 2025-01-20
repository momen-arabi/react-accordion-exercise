import React from "react";

export function Item({ faq, number, currNo, onChangeNo }) {
  function handleClick() {
    onChangeNo(number);
  }

  return (
    <div className={`item ${currNo === number ? `open` : ``}`} onClick={handleClick}>
      <div className="number">{`0${number}`}</div>
      <div className="title">{faq.title}</div>
      <div className="icon">{currNo === number ? "-" : "+"}</div>
      {currNo === number ? (
        <div className="content-box">
          <ul>{faq.text}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
