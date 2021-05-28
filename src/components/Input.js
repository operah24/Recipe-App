import React from "react";

function Input({
  type,
  name,
  className,
  value,
  handleChange,
  label,
  placeholder,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
