import "./content.css";

import { dataContent } from "../dataContent";
import Link from "next/link";
import React from "react";
import ShareButton from "./ShareContent";

export default function Content({ title }) {
  return (
    <div>
      <DropdownItem title={title}></DropdownItem>
    </div>
  );
}

function DropdownItem(props) {
  const renderContent = (item, index) => (
    <div className="subjcet-container" key={index}>
      <div className="poular-box">
        <h2>{item.title}</h2>
        {props.title === "home" ? (
          <a
            className="main-color"
            title={item.alt}
            href={`/product-sandwich/${item.href}/`}
          >
            المزيد من التفاصيل
          </a>
        ) : null}
      </div>
      <div className="subject-box grid">
        {item.data.map((data, index) => (
          <div className="card" key={index}>
            <div className="header">
              <div className="image">
                <img src={data.image} alt={data.altimage} loading="lazy" />
                <a
                  className="tag"
                  title={item.alt + "" + data.altimage}
                  href={`/product-sandwich/${item.href}/`}
                >
                  {item.title}
                </a>
              </div>
              <div className="date">
                <span>{data.price}</span>{" "}
                <ShareButton
                  title={data.title}
                  description={data.description}
                  href={item.href}
                  id={data.id}
                />
              </div>
            </div>
            <div className="info">
              <a
                rel="noopener noreferrer"
                className="block"
                href={
                  data.type === "section"
                    ? `/product-sandwich/${data.id}/`
                    : data.type === "category"
                    ? `/${data.url}`
                    : `/product-sandwich/${item.href}/${data.id}`
                }
                title={data.alt}
              >
                <span className="title "><strong>{data.description} </strong></span>
              </a>
              <p className="description">
                {data.content.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {dataContent.map((item, index) =>
        item.status === true || props.title != "home" ? (
          <section key={index} id={item.href}>
            {props.title === "home" || item.href === props.title
              ? renderContent(item, index)
              : null}
          </section>
        ) : null
      )}
    </div>
  );
}
