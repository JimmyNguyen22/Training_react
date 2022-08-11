import React, { Component } from "react";

const data = [
  { id: 1, name: "Red car", price: 1000, img: "./img/red-car.jpg" },
  {
    id: 2,
    name: "Black car",
    price: 1000,
    img: "./img/black-car.jpg",
  },
  {
    id: 3,
    name: "Silver car",
    price: 1000,
    img: "./img/silver-car.jpg",
  },
  {
    id: 4,
    name: "Steel car",
    price: 1000,
    img: "./img/steel-car.jpg",
  },
];

export default class RenderWithMap extends Component {
  renderProduct = () => {
    // c1 [{},{}] => [ <tr></tr>,<tr></tr>] c2
    // const arrTrJSX = [];
    // for (let i = 0; i < data.length; i++) {
    //   // Mỗi lần duyệt lấy ra 1 object
    //   let prod = data[i];
    //   let tr = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} width={70} alt="..." />
    //       </td>
    //     </tr>
    //   );
    //   // Đưa vào mảng arrTrJSX
    //   arrTrJSX.push(tr);
    // }
    // return arrTrJSX;

    // Cách 2 dùng map
    return data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} width={60} alt="..." />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Render Table Product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
