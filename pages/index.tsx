import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/logo.svg";
import facebook from "../public/icons/facebook.svg";
import instagram from "../public/icons/instagram.svg";
import twitter from "../public/icons/twitter.svg";
import youtube from "../public/icons/youtube.svg";

import watchButton from "../public/components/watchButton.svg";
import trailerButton from "../public/components/trailerButton.svg";

import ghost1 from "../public/ghost1.png";
import ghost2 from "../public/ghost2.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Ghibli</title>
      </Head>
      <main className={styles.content}>
        <header className={styles.header}>
          <Image src={logo} alt="Studio Ghibli" />
          <div className={styles.social}>
            <Image src={facebook} alt="Facebook" />
            <Image src={instagram} alt="Instagram" />
            <Image src={twitter} alt="Twitter" />
            <Image src={youtube} alt="Youtube" />
          </div>
        </header>
        <div className={styles.studio}>
          <div className={styles.description}>
            <p className={styles.author}>HAYAO MIYAZAKI</p>
            <p className={styles.title}>
              A VIAGEM
              <br /> DE CHIHIRO
            </p>
            <p className={styles.descriptionText}>
              Chihiro chega a um mundo mágico dominado por
              <br /> uma bruxa. Aqueles que a desobedecem são
              <br /> transformados em animais.
            </p>
            <div className={styles.buttons}>
              <Image src={watchButton} alt="Watch" />
              <Image src={trailerButton} alt="Trailer" />
            </div>
          </div>
          <div className={styles.banner}>
            <Image
              className={styles.ghost1}
              loading="lazy"
              quality={100}
              src={ghost1}
              alt="Ghost 1"
            />
            <Image
              className={styles.ghost2}
              loading="lazy"
              quality={100}
              src={ghost2}
              alt="Ghost 2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
