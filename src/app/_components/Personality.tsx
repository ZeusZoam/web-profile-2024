import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Logistician (ISTJ-T)</p>
        <p className="pb-2">
        Logisticians are practical and fact-minded individuals, whose reliability cannot be doubted. 
        They’re reserved yet willful, with a rational outlook on life, composing their actions carefully.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>Thinking</Badge>
          <Badge>Judging</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
