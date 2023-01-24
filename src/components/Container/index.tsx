import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
export default Container;
