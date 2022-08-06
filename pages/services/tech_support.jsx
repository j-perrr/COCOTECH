import Image from "next/image";
import styles from "../../styles/Techsupport.module.css";

const tech_support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>TECH SUPPORT</h1>
        </div>
        <Image
          src="/img/techSupport.gif"
          alt="background"
          height={600}
          width={800}
        />
      </div>
    </div>
  );
};

export default tech_support;
