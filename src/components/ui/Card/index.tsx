interface CardProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ElementType;
  title: string;
}

const CardComponent = ({
  icon: Icon,
  title,
  children,
  className,
}: CardProps) => {
  return (
    <div
      className={`shadow-md rounded-xl w-fit flex hover:transform hover:-translate-y-1 text-sm border-[2px] flex-col text-black cursor-pointer p-3 border-gray-200 hover:border-cyan-600 transition bg-no-repeat bg-top ${className}`}
    >
      <div className="flex items-center text-gray-800 gap-2">
        {Icon && <Icon size={15} />}
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardComponent;
