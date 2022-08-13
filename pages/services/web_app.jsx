import Image from "next/image";
import styles from "../../styles/WebApp.module.css";

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
      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>
          A <b>Website</b> is a <b>digital display </b>of your business, but it
          can be so much more!
        </p>
        <Image
          src="/img/stagesOfWebDev.gif"
          alt="background"
          height={300}
          width={400}
        />
        <p>
          We <b>design, develop and deploy</b> the perfect website to suit your
          business needs. We understand that each business is different, and so
          with each approach taken, we carefully take into account all problems
          that your business faces, all goals and expectations your business
          expects to reach, and any other concerns or expectations your business
          requires.
        </p>
      </div>
      <br />
      <br />
      <div className={styles.picturePainted}>
        <h2>Painting The Picture</h2>
        <Image
          src="/img/paintThePicture.gif"
          alt="background"
          height={300}
          width={400}
        />
        <p>
          Our Website is simply a tool that serves as a <b>solution</b>.
          Depending on the structure and nature of your business, your expected
          website can include many features to exceed its expectations...
        </p>
        <h3>Features To Name A Few:</h3>
        <ul>
          <li>Payment Gateway</li>
          <li>E-Commerce</li>
          <li>Data Driven Platform</li>
          <li>Reservation System</li>
          <li>Admin Page</li>
          <li>Content Management System</li>
          <li>Database Implementation</li>
          <li>Dynamic Form Pages</li>
          <li>Custom Microservice</li>
        </ul>

        <p>
          Our sites are very fast and very secure, we make sure its a smooth
          sail process.
        </p>
      </div>
      <br />
      <br />
      <div className={styles.siteOutreach}>
        <h2>Website Can't Reach Audience?</h2>
        <Image
          src="/img/cannotFind.gif"
          alt="background"
          height={300}
          width={400}
        />
        <p>
          Don't worry about the website not gaining traction, we <b>ensure</b>{" "}
          your website <b>reaches</b> your <b>target audience</b>...
        </p>
        <p>
          Whether it be with Search Engine Ads, Google My Business, or SEO
          Optimization ... (which our sites already come SEO Optimized) ... We
          make sure your website gets seen by your target audience, and that's a{" "}
          <b>guarantee</b>!
        </p>
      </div>
      <br />
      <br />
      <div className={styles.whyUs}>
        <h2>Why Us?</h2>
        <Image
          src="/img/thumbsUp.gif"
          alt="background"
          height={300}
          width={400}
        />
        <p>
          We understand how saturated the software solutions industry is,
          there's many other alternatives to us, some also being cheaper than
          us. We also understand that as a Business owner, you have no time on
          your plate to worry about the intricacies of technology.{" "}
        </p>
        <p>
          But there's a reason as to why time after time, we are preferred above
          others:{" "}
        </p>
        <p>
          <b>We don't focus on design, we focus on effective solutions.</b>
        </p>
        <p>
          At Cocotech Solutions, <b>everything is taken care of for you</b>...
          From the design, to the development, to the deployment, to the
          maintenance of the website,{" "}
          <b>rest assured we'll be with you every step of the way!</b>
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};
export default web_app;
