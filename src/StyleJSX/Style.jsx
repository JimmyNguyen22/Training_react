import React, { Component } from "react";
import style from "./Style.module.css";
export default class Style extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="h3">Style</h3>
        <p className="text-red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
          expedita laboriosam saepe asperiores recusandae tempore illo inventore
          esse nostrum optio cum, sint ipsam numquam ducimus cumque unde
          assumenda sit.
        </p>
        <h3 className={`p-2 bg-success   ${style["text-blue"]}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          molestiae sit magnam ad iste tempore obcaecati inventore reiciendis
          quidem delectus ipsam quos fuga odit nostrum, numquam hic, nemo
          possimus?
        </h3>
        <div
          style={{
            color: "red",
            background: `url(https://picsum.photos/200/200)`,
            height: 500,
            backgroundRepeat: "no-repeat",
          }}
        >
          Hello oto
        </div>
      </div>
    );
  }
}
