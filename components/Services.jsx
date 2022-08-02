import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Our Services</h3>
      </div>
      <div className={styles.wrapper}>
        {/* Web Applications  */}
        <img src="/img/webappIcon.png" />
        <h3>Web App Development</h3>
      </div>
      <hr />
      <div className={styles.wrapper}>
        {/* Mobile Applications  */}
        <img src="/img/mobileappIcon.png" />
        <h3>Mobile App Development</h3>
      </div>
      <hr />
      <div className={styles.wrapper}>
        {/* Tech Support */}
        <img src="/img/techsupportIcon.png" />
        <h3>Technology Support</h3>
      </div>
      <hr />
      <div className={styles.wrapper}>
        {/* Technology Partnership */}
        <img src="/img/techpartnershipIcon.png" />
        <h3>Software Development Team</h3>
      </div>
      <button className={styles.button}>Call Us</button>
    </div>
  );
};

export default Services;
