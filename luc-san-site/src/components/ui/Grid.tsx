interface GridProps {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const colClasses = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapClasses = {
  sm: "gap-4",
  md: "gap-8",
  lg: "gap-12",
};

export function Grid({
  children,
  cols = 3,
  gap = "md",
  className = "",
}: GridProps) {
  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}
