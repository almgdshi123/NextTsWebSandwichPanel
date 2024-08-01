"use client";
import React, { useRef, useState } from "react";
import "./requestQuote.css";
import ServiceProductForm from "./SelectData";
import emailjs from "@emailjs/browser";


export default function RequestQuote() {
    const form = useRef<HTMLFormElement>(null);
    const [done, setDone] = useState<boolean>(false);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm(
            "service_m3o322r",
            "template_80kc4sm",
            form.current,
            "g6Iv19twE6sc8t1ZC"
          )
          .then(
            (result) => {
              console.log(result.text);
              form.current?.reset();
              setDone(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    };
  return (
    <div className="request-quote">
      <h1> املأ النموذج لتحصل على عرضك الخاص!</h1>
      <div className="modal">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="banner"></div>
          <label className="label-title">
            استكشف عروضنا المميزة لمنتجات الساندوتش بانل
          </label>
          <p className="description-request">
            الآن خصومات كبيرة بسبب الافتتاح المرتقب لمقرنا الجديد{" "}
          </p>
          <div className="modal--body">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="to_name"
                  required
                  placeholder="الاسم"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  name="to_email"
                  placeholder="البريد الالكتروني"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="رقم الهاتف"
                />
              </div>
            </div>

            <div className="col">
          <ServiceProductForm/>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  placeholder="الكمية"
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="العنوان"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="الرسالة"
                ></textarea>
              </div>
            </div>
          </div>
          <span>{done && "شكرا لك على تواصلك "}</span>

          <div className="modal--footer">
            <label className="price">
              <sup>$</sup>0<sub>السعر</sub>
            </label>
            <button className="upgrade-btn">تواصل معنا </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
