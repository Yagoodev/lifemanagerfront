import { Activity, CreditCard, DollarSign, Menu as MenuIcon, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Menu } from "@/components/Menu";
import { DashboardMenu } from "@/components/DashboardMenu";
import { TransactionItem } from "@/components/TransactionItem";
import { ElementType } from "react";

interface TransactionDataProps {
  user: string;
  email: string;
  value: number;
}

interface DashboardDataProps {
  title: string;
  content: string;
  contentResume: string;
  icon: ElementType;
}

export default function Home() {
  const dashboardData: DashboardDataProps[] = [
    {
      title: "Total Revenue",
      content: "$45,231.89",
      contentResume: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      title: "Subscriptions",
      content: "+2350",
      contentResume: "+180.1% from last month",
      icon: Users,
    },
    {
      title: "Sales",
      content: "+12,234",
      contentResume: "+19% from last month",
      icon: CreditCard,
    },
    {
      title: "Active Now",
      content: "+573",
      contentResume: "+201 since last hour",
      icon: Activity,
    },
  ];

  const transactionData: TransactionDataProps[] = [
    // {
    //   user: "Yago Rodrigues Freitas",
    //   email: "yagodev.contato@hotail.com",
    //   value: 9980,
    // },
    // {
    //   user: "Yago Rodrigues Freitas",
    //   email: "yagodev.contato@hotail.com",
    //   value: 4050,
    // },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Menu />
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Menu />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>YR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {dashboardData.map(({ title, content, contentResume, icon }, index) => (
              <DashboardMenu key={index} title={title} content={content} contentResume={contentResume} icon={icon} />
            ))}
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                {transactionData.length > 0 ? (
                  transactionData.map(({ user, email, value }, index) => (
                    <TransactionItem key={index} user={user} email={email} value={value} />
                  ))
                ) : (
                  <span>Nenhuma transação encontrada</span>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
