import React, { FC, useState } from "react";
import { Input, Button, Card } from "components";
import { UserIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "context/AuthContext";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    await login(email, password);
  };

  return (
    <div className="flex justify-center mt-40">
      <Card className="w-1/2">
        <div className="flex flex-col gap-5 px-5 py-5">
          <h1 className="text-center text-3xl font-bold my-5">
            Innoscripta <span className="text-primary">BLOG</span>
          </h1>

          <Input
            value={email}
            onChange={handleEmailChange}
            placeholder="Type your email address"
            className="w-full"
            icon={<UserIcon />}
          />
          <Input
            value={password}
            onChange={handlePasswordChange}
            placeholder="Type your password"
            type="password"
            className="w-full"
            icon={<KeyIcon />}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Card>
    </div>
  );
};
