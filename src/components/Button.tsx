interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<Props> = ({ className, children, type = "submit" }) => {
  return (
    <button
      type={type}
      className={`px-4 rounded-full bg-blue-400 text-white hover:bg-blue-500 hover:cursor-pointer ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
