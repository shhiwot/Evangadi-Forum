/* eslint-disable no-unused-vars */

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={classes.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={classes.footer__brand}>
                <Link to="/">
                  <img
                    src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
                    alt="Evangadi Logo"
                  />
                </Link>
                <div className={classes.social__Container}>
                  <div className={classes.social__logo}>
                    <Link
                      to="https://www.facebook.com/evangaditech"
                      target="_blank"
                    >
                      <FaFacebookF className={classes.logo_wrapper} />
                    </Link>
                  </div>
                  <div className={classes.social__logo}>
                    <Link to="https://www.instagram.com/evangaditech/">
                      <FaInstagram className={classes.logo_wrapper} />
                    </Link>
                  </div>
                  <div className={classes.social__logo}>
                    <Link
                      to="https://www.youtube.com/@EvangadiTech"
                      target="_blank"
                    >
                      <FaYoutube className={classes.logo_wrapper} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer_links">
                <h3 style={{ color: "white" }}>Useful links</h3>
                <div>
                  <div>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(213, 213, 213, 0.6)",
                      }}
                      to="/"
                    >
                      How it works
                    </Link>
                  </div>
                  <div>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(213, 213, 213, 0.6)",
                      }}
                      to="/"
                    >
                      Terms of service
                    </Link>
                  </div>
                  <div>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgba(213, 213, 213, 0.6)",
                      }}
                      to="/"
                    >
                      Privacy policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={classes.footer__info}>
                <h2>Contact Info</h2>
                <ul>
                  <li>
                    <Link to="/">Evangadi Networks</Link>
                  </li>
                  <li>
                    <Link to="/">support@evangadi.com</Link>
                  </li>
                  <li>
                    <Link to="/">+1202386-2702</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
