import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[];
  isRounded?: boolean;
}
interface CardHeaderProps extends Omit<CardProps, 'isRounded'> {
  title?: string;
}

interface CardBodyProps extends Omit<CardProps, 'isRounded'> {}

function Card({ children, isRounded = true }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-[#212529] rounded-xl shadow-sm flex flex-col justify-between py-4 px-6`}>
      {children}
    </div>
  );
}

const CardHeader = ({ children, title }: CardHeaderProps) => {
  return (
    <div className="flex justify-between items-center pb-3 border-b mb-8 border-slate-100 dark:border-slate-700">
      {title && (
        <h2 className="font-gotham font-medium text-xl text-gray-700 dark:text-white mb-0">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

const CardBody = ({ children }: CardBodyProps) => {
  return <div>{children}</div>;
};

Card.Header = CardHeader;

Card.Body = CardBody;

export default Card;
