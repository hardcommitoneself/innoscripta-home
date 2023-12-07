import React, { FC } from "react";
import { Input, Button, Card } from "components";

export const RegisterPage: FC = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-1/2">
        <div className="flex flex-col gap-5 px-5 py-5">
          <label htmlFor="" className="px-3">
            Email Address *
          </label>
          <Input placeholder="Type your email address" block />
          <label htmlFor="" className="px-3">
            Password *
          </label>
          <Input placeholder="Type your password" type="password" block />
          <label htmlFor="" className="px-3">
            Password confirmation *
          </label>
          <Input placeholder="Confirm your password" type="password" block />
          <Button>Register</Button>
        </div>
      </Card>
    </div>
  );
};
