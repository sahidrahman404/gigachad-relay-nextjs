import Link from "next/link";
import { ReactNode } from "react";

export default function Logo({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className={className}>
      <img className="h-10 w-auto" src="/logo.svg" alt="gigachad" />
      {children}
    </Link>
  );
}
