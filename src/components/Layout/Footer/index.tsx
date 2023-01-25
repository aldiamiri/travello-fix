import React from "react";
import Container from "../../Container";
import Image from "next/image";
import FooterInfo from "./FooterInfo";

import styles from "./Footer.module.css";

import traveloLogo from "public/travelo-logo-footer.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="98" width="136" />
          </figure>
          <div className="flex flex-1 justify-between ml-[106px]">
            <FooterInfo
              title="Info"
              content={[
                {
                  label: "Tentang Kami",
                  href: "/",
                },
                {
                  label: "Testimonial",
                  href: "/",
                },
                {
                  label: "Kontak",
                  href: "/",
                },
              ]}
            />

            <FooterInfo
              title="Perusahaan"
              content={[
                {
                  label: "Syarat & Ketentuan",
                  href: "/",
                },
                {
                  label: "Kebijakan Privasi",
                  href: "/",
                },
                {
                  label: "Blog",
                  href: "/",
                },
                {
                  label: "Bantuan Pelayanan",
                  href: "/",
                },
              ]}
            />

            <FooterInfo title="Perusahaan" content={["Jl. Politeknik", "Manado, Sulawesi Utara", "Indonesia", "(0431)815631", "travello@gmail.com"]} />
          </div>
        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-heading-5 text-white font-bold text-center">Copyright @2023 Travello. All Rights Reserved. Design By Aldi Amiri</p>
      </div>
    </footer>
  );
}

export default Footer;
