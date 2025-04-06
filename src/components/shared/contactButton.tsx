import { ReactNode } from "react";

interface ContactButtonProps {
  href: string;
  gradient: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export default function ContactButton({
  href,
  gradient,
  icon,
  children,
  external = false,
}: ContactButtonProps) {
  const commonClasses = {
    className:
      "flex items-center gap-2 px-6 py-3 bg-black border rounded-xl text-white/90 hover:text-white transition-colors duration-200",
    style: {
      borderImage: gradient,
    },
    ...(external && {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  };

  return (
    <a href={href} {...commonClasses}>
      {icon} {children}
    </a>
  );
}
