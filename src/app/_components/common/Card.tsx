import React from "react";

type Props = {
  title: string;
};

const Card = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-light-white h-full p-4 rounded-xl px-4">
      <h1 className="text-xl font-bold pb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Card;
