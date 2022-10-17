import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [Toggle, showMenu] = useState(true);
  console.log(Toggle);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src="/hm.png" width={30} height={30} alt="Logo HMI" />
          <a className={styles.title}>HistoryMaker Impact</a>
        </div>

        <div className={Toggle ? "show_menu" : "navbar_container"}>
          <ul className="navbar">
            <li className="navbar_item">
              <Link href="/">
                <div className="navlink_container">
                  <i className="uil uil-estate navlink"></i>
                  <a>Home</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#">
                <div className="navlink_container">
                  <i className="uil uil-user-circle navlink"></i>
                  <a>About</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#">
                <div className="navlink_container">
                  <i className="uil uil-schedule navlink"></i>
                  <a>Event</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#">
                <div className="navlink_container">
                  <i className="uil uil-heart-alt navlink"></i>
                  <a>Family Care</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#">
                <div className="navlink_container">
                  <i className="uil uil-envelope-heart navlink"></i>
                  <a>Prayer Box</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#">
                <div className="navlink_container">
                  <i className="uil uil-phone navlink"></i>
                  <a>Contact</a>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps apps"></i>
        </div>
      </div>
    </div>
  );
}
