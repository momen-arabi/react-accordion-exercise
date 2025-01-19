import React from "react";

export function Item({ faq, number, openStatus, onClickHandle }) {
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
