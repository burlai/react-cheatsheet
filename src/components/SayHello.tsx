import React from "react";

interface SayHelloInterface {
  greetingOne: string;
  greetingTwo?: string;
}

export const SayHello: React.FC<SayHelloInterface> = ({
  greetingOne,
  greetingTwo = "greeting two",
}) => {
  return (
    <>
      <h3>{greetingOne}</h3>
      <h4>{greetingTwo}</h4>
    </>
  );
};
