import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}

export const ButtonMain = (props: IButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`w-[11.2rem] h-[3.6rem] rounded-md bg-black text-white text-[1.15rem] ${props?.className}`}
    >
      {props.children}
    </button>
  );
};
