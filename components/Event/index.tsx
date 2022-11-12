import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Event.module.css";
import Link from "next/link";
import "swiper/css";

export default function Event() {
  return (
    <div className={styles.container} id="event">
      <div className={styles.event}>
        <div className={styles.left}>
          <h1>Event HMI</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            unde.
          </p>
        </div>
        <div className={styles.right}>
          <Swiper
            className="swiper-container"
            spaceBetween={35}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              980: {
                width: 980,
                slidesPerView: 3,
              },
              768: {
                width: 768,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 1,
              },
              350: {
                width: 350,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className={styles.box}>
              <div className={styles.form}>
                <img src="/heroes.jpg" alt="event bangkitlah" />
                <h2 className={styles["form__title"]}>HEROES</h2>
                <p className={styles["form__description"]}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  dolores qui perspiciatis odit sit corporis! Iure explicabo
                  omnis quam ea, repellat adipisci placeat qui, veritatis ipsam
                  sequi id eos
                </p>
                <Link href="/EventPage/eventpage">
                  <a className={styles["form__button"]}>
                    Read more<i className="uil uil-angle-right-b"></i>
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.box}>
              <div className={styles.form}>
                <img src="/heroes.jpg" alt="event bangkitlah" />
                <h2 className={styles["form__title"]}>HEROES</h2>
                <p className={styles["form__description"]}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  dolores qui perspiciatis odit sit corporis! Iure explicabo
                  omnis quam ea, repellat adipisci placeat qui, veritatis ipsam
                  sequi id eos
                </p>
                <Link href="/EventPage/eventpage">
                  <a className={styles["form__button"]}>
                    Read more<i className="uil uil-angle-right-b"></i>
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.box}>
              <div className={styles.form}>
                <img src="/heroes.jpg" alt="event bangkitlah" />
                <h2 className={styles["form__title"]}>HEROES</h2>
                <p className={styles["form__description"]}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  dolores qui perspiciatis odit sit corporis! Iure explicabo
                  omnis quam ea, repellat adipisci placeat qui, veritatis ipsam
                  sequi id eos
                </p>
                <Link href="/EventPage/eventpage">
                  <a className={styles["form__button"]}>
                    Read more<i className="uil uil-angle-right-b"></i>
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
