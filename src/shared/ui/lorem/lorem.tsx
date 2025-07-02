import { type FC } from "react";

interface LoremProps {
  count?: number;
}

export const Lorem: FC<LoremProps> = ({ count = 1 }) => {
  const loremIpsumText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati quis velit est cupiditate error? Nemo tempore officiis iste veniam, optio eos expedita quia, corporis cum, delectus dicta cupiditate perspiciatis.";

  return (
    <div>
      {[...new Array(count)].map((_, i) => (
        <p key={i}>{loremIpsumText}</p>
      ))}
    </div>
  );
};
