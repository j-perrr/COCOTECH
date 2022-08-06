import Image from "next/image";
import styles from "../../styles/Techsupport.module.css";

const dev_team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>YOUR DEVELOPMENT TEAM</h1>
        </div>
        <Image
          src="/img/devTeam.gif"
          alt="background"
          height={600}
          width={800}
        />
      </div>
    </div>
  );
};

export default dev_team;
