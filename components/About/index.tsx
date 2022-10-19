import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./About.module.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);
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
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm1.jpg"
                alt="Foto HMI 1"
                objectFit="cover"
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
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm5.jpg"
                alt="Foto HMI 5"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm6.jpg"
                alt="Foto HMI 6"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm7.jpg"
                alt="Foto HMI 7"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm8.jpg"
                alt="Foto HMI 8"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm9.jpg"
                alt="Foto HMI 9"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm10.jpg"
                alt="Foto HMI 10"
                width={1000}
                height={650}
              />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__slide"]}>
              <Image
                className={styles["item__image"]}
                src="/abouthm11.jpg"
                alt="Foto HMI 11"
                width={1000}
                height={650}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles["about__right-section"]}>
          <h1 className={styles["about__title"]}>About Us</h1>
          <div>
            <h4>Siapa kami?</h4>
            <p className={styles["about__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              perspiciatis qui vero esse harum ab porro delectus officiis
              quibusdam voluptatum, pariatur quod perferendis commodi eveniet
              quo dolorum at dolores non.
            </p>
          </div>
          <div>
            <h4>Apa yang kami lakukan?</h4>
            <p className={styles["about__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque dolore nobis, illo officia veritatis rem, impedit
              repellendus eligendi, corporis officiis vero laborum? Modi a
              tenetur ex perferendis facere sapiente. Sit.
            </p>
          </div>
          {/* <div>
            <h4>Apa tujuan kami?</h4>
            <p className={styles["about__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque dolore nobis, illo officia veritatis rem, impedit
              repellendus eligendi, corporis officiis vero laborum? Modi a
              tenetur ex perferendis facere sapiente. Sit.
            </p>
          </div> */}
          <div className="about__asking">
            {/* <p className={styles["about__asking-desc"]}>
              Want to know about Our Event?
            </p> */}
            <div className={styles["about__button"]}>
              <a href="#event" className={styles["button__scroll-desc"]}>
                Want to know more about Our Event? Click button below!
              </a>
              {/* <a href="" className={styles["button__scroll-tombol"]}>
                Click Me
              </a> */}
            </div>
          </div>
          <a href="" className={styles["button__scroll-icon"]}>
            Our Event
            {/* <i className="uil uil-arrow-right"></i> */}
          </a>
        </div>
      </div>
    </div>
  );
}
