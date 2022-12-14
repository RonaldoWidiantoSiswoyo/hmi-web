import Image from "next/image";
import Link from "next/link";
import styles from "./Myhome.module.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function MyHome() {
  return (
    <ParallaxProvider>
      <Parallax>
        <div className={styles.container} id="home">
          <div className={styles["right__section"]}>
            <h1 className={styles["right__section-title"]}>
              Your Place to Grow and be Impact through His Love
            </h1>
            <p className={styles["right__section-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              accusamus corrupti ipsam, cupiditate sint nesciunt facilis vitae
              necessitatibus tenetur error commodi neque quibusdam libero enim
              odit! Reprehenderit ducimus similique consequuntur?
            </p>
            <div className={styles.button}>
              <Link href="https://chat.whatsapp.com/Ju9P5sxACBr33RTCkmFeDU">
                <div className={styles["button__join"]}>
                  <a className={styles["button__icon"]}>
                    <i className="uil uil-user-plus"></i>
                  </a>
                  <a>Join Us!</a>
                </div>
              </Link>

              <div className={styles["button__scroll"]}>
                <a href="#about" className={styles["button__scroll-desc"]}>
                  Scroll Down
                </a>
                <a href="#about" className={styles["button__scroll-icon"]}>
                  <i className="uil uil-angle-down"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["left__section"]}>
            <div className={styles["community__image"]}>
              <Image src="/comu.png" width={450} height={650} alt="Community" />
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
