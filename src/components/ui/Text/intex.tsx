import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className }: TextProps) => {
  return <p className={cn("text-lg text-slate-500", className)}>{children}</p>;
};

export default Text;
