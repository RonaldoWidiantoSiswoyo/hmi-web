import Link from "next/link";
import styles from "./Event.module.css";

export default function Event() {
  return (
    <div className={styles.container} id="event">
      <div className={styles.event}>
        <div className={styles.box}>
          <div className={styles.form}>
            <img src="/heroes.jpg" alt="event bangkitlah" />
            <h2 className={styles["form__title"]}>HEROES</h2>
            <p className={styles["form__description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              dolores qui perspiciatis odit sit corporis! Iure explicabo omnis
              quam ea, repellat adipisci placeat qui, veritatis ipsam sequi id
              eos
            </p>
            <Link href="/pages/EventPage/eventpage">
              <a className={styles["form__button"]}>
                Read more<i className="uil uil-angle-right-b"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.form}>
            <img src="/heroes.jpg" alt="event bangkitlah" />
            <h2 className={styles["form__title"]}>HEROES</h2>
            <p className={styles["form__description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              dolores qui perspiciatis odit sit corporis! Iure explicabo omnis
              quam ea, repellat adipisci placeat qui, veritatis ipsam sequi id
              eos
            </p>
            <Link href="/pages/EventPage/eventpage">
              <a className={styles["form__button"]}>
                Read more<i className="uil uil-angle-right-b"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.form}>
            <img src="/heroes.jpg" alt="event bangkitlah" />
            <h2 className={styles["form__title"]}>HEROES</h2>
            <p className={styles["form__description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              dolores qui perspiciatis odit sit corporis! Iure explicabo omnis
              quam ea, repellat adipisci placeat qui, veritatis ipsam sequi id
              eos
            </p>
            <Link href="/EventPage/eventpage">
              <a className={styles["form__button"]}>
                Read more<i className="uil uil-angle-right-b"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
