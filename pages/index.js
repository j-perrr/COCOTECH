import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cocotech Solutions</title>
        <meta
          name="description"
          content="A Web Development Company dedicated do your success."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* CALL TO ACTION */}
      <div></div>
      <Image
        src="/img/good-morning-pixel.gif"
        alt="background"
        height={370}
        width={600}
      />
      <div className={styles.firstPanelTextWrapper}>
        <h1> We Are Your Software Solutions Provider!</h1>
        <p>
          Be it a simple optimized website, or a full scale enterprise app, rest
          assured your target audience will have a fully immersive digital
          experience.
        </p>
        <button className={styles.firstPanelButton}>GET STARTED NOW</button>
      </div>
    </div>
  );
}
