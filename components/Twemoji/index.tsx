import React, { memo } from "react";
import Image from "next/image";

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component");
};

type Props = {
  emoji: string;
};

const Twemoji = ({ emoji = isRequired() }: Props) => {
  const img = emoji.codePointAt(0).toString(16);

  return (
    <div className="emoji">
      <Image
        src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
        width="16"
        height="16"
        alt={emoji}
      />
    </div>
  );
};

export default memo(Twemoji);
