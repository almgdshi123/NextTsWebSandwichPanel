import "./content.css";

import { database } from "../dataContent";
import React from "react";
import Link from "next/link";

export default function EndContent({ content }) {
  return (
    <div className="subjcet-container">
      <div className="poular-box">
        <div className="text-center">
          <p> مواضيع ذات صلة</p>
        </div>
        <div className="subject-box grid">
          {content &&
            content.map((item) => <DropdownItem key={item} number={item} />)}
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <div className="card">
      <div className="header">
        <div className="image">
          <img
            src={database[props.number].image}
            alt={database[props.number].altimage}
            loading="lazy"
          />
        </div>
      </div>
      <div className="info">
        <a
          href={
            database[props.number].type === "section"
              ? `/product-sandwich/${database[props.number].id}/`
              : database[props.number].type === "category"
              ? `/${database[props.number].url}`
              : `/product-sandwich/${database[props.number].href}/${
                  database[props.number].id
                }`
          }
          rel="noopener noreferrer"
          className="block"
          title={database[props.number].alt}
        >
          <span className="title ">{database[props.number].description} </span>
        </a>
        <p className="description">
          {database[props.number].content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>{" "}
      </div>
    </div>
  );
}
