import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  isRounded?: boolean;
}

export default function Card({ children, isRounded = true}: Props) {
  return (
    <div
      className={`bg-white dark:bg-[#212529] rounded-xl shadow-sm flex flex-col justify-between py-4 px-6`}>
      {children}
    </div>
  );
}
