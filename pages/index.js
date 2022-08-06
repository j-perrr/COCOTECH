import Head from "next/head";
import Image from "next/image";
import Services from "../components/Services";
import Slider from "../components/Slider";
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
      <div className={styles.firstPanelWrapper}>
        <Image
          src="/img/techBackground2.gif"
          alt="background"
          height={900}
          width={600}
        />
        <div className={styles.firstPanelTextWrapper}>
          <h1> We Are Your Software Solutions Provider!</h1>
          <p>
            Be it a simple optimized website, or a full scale enterprise app,
            rest assured your target audience will have a fully immersive
            digital experience.
          </p>
          <button className={styles.firstPanelButton}>GET STARTED NOW</button>
        </div>
      </div>
      {/* SLIDER */}
      <div className={styles.secondPanelWrapper}>
        <Slider />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}
