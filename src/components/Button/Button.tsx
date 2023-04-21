import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonColorType } from "@/constants/global";

import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ButtonColorType;
  isDisabled?: boolean;
}

const Button = ({
  children,
  color = ButtonColorType.grey,
  isDisabled,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={isDisabled}
    className={`${cls.btn} ${cls[color]} ${isDisabled ? cls.disabled : ""}`}
  >
    {children}
  </button>
);

export default Button;