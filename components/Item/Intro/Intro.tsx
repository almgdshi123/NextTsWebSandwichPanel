"use client";
import React from "react";
import "./Intro.css";

const Intro = ({ txtone, txttwo, txtthree, txtfour, txtfive }) => {
  return (
    <div className="Intro" id="Intro">
      {txtone || txttwo || txtthree || txtfour ? (
        <div className="i-left">
          <div className="i-name">
            {txtone && <h2 className="txtone">{txtone}</h2>}
            {txttwo && <h2 className="txttwo">{txttwo}</h2>}
            {(txtthree || txtfour) && (
              <div className="txtthree">
                {txtthree && (
                  <p>
                    {txtthree}
                  </p>
                )}
                   <br />
                   <p>
                   {txtfour}
                   </p>
              
              </div>
            )}
          </div>
        </div>
      ) : null}

      {txtfive === null ? null : (
        <div className="i-right">
          <ul>
            {txtfive.map((item, index) => (
              <li key={index}>
              <h2 className="inline-heading ">{item.title}</h2>  :<p  className="inline-heading "> {item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Intro;
