"use client"
import { Button, Input } from "@headlessui/react";
import { useState } from "react";



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

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
          className="w-full h-[40px] rounded-md bg-primary text-slate-200"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

