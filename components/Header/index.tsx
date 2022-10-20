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
              <Link href="#home">
                <div className="navlink_container">
                  <i className="uil uil-estate navlink"></i>
                  <a>Home</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#about">
                <div className="navlink_container">
                  <i className="uil uil-user-circle navlink"></i>
                  <a>About</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#event">
                <div className="navlink_container">
                  <i className="uil uil-schedule navlink"></i>
                  <a>Event</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#department">
                <div className="navlink_container">
                  <i className="uil uil-layers-alt navlink"></i>
                  <a>Department</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#familycare">
                <div className="navlink_container">
                  <i className="uil uil-heart-alt navlink"></i>
                  <a>Family Care</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#hmw">
                <div className="navlink_container">
                  <i className="uil uil-music navlink"></i>
                  <a>HMW</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#ourstory">
                <div className="navlink_container">
                  <i className="uil uil-history navlink"></i>
                  <a>Our Story</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#prayerbox">
                <div className="navlink_container">
                  <i className="uil uil-envelope-heart navlink"></i>
                  <a>Prayer Box</a>
                </div>
              </Link>
            </li>
            <li className="navbar_item">
              <Link href="#contact">
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
