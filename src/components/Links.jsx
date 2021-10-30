import React from "react";

export default function Links({ links }) {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li className={link.active ? "active" : ""}>
            <a href="#">
              <link.icon />
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
