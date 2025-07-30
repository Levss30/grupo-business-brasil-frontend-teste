import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  className,
  onClick,
  outline,
}: ButtonProps) => {
  return (
    <button
      className={`${outline && "btn-outline"} ${className || ""} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
