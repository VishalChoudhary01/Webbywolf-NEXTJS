import React from "react";

interface InputProps {
  InputType?: string;
  placeholderText?: string;
  InputStyle?: string;
  InputContainerStyle?: string;
  LabelText?: string;
}

const Input = (props: InputProps) => {
  const { InputType, placeholderText, InputStyle, InputContainerStyle, LabelText } = props;
  return (
    <div className={InputContainerStyle}>
      {LabelText && <label htmlFor={LabelText}>{LabelText}</label>}
      <input
        id={LabelText}
        type={InputType}
        placeholder={placeholderText}
        className={InputStyle}
      />
    </div>
  );
};

export default Input;
