const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, type = "submit" }) => {
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
