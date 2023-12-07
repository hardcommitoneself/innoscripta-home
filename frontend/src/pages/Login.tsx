import React, { FC, useState } from "react";
import { Input, Button, Card } from "components";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {};
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <Card className="w-1/2">
        <div className="flex flex-col gap-5 px-5 py-5">
          <label htmlFor="" className="px-3">
            Email Address *
          </label>
          <Input
            value={email}
            onChange={handleEmailChange}
            placeholder="Type your email address"
            block
          />
          <label htmlFor="" className="px-3">
            Password *
          </label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            placeholder="Type your password"
            type="password"
            block
          />
          <Button onClick={() => login()}>Login</Button>
        </div>
      </Card>
    </div>
  );
};
