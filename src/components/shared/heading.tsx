import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-center text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
