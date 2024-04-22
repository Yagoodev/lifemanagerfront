import Link from "next/link";

import { Bell, Home, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MenuLink } from "./MenuLink";

export function Menu() {
  return (
    <>
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="">Yago Rodrigues Freitas</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>

      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <MenuLink to="#" active>
            <Home className="h-4 w-4" />
            Dashboard
          </MenuLink>
        </nav>
      </div>
    </>
  );
}
