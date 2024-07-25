"use client";
import React from "react";
import Link from "next/link";

import "./header.css";
import { dataPage } from "../dataPage";

interface IHeaderState {
  open: boolean;
}

class Header extends React.Component<{}, IHeaderState> {
  menuRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = { open: false };
    this.menuRef = React.createRef<HTMLDivElement>();
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  }

  handleClickOutside = (event: MouseEvent) => {
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target as Node)
    ) {
      this.setState({ open: false });
    }
  };

  toggleMenu = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <div className="header">
        <div className="haeder-top">
          <div className="menu-icon">
            <div className="menu-container" ref={this.menuRef}>
              <div className="menu-trigger" onClick={this.toggleMenu}>
                <i className="ri-menu-line"></i>
              </div>

              <div
                className={` dropdown-menu  ${open ? "active" : "inactive"}`}
              >
                <button className="close-btn" onClick={this.toggleMenu}>
                  <i className="ri-close-line"></i>
                </button>
                <h3 className="">
                  شركة النظم المتطورة <br />
                  <span>لساندوتش بانل والغرف الجاهزة </span>
                </h3>
                <ul onClick={this.toggleMenu}>
                  {dataPage.map((item, index) => (
                    <DropdownItem
                      href={item.href}
                      icon={item.icon}
                      text={item.text}
                      alt={item.alt}
                      key={index}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="logo">
          <Link href="/" legacyBehavior>
            <img 
              src="/شعار-شركة-سندوتيش-بانل.png"
              height={70}
              title="شركة الرائدة في مجال السندوتش بانل والغرف الجاهزة"
            alt="شعار شركة سندوتيش بانل"
            ></img>
          </Link>
            {/* <Link href="/" legacyBehavior>

              <a title="شركة الرائدة في مجال السندوتش بانل والغرف الجاهزة">

                <span className="main-color">شركة</span>
                <span> ساندوتش بانل وغرف جاهزه</span>
              </a>
            </Link> */}
          </div>
        </div>
        <div className="header-bottom">
          <div className="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              className="input"
              type="search"
              placeholder="بحث : الكلمات الدلالية #الهاش_تاج"
            />
          </div>
          <div className="social-icons">
            <Link
              href="https://www.facebook.com/profile.php?id=100072036128119&mibextid=ZbWKwL"
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-line"></i>
              </a>
            </Link>

            <Link href="https://www.instagram.com/a___2008s" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line instagram"></i>
              </a>
            </Link>
            <i className="ri-youtube-line"></i>
          </div>
        </div>
        <div id="whatsapp">
          <Link
            href="https://api.whatsapp.com/send?phone=966500513512"
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="wtsapp"
              title="تواصل معنا عبر الواتساب"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
          </Link>
        </div>
        <div id="phone">
          <a
            href="tel:+966500513512"
            target="_blank"
            rel="noopener noreferrer"
            className="phones"
            title="تواصل معنا عبر الهاتف"
          >
            <i className="ri-phone-line"></i>
          </a>
        </div>
      </div>
    );
  }
}
function DropdownItem(props: {
  href: string;
  icon: string;
  text: string;
  alt: string;
}) {
  return (
    <li className="dropdownItem">
      <i className={props.icon}></i>
      <Link href={props.href} legacyBehavior>
        <a title={props.alt}>{props.text}</a>
      </Link>
    </li>
  );
}

export default Header;
