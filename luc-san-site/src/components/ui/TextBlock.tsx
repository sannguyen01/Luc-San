interface TextBlockProps {
  children: React.ReactNode;
  align?: "left" | "center";
  narrow?: boolean;
  className?: string;
}

export function TextBlock({
  children,
  align = "left",
  narrow = true,
  className = "",
}: TextBlockProps) {
  return (
    <div
      className={`
        ${narrow ? "max-w-[38rem]" : "max-w-[56rem]"}
        ${align === "center" ? "mx-auto text-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
