import { Slot } from "@radix-ui/react-slot";

import type { ComponentProps, FC } from "react";

export interface BaseButtonProps extends ComponentProps<"button"> {
  asChild?: boolean;
}

export const BaseButton: FC<BaseButtonProps> = ({ asChild, ...rest }) => {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" {...rest} />;
};
