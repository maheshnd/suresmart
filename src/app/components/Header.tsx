"use client";
import Link from "next/link";
import { BrandName } from "./BrandName";
export const Header = () => {
  const handleOnClick = async () => {
    const ftcoNav = document.getElementById("ftco-nav");
    ftcoNav?.classList.remove("show");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sleep awake scrolled"
      id="ftco-navbar"
    >
      <div className="container">
        <BrandName />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active nav-list-item">
              <Link
                href="/#introduction-section"
                className="nav-link"
                onClick={handleOnClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item nav-list-item">
              <Link
                href="/services"
                className="nav-link"
                onClick={handleOnClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item nav-list-item">
              <Link href="/about" className="nav-link" onClick={handleOnClick}>
                About
              </Link>
            </li>
            <li className="nav-item nav-list-item" onClick={handleOnClick}>
              <Link className="nav-link" href={"/#importanceOfCounseling"}>
                Importance of counseling
              </Link>
            </li>
            <li className="nav-item nav-list-item" onClick={handleOnClick}>
              <Link className="nav-link" href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item cta nav-list-item" onClick={handleOnClick}>
              <Link href="/studentInfo" className="nav-link">
                <span>Get started</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
