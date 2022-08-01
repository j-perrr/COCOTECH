import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.hookWrapper}>
        <div className={styles.hook}>
          <div className={styles.hookSection}>
            <Image
              src="/img/phone-icon.svg"
              alt="Call us"
              height="30"
              width="45"
            />
            <p>
              <a href="tel:646-894-8273">+ 1(646)894-8273</a>
            </p>
          </div>
          <hr />
          <div className={styles.hookSection}>
            <Image
              src="/img/email-icon.svg"
              alt="Email us"
              height="30"
              width="45"
            />
            <p>
              <a href="mailto:contact@cocotech.business">
                {" "}
                contact@cocotech.business
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <h2 className={styles.brandName}>Cocotech Solutions</h2>
          <p>
            We are a NYC based Software solutions company, dedicated to
            providing you with the best possible solution that tech can offer,
            to suit your business needs. Known for our quality and speed, our
            solutions are guaranteed to serve your needs for the long term. At
            Cocotech, we strive for perfection and results, we understand that
            is what trust is built on.
          </p>
        </div>
        <div className={styles.Middle}>
          <Image
            src="/img/instagram-icon.svg"
            alt="phone icone"
            height="40"
            width="55"
          />
          <Image
            src="/img/youtube-icon.svg"
            alt="phone icone"
            height="40"
            width="55"
          />
          <Image
            src="/img/facebook-icon.svg"
            alt="phone icone"
            height="40"
            width="55"
          />
        </div>
        <div className={styles.Right}>
          <ul className={styles.usefulLinks}>
            <li className={styles.brandName}>Useful Links</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={styles.legalSection}>
        <span>Copyright © 2021 Cocotech Solutions | All rights reserved.</span>
        <span>Terms And Conditions | Privacy Policy</span>
      </div>
      <div className={styles.endSection}></div>
    </div>
  );
};

export default Footer;
