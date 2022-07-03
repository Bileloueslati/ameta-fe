import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  padding?: string;
  isRounded?: boolean;
}

export default function Card({
  children,
  isRounded = true,
  padding = "py-4 px-6",
}: Props) {
  return (
    <div
      className={`bg-white dark:bg-[#212529] rounded-xl shadow-sm flex flex-col justify-between py-4 px-6 ${padding}`}
    >
      {children}
    </div>
  );
}
