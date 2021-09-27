import React from "react";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <section class="footer">
      <ul>
        <li class="contactmeitem">
          <a href="https://www.linkedin.com/in/derekbeckford1/" target="_blank">
            <GrLinkedin />
          </a>
        </li>

        <li class="contactmeitem">
          <a href="https://github.com/derekBeckford" target="_blank">
            <GoMarkGithub />
          </a>
        </li>

        <li class="contactmeitem">
          <a href="mailto:dbeck1207@gmail.com">
            <GoMail />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
