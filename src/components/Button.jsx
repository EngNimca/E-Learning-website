const Button = ({
  children,
  variant = "primary",
  size = "md",
  radius = "full",
  icon,
  iconPosition = "left",
  iconOnly = false,
  className = "",
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-secondary text-primary hover:brightness-90",

    secondary:
      "bg-primary  text-white hover:brightness-125 ",

    secondary2:
      "bg-primary/30  text-secondary hover:brightness-125 ",

    outline:
      "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",

    text1:
      "bg-transparent text-secondary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm",
  };

  const iconOnlySizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const radiuses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${iconOnly ? iconOnlySizes[size] : sizes[size]}
    ${radiuses[radius]}
    ${className}
  `;

  const content = (
    <>
      {!iconOnly && icon && iconPosition === "left" && icon}
      {!iconOnly && children}
      {!iconOnly && icon && iconPosition === "right" && icon}
      {iconOnly && icon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
