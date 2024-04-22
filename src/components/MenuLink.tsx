import Link from "next/link";

import { ReactNode } from "react";

interface MenuLinkProps {
  to: string;
  active?: boolean;
  children: ReactNode;
}

export function MenuLink({ to, children, active = false }: MenuLinkProps) {
  return (
    <Link
      href={to}
      className={
        active
          ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      }
    >
      {children}
    </Link>
  );
}
