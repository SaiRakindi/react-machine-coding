import React from "react";

const ToastItem = ({ text, onClose }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        position: "absolute",
        top: "0",
        right: "0",
        background: "lightblue",
      }}
    >
      <p>{text}</p>
      <button
        onClick={onClose}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        X
      </button>
    </div>
  );
};

export default ToastItem;
