import { FC } from "react";
import { Input, Button, Card } from "components";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

export const Register: FC = () => {
  return (
    <div className="flex justify-center mt-40">
      <Card className="w-1/2">
        <div className="flex flex-col gap-5 px-5 py-5">
          <h1 className="text-center text-3xl font-bold my-5">
            Innoscripta <span className="text-primary">BLOG</span>
          </h1>

          <Input
            placeholder="Type your email address"
            className="w-full"
            icon={<EnvelopeIcon />}
          />

          <Input
            placeholder="Type your password"
            type="password"
            className="w-full"
            icon={<KeyIcon />}
          />

          <Input
            placeholder="Confirm your password"
            type="password"
            className="w-full"
            icon={<KeyIcon />}
          />

          <Button>Register</Button>
        </div>
      </Card>
    </div>
  );
};
