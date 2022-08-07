import { style } from "@mui/system";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.titleBackground}>
        <h2>PORTFOLIO HIGHLIGHTS</h2>
      </div>
      <div className={styles.sliderWrapper}>
        <img src="/img/Laptop-Mockup (1).jpg" className={styles.sliderImg} />

        <img src="/img/Laptop-Mockup (2).jpg" className={styles.sliderImg} />

        <img src="/img/Laptop-Mockup (3).jpg" className={styles.sliderImg} />

        <img src="/img/Laptop-Mockup (4).jpg" className={styles.sliderImg} />

        <img src="/img/Laptop-Mockup (5).jpg" className={styles.sliderImg} />
      </div>
    </div>
  );
};
{
  /* <Image
          src="/img/Laptop-Mockup (1).jpg"
          alt="background"
          layout="fill"
        />

        <Image
          src="/img/Laptop-Mockup (2).jpg"
          alt="background"
          layout="fill"
        />

        <Image
          src="/img/Laptop-Mockup (3).jpg"
          alt="background"
          layout="fill"
        /> */
}
export default Slider;
