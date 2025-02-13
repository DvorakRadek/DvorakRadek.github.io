import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button className="w-40 mb-10 px-4 py-2 bg-gray-200 cursor-pointer border rounded-xl text-2xl font-semibold hover:bg-gray-300" onClick={onClick}>
    {children}
  </button>;
};

export default Button;