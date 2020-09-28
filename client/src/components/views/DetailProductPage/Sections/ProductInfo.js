import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductInfo(props) {
  const user = useSelector((state) => state.user);
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {" "}
            {Product.description}
          </Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />

        <Link to="/login">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="large"
              shape="round"
              type="danger"
              onClick={addToCarthandler}
            >
              Please Login to Add to Cart
            </Button>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {" "}
            {Product.description}
          </Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            shape="round"
            type="danger"
            onClick={addToCarthandler}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
