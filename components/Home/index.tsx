import styles from "./Myhome.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function MyHome() {
  return (
    <div className={styles.container}>
      <div className={styles["right_section"]}>
        <h1 className={styles.title}>
          Your Place to Grow and be Impact through His Love
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          accusamus corrupti ipsam, cupiditate sint nesciunt facilis vitae
          necessitatibus tenetur error commodi neque quibusdam libero enim odit!
          Reprehenderit ducimus similique consequuntur?
        </p>
        <div className={styles.click}>
          <Link href="https://chat.whatsapp.com/Ju9P5sxACBr33RTCkmFeDU">
            <div className={styles.button}>
              <a className={styles["button_icon"]}>
                <i className="uil uil-user-plus"></i>
              </a>
              <a>Join Us!</a>
            </div>
          </Link>

          <div className={styles.icon}>
            <a href="#" className={styles["icon_desc"]}>
              Scroll Down
            </a>
            <a href="" className={styles["icon_down"]}>
              <i className="uil uil-angle-down"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles["left_section"]}>
        {/* <Image
          src="/community.png"
          width={500}
          height={700}
          alt="Community"
          className={styles["community_image"]}
        /> */}
        <img
          src="/community.png"
          alt="Community Image"
          className={styles["community_image"]}
        />
      </div>
    </div>
  );
}
