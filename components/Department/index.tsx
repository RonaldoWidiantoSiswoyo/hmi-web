import Link from "next/link";
import styles from "./Department.module.css";

const Department = () => {
  return (
    <div>
      <div className={styles.container} id="department">
        <div className={styles.wrapper}>
          <div className={styles["first__section"]}>
            <h1>Department</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              aspernatur ipsa nisi quam cumque, delectus officia accusantium
              accusamus minus placeat quasi beatae voluptatem id laudantium
              corrupti fugit sapiente? Ipsa, sit molestias. Sit, esse est
              consequatur dolores voluptate voluptas suscipit cumque recusandae
              fugit? Quis possimus magni architecto ipsam? Ratione, iure
              voluptates?
            </p>
          </div>
          <div className={styles["second__section"]}>
            <div className={styles.card}>
              <img src="dancer.jpg" alt="" />
              <div className={styles.hastag}>
                <p className={styles["hastag__caption"]}>Fotografi</p>
                <p className={styles["hastag__caption"]}>Videografi</p>
              </div>
              <h3 className={styles["card__title"]}>Multimedia</h3>
              <p className={styles["card__description"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis incidunt deleniti qui repudiandae
              </p>
              <Link href="">
                <a className={styles["card__button"]}>Join Us</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="dancer.jpg" alt="" />
              <div className={styles.hastag}>
                <p className={styles["hastag__caption"]}>Fotografi</p>
                <p className={styles["hastag__caption"]}>Videografi</p>
              </div>
              <h3 className={styles["card__title"]}>Multimedia</h3>
              <p className={styles["card__description"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis incidunt deleniti qui repudiandae
              </p>
              <Link href="">
                <a className={styles["card__button"]}>Join Us</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="dancer.jpg" alt="" />
              <div className={styles.hastag}>
                <p className={styles["hastag__caption"]}>Fotografi</p>
                <p className={styles["hastag__caption"]}>Videografi</p>
              </div>
              <h3 className={styles["card__title"]}>Multimedia</h3>
              <p className={styles["card__description"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis incidunt deleniti qui repudiandae
              </p>
              <Link href="">
                <a className={styles["card__button"]}>Join Us</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="dancer.jpg" alt="" />
              <div className={styles.hastag}>
                <p className={styles["hastag__caption"]}>Fotografi</p>
                <p className={styles["hastag__caption"]}>Videografi</p>
              </div>
              <h3 className={styles["card__title"]}>Multimedia</h3>
              <p className={styles["card__description"]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis incidunt deleniti qui repudiandae
              </p>
              <Link href="">
                <a className={styles["card__button"]}>Join Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
