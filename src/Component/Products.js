import React, { useEffect, useState } from "react";
import "./Styles/business.css";
import axios from "axios";
import moment from "moment";

const Products = () => {
  const [product, setProduct] = useState([{}]);
  const [obj, setObj] = useState({});

  useEffect(() => {
    productDetails();
  }, []);

  const productDetails = () => {
    axios
      .get(
        "https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco"
      )
      .then((resp) => {
        setProduct(resp.data.products);
        setObj(resp.data);
      })
      .catch((err) => err);
  };
  return (
    <div>
      {product.map((produts) => {
        return (
          <div className="product-items">
            <div className="row">
              <div className="col-lg-2">
                <img src={produts.picUrl} alt="" className="product-img" />
              </div>
              <div className="col-lg-7">
                <div className="product-description">
                  <div className="mandi-name">
                    {produts.cmdtyStdName} Mandi Rates
                  </div>
                  <div className="mandi-address">
                    Yeshwantpura Mandi,Bengalure Karnataka
                  </div>
                  <div className="mandi-date">
                    {moment(obj.createdAt).format("DD/MM/YYYY")}
                  </div>
                  <div className="mandi-price">
                    {" "}
                    &#x20B9;
                    {
                      produts.posts[0].computed.highestAvgPriceVarietyGrade
                        .maxPrice
                    }
                    -
                    {
                      produts.posts[0].computed.highestAvgPriceVarietyGrade
                        .minPrice
                    }{" "}
                    1kg
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dot-log">
                  <span class="fa-solid fa-ellipsis-vertical"></span>
                </div>
                <div className="date-upadte">
                  updated at :{moment(obj.updatedAt).format("HH:mm")}
                </div>
              </div>
            </div>
            <div className="horizonatl-line">
              <hr />
            </div>

            <div className="button-groups">
              <button className="btn-share">
                <span class="fa-brands fa-whatsapp mx-2 "></span>
                <span>share</span>
              </button>
              <button className="btn-interested">
                <span class="fa-brands fa-whatsapp mx-2"></span>
                <span>Interested</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
