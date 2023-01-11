import Link from "next/link";
import styles from "./Event.module.css";

export default function Event() {
  return (
    <div className={styles.container} id="event">
      <div className={styles.event}>
        <div className={styles.left}>
          <h1>Event HMI</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eius
            deserunt possimus, aspernatur vel quia totam magni repellendus
            itaque. Deleniti magni vero autem alias iste cupiditate accusantium
            blanditiis facere nesciunt ut inventfore debitis, nihil odit quidem
            tempora quaerat culpa consequatur?
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.box}>
            <div className={styles.form}>
              <img src="/januari.jpeg" alt="event januari" />
              <div>
                <h2 className={styles["form__title"]}>JANUARI</h2>
                <p className={styles["form__description"]}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  dolores qui perspiciatis odit sit corporis! Iure explicabo
                  omnis quam ea, repellat adipisci placeat qui, veritatis ipsam
                  sequi id eos
                </p>
                <Link href="/EventPage/eventpage">
                  <a className={styles["form__button"]}>
                    Read More<i className="uil uil-angle-right-b"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
