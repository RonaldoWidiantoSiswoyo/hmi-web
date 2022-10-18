import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.section}>
        <div className={styles["about__left-section"]}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm1.jpg"
                alt="Foto HMI 1"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm2.jpg"
                alt="Foto HMI 2"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm3.jpg"
                alt="Foto HMI 3"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm4.jpg"
                alt="Foto HMI 4"
                width={1000}
                height={650}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles["about__right-section"]}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            perspiciatis qui vero esse harum ab porro delectus officiis
            quibusdam voluptatum, pariatur quod perferendis commodi eveniet quo
            dolorum at dolores non.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            dolore nobis, illo officia veritatis rem, impedit repellendus
            eligendi, corporis officiis vero laborum? Modi a tenetur ex
            perferendis facere sapiente. Sit.
          </p>
          <div className={styles["about__button"]}>
            <a href="#event" className={styles["button__scroll-desc"]}>
              Our Event?
            </a>
            <a href="" className={styles["button__scroll-icon"]}>
              <i className="uil uil-angle-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
