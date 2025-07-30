import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h3 {...props} className={cn("text-xl text-slate-600", className)}>
      {children}
    </h3>
  );
};

export default Title;
