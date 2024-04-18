import Link from "next/link";

import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen m-auto max-w-[480px]">
      <div className="w-full">
        <h1 className="text-2xl font-medium">Acesse a sua conta</h1>

        <div className="flex flex-col w-full gap-4 mt-4">
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
        </div>

        <span className="block text-sm text-right font-light text-zinc-600 mb-6 mt-3">
          <Link className="hover:text-blue-600" href="">
            Esqueceu sua senha?
          </Link>
        </span>

        <Link href="/">
          <button className="flex justify-center items-center w-full h-12 font-semibold rounded-md cursor-pointer text-white bg-blue-700 hover:bg-blue-900 transition-all duration-300">
            Login
          </button>
        </Link>

        <div className="block text-zinc-600 mt-4">
          <span className="font-light mr-1">Ainda não possui uma conta?</span>
          <Link className="font-medium text-blue-700" href="">
            Cadastre-se aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
