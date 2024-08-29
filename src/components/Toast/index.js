import React from "react";
import { useState } from "react";
import ToastItem from "./ToastItem";

const Toast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToastVisible(true)}>Show Toast</button>

      {isToastVisible && (
        <ToastItem
          text={"Sample toast"}
          onClose={() => setIsToastVisible(false)}
        />
      )}
    </div>
  );
};

export default Toast;
