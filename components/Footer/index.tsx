import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles["footer__container"]}>
        <div className={styles["footer__first"]}>
          <div className={styles["footer__location"]}>
            <h3 className={styles["footer__location-title"]}>Our Basecamp</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.765186101597!2d110.411253!3d-6.9571570000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4c634696d37ff96!2sEagle%20School!5e0!3m2!1sid!2sid!4v1667140809186!5m2!1sid!2sid"
              width="300"
              height="150"
              loading="lazy"
              className={styles.gmaps}
            ></iframe>
          </div>
          <div className={styles["footer__contact"]}>
            <div className={styles["footer__address"]}>
              <i className="uil uil-map-marker"></i>
              <div>
                <a className={styles["footer__address-country"]}>Indonesia</a>
                <p className={styles["footer__address-city"]}>
                  Semarang, Jawa Tengah
                </p>
              </div>
            </div>
            <div className={styles["footer__phone"]}>
              <i className="uil uil-phone"></i>
              <p>0821-4167-7330</p>
            </div>
            <div className={styles["footer__email"]}>
              <i className="uil uil-envelope-edit"></i>
              <a>admin@historymakerimpact.com</a>
            </div>
          </div>
          <div className={styles["footer__social"]}>
            <h3 className={styles["footer__social-hmi"]}>
              HistoryMaker Impact
            </h3>
            <p className={styles["footer__social-description"]}>
              adalah Komunitas Rohani Kristen Anak Muda yang berasal dari Kota
              Semarang. Berdiri dari tahun 2017 dan terus bergerak untuk
              kebangkitan rohani anak muda hingga saat ini.
            </p>
            <div className={styles["footer__social-media"]}>
              <Link href="https://wa.me/087764317143">
                <a>
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/historymakerimpact">
                <a>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </Link>
              <Link href="https://www.tiktok.com/@historymakerimpact?is_from_webapp=1&sender_device=pc">
                <a>
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </Link>
              <Link href="https://open.spotify.com/track/6NsGUb4Uyxmid7GSXGYuSh?si=dbLpujNORpW3oe2-TURNJQ">
                <a>
                  <i className="fa-brands fa-spotify"></i>
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCcfEP6BGCc-ctPpSeA7uOng">
                <a>
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["footer__second"]}>
          <p>Copyright © 2022 HistoryMaker Impact. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
