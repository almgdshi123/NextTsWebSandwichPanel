import "./content.css";
import { dataContent } from "../dataContent";
import Link from "next/link";

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
          <Link href={`/product-sandwich/${item.href}`} legacyBehavior>
            <a className="main-color" title={item.alt}>
              المزيد من التفاصيل
            </a>
          </Link>
        ) : null}
      </div>
      <div className="subject-box grid">
        {item.data.map((data, index) => (
          <div className="card" key={index}>
            <div className="header">
              <div className="image">
                <img src={data.image} alt={data.altimage} loading="lazy" />
                <Link href={`/product-sandwich/${item.href}`} legacyBehavior>
                  <a
                    className="tag"
                   title ={item.alt + "" + data.altimage}
                  >
                    {item.title}
                  </a>
                </Link>
              </div>
              <div className="date">
                <span>{data.price}</span>
                <button aria-label="مشاركة" className="menu-btn">
                  <i className="ri-share-line"></i>
                </button>
              </div>
            </div>
            <div className="info">
              <Link href={`/product-sandwich/${item.href}/${data.id}`} legacyBehavior>
              <a
                rel="noopener noreferrer"
                className="block"
                title={data.alt}
              >
                <span className="title ">{data.description} </span>
              </a>
              </Link>
              <p className="description">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
     
     {
  dataContent.map((item, index) => (
    <section key={index} id={item.href}>
      {props.title === "home" || item.href === props.title
        ? renderContent(item, index)
        : null}
    </section>
  ))
}

    </div>
  );
}
