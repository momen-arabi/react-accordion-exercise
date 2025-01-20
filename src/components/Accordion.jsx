import React from "react";
import { Item } from "./Item";

export function Accordion({ faq, number, currNo, onChangeNo }) {
  return <Item faq={faq} number={number} currNo={currNo} onChangeNo={onChangeNo} />;
}
