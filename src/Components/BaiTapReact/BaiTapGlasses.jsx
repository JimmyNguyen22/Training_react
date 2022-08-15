import React, { Component } from "react";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light gucci square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light dior square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light prada square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light fendi square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light red square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light yellow square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class BaiTapGlasses extends Component {
  state = {
    img: "./img/glassesImage/v9.png",
    name: "FENDI F4300",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderGlasses = () => {
    return data.map((glasses, index) => {
      return (
        <div
          className="col-3 m-3 border "
          key={index}
          onClick={() => {
            this.setState({
              img: glasses.url,
              name: glasses.name,
              desc: glasses.desc,
            });
          }}
        >
          <img src={glasses.url} width={100} alt="..." />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container m-5">
        <div className="row align-items-center">
          <div className="col-6 text-center position-relative">
            <img src="./img/glassesImage/model.jpg" alt="..." width={200} />
            <img
              src={this.state.img}
              className="position-absolute"
              style={{ right: "17.5rem", top: "4rem" }}
              width={100}
              alt="..."
            />
            <h5>{this.state.name}</h5>
            <p className="container w-50">{this.state.desc}</p>
          </div>
          <div className="col-6 row justify-content-between text-center p-2  bg-light">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
