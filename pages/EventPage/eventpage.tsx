import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./EventPage.module.css";

export default function EventPage() {
  return (
    <div id="eventpage">
      <Head>
        <title>HMI | Event Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hm.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      <Layout>
        <div className={styles.eventpage}>
          <div className={styles["eventpage__container"]}>
            <div className={styles["left__section"]}>
              <div className={styles["eventpage__image"]}>
                <img src="/januari.jpg" alt="logo heroes" />
              </div>
              <div className={styles["eventpage__description"]}>
                <div className={styles["eventpage__description-title"]}>
                  <h2>Deskripsi</h2>
                </div>
                <div className={styles["eventpage__description-caption"]}>
                  <p>
                    Milenial Service HEROES adalah acara kerohanian untuk anak
                    muda yang diselenggarkan oleh Komunitas Rohani HistoryMaker
                    Impact. Penasaran dengan tema Milenial Service kali ini?
                    Langsung aja daftarkan dirimu dan siapkan diri untuk
                    gebrakan luar biasa tanggal 25 Januari 2023.
                  </p>
                  {/* <h3>Syarat dan Ketentuan</h3>
                  <h5>1. Free Tickets.</h5>
                  <p>
                    Acara ini diselenggarkan gratis tanpa dipungut biaya
                    sepersenpun.
                  </p>
                  <h5>
                    2. All Participants under 16 y.o must have received Covid-19
                    Vaccine dose 2.
                  </h5>
                  <p>Semua peserta dibawah 16 tahun wajib sudah Vaksin ke-2.</p>
                  <h5>
                    3. All Participants above 16 y.o must have received Covid-19
                    Vaccine dose 3 (Booster).
                  </h5>
                  <p>
                    Semua peserta 16 tahun keatas sudah melakukan Vaksin
                    Covid-19 dosis 3 (Booster).
                  </p>
                  <h5>
                    4.Each Participant is responsible for his/her own
                    belongings.
                  </h5>
                  <p>
                    Setiap peserta bertanggung jawab atas barang bawaan
                    masing-masing
                  </p>
                  <h5>5. NO WEAPON & NO DRUGS.</h5>
                  <p>DILARANG MEMBAWA SENJATA ATAU OBAT-OBATAN TERLARANG.</p> */}
                </div>
              </div>
            </div>
            <div className={styles["right__section"]}>
              <div className={styles["rightsection__atas"]}>
                <div className={styles["title__event"]}>
                  <h3>Millenial Service : JANUARI</h3>
                </div>
                <div className={styles["schedule__event"]}>
                  <div className={styles["date__event"]}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>Rabu, 25 Januari 2023</p>
                  </div>
                  <div className={styles["time__event"]}>
                    <i className="fa-solid fa-clock"></i>
                    <p>17:00 - Selesai</p>
                  </div>
                  <div className={styles["location__event"]}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>JKI Higher Than Ever, Semarang</p>
                  </div>
                </div>

                <div className={styles["organizer__event"]}>
                  <div className={styles["organizer__event-logo"]}>
                    <img src="/hm.png" alt="logo HMI" />
                    <div className={styles["organizer__event-caption"]}>
                      <p>Diselenggarakan oleh</p>
                      <h4>HistoryMaker Impact</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["registration__event"]}>
                <div className={styles["invitation__event"]}>
                  <div className={styles["ticket__logo"]}>
                    <i className="fa-solid fa-ticket"></i>
                    <p>
                      Jika kamu belum mendaftarkan diri. Silakan daftar terlebih
                      dahulu dengan klik tombol REGISTER dibawah.
                    </p>
                  </div>
                  <div className={styles["htm__event"]}>
                    <h5>HTM :</h5>
                    <h5>FREE</h5>
                  </div>
                  <div className={styles["button__register"]}>
                    <Link href="https://bit.ly/daftarMSjanuari">
                      <a>REGISTER</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
