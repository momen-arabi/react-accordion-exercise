import React, { useState } from "react";
import { Item } from "./Item";

export function Accordion({ faq, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return <Item faq={faq} number={number} openStatus={isOpen} onClickHandle={handleClick} />;
}
