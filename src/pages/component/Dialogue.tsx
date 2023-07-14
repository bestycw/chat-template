import React from "react";

import { DialogueProps } from "../../type";
const Dialogue: React.FC<DialogueProps> = (props) => {
    const {content} = props.message
  return <div>{content}</div>;
};

export default Dialogue;
