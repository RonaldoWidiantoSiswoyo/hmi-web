import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./About.module.css";

SwiperCore.use([Autoplay]);
export default function About() {
  return (
    <ParallaxProvider>
      <Parallax>
        <div className={styles["container__about"]} id="about">
          <div className={styles.about}>
            <h1 className={styles["about__title"]}>About Us</h1>
            <div className={styles.section}>
              <div className={styles["about__left-section"]}>
                <Swiper
                  className={styles.swiper}
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
                    <img
                      className={styles["item__image"]}
                      src="/abouthm1.jpg"
                      alt="Foto HMI 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm2.jpg"
                      alt="Foto HMI 2"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm3.jpg"
                      alt="Foto HMI 3"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm4.jpg"
                      alt="Foto HMI 4"
                    />
                  </SwiperSlide>

                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm6.jpg"
                      alt="Foto HMI 6"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm7.jpg"
                      alt="Foto HMI 7"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm8.jpg"
                      alt="Foto HMI 8"
                    />
                  </SwiperSlide>
                  <SwiperSlide className={styles["swiper__slide"]}>
                    <img
                      className={styles["item__image"]}
                      src="/abouthm9.jpg"
                      alt="Foto HMI 9"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles["about__right-section"]}>
                <div className={styles["section__desc"]}>
                  <div className={styles["about__sub"]}>
                    <h4>Siapa kami?</h4>
                    <p className={styles["about__description"]}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quia, perspiciatis qui vero esse harum ab porro delectus
                      officiis quibusdam voluptatum, pariatur quod perferendis
                      commodi eveniet quo dolorum at dolores non.
                    </p>
                  </div>
                  <div className={styles["about__sub"]}>
                    <h4>Apa yang kami lakukan?</h4>
                    <p className={styles["about__description"]}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolore nobis, illo officia veritatis rem,
                      impedit repellendus eligendi, corporis officiis vero
                      laborum? Modi a tenetur ex perferendis facere sapiente.
                      Sit.
                    </p>
                  </div>
                  <div className={styles["about__sub"]}>
                    <h4>Apa yang kami lakukan?</h4>
                    <p className={styles["about__description"]}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolore nobis, illo officia veritatis rem,
                      impedit repellendus eligendi, corporis officiis vero
                      laborum? Modi a tenetur ex perferendis facere sapiente.
                      Sit.
                    </p>
                  </div>
                  <div className={styles["about__sub"]}>
                    <h4>Apa yang kami lakukan?</h4>
                    <p className={styles["about__description"]}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloremque dolore nobis, illo officia veritatis rem,
                      impedit repellendus eligendi, corporis officiis vero
                      laborum? Modi a tenetur ex perferendis facere sapiente.
                      Sit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
