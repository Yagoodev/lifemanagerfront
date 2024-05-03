import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TransactionItemProps {
  user: string;
  email: string;
  value: number;
}

export function TransactionItem({ user, email, value }: TransactionItemProps) {
  const valueToBRL = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>YR</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{user}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">{valueToBRL}</div>
    </div>
  );
}
