import React from "react";
import Image from "next/image";
import traveloLogo from "public/travelo-logo-header.png";
import Container from "../../Container";
import Search from "./Search";
import Nav from "./Nav";
import Button from "../../Button";

function Header() {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="48" width="182" />
            <Search />
          </div>
          <div className="flex gap-5 sm:justify-start">
            <Nav />
            <Button className="w-[190px]">Masuk</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
