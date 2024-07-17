"use client"
import { URLS } from "@/constants/router";
import { AuthContext } from "@/hooks/provider";
import { authService } from "@/services/api.service";
import { Button, Input } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useState } from "react";



const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const router = useRouter();

  const signup = useCallback(async () => {
    await authService.signup(email, password);
  }, [email, password])

  return (
    <div className="w-screen h-screen">
      <div className="lg:w-[500px] min-h-[300px] p-4 flex flex-col gap-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-3xl font-semibold">Login</div>
        <div className="w-full">
          <div className="pl-2">
            Email
          </div>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full h-[40px] rounded-md px-4"
          />
        </div>
        <div className="w-full">
          <div className="pl-2">
            Password
          </div>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="w-full h-[40px] rounded-md px-4"
          />
        </div>
        <Button
          onClick={signup}
          className="w-full h-[40px] rounded-md bg-primary text-slate-200"
        >
          Signup
        </Button>
        <div className="flex justify-end w-full">
          <Link href={URLS.login}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

