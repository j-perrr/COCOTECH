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
      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>
          As a Business Owner, we understand the many daily problems and
          challenges that arise when it comes to maintaining your business.
        </p>
        <p>
          We also understand that technology is a field that gets evermore
          complex as time goes by, where each day that passes, new technology is
          created or current technology is updated. And though this seems like a
          bad thing, it is great for everyone because each new created or
          updated technology brings forth wonderful solutions to many different
          problems, including problems for business owners like yourself!
        </p>
        <p>
          As a business owner however, technology related issues should be the
          least of your concerns. That is why we are devoted to taking care of
          any problematic circumstances that may arise from technology. Let us
          handle all the technology for you, with our team of highly skilled
          Engineers, whatever complications may arise, we guarantee to fix it
          for you!
        </p>
      </div>
      <div className={styles.problem}>
        <h2>Tech Problems Unresolved?</h2>
        <p>
          Each Techbological problem that remains unresolved leads to lowers
          productivity and frustration of staff. For any business ...(be it
          small or large)... that lacks Technological support, can result in a
          quick accumulation of up to thousands of dollars per day in losses...
        </p>
        <p>
          Even those organizations that incorporate a well-staffed IT
          department, the day-to-day management of technology related issues can
          be a costly, time-consuming drain on resources. Fortunately for you,
          there’s an easy way to solve these problems while keeping costs low...
        </p>
      </div>
      <div className={styles.help}>
        <h2>How Can We Help?</h2>
        <p>
          Here at Cocotech Solutions, we are staffed by friendly, knowledgeable
          experts who are available 24/7 to quickly solve all IT problems your
          business is facing, whether it be simple minor bugs, slowdowns, to the
          major system-wide issues that can have a severe effect on
          productivity. We’ve developed an outstanding record for providing
          small and midsized companies in New York City with highly-reliable
          tech support.
        </p>
        <h3>Some Of The Problems We've Fixed:</h3>
        <ul>
          <li>Software Bugs & Errors</li>
          <li>Slow or crashed computers</li>
          <li>Data Recovery</li>
          <li>Internet Connection & Speed Issues</li>
          <li>Configuration Errors</li>
        </ul>
      </div>
      <div className={styles.solution}>
        <h2>The Solution That's Always There For You</h2>
        <p></p>
      </div>
    </div>
  );
};

export default tech_support;
