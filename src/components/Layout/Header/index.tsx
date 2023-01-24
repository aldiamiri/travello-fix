import React from "react";
import Image from "next/image";
import traveloLogo from "public/travelo-logo-header.png";
import Container from "../../Container";

function Header() {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4 ">
      <Container>
        <div className="flex justify-between items-center">
          <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="48" width="182" />
        </div>
      </Container>
    </header>
  );
}

export default Header;
