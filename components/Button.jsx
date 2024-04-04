import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// CHƯA
const Button = forwardRef(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full border border-transparent rounded-full p-3 font-bold text-black bg-green-500 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
