import React from "react";

interface props {
  text: string;
}

export const ButtonTest = (props: props) => {
  return <button>{props.text}</button>;
};
