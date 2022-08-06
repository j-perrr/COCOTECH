import Image from "next/image";
import styles from "../../styles/Techsupport.module.css";

const mobile_app = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>MOBILE APP DEVELOPMENT</h1>
        </div>
        <Image
          src="/img/mobileDev3.gif"
          alt="background"
          height={600}
          width={800}
        />
      </div>
    </div>
  );
};

export default mobile_app;
