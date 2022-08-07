import Image from "next/image";
import styles from "../../styles/Techsupport.module.css";

const web_app = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>WEB DEVELOPMENT</h1>
        </div>
        <Image
          src="/img/webDev2.gif"
          alt="background"
          height={600}
          width={800}
        />
      </div>
    </div>
  );
};
export default web_app;