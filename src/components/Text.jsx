import "./Text.css";
import { Input } from "./Input";
import logo from "../images/logo.svg";
import { useState } from "react";

export const Text = () => {
  return (
    <div className="text">
      <section className="mainText">
        <img className="logo" src={logo} alt="Base Apparel's logo" />
        <div className="imageMobile"></div>
        <h1>
          We're <span className="bold">coming soon</span>
        </h1>
        <p className="paragraph">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Input />
      </section>
    </div>
  );
};
