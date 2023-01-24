import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;
