import React from "react";
import { Table } from "react-bootstrap";

const ProductList = () => {
  const products = [
    {
      imgSrc:
        "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
      name: "AirPods",
      price: "6,99 $",
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
      name: "Smart watch",
      price: "8,64 $",
    },
    {
      imgSrc:
        "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
      name: "Iphone 11 ",
      price: "150 $",
    },
  ];
  const clickMe = (productName) => {
    alert(`this product name is ${productName}`)
  }
  return (
    <div>
      <Table striped bordered hover className="container mt-2" >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Product</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {
                   products.map(elt => 
                    <tr>
                    <td><button className="info" onClick={()=>clickMe(elt.name)}>Click Me</button> </td>
                    <td>{elt.name} </td>
                    <td> <img src={elt.imgSrc}  alt="" width="200px"/></td>
                    <td> {elt.price}</td>
                    </tr>
                   )
                          
          }
         
        </tbody>
      </Table>
    </div>
  );
};
export default ProductList;
