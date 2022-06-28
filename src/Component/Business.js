import React, { useState, useEffect } from "react";
import "./Styles/business.css";
import Product from "../Component/Products";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

const Business = () => {
  const [mandi, setMandi] = useState({});

  useEffect(() => {
    mandiDetail();
  }, []);

  const mandiDetail = () => {
    axios
      .get(
        "https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco"
      )
      .then((resp) => {
        setMandi(resp.data.business);
      })
      .catch((err) => err);
  };

  return (
    <div>
      <div className="business-container">
        <Tabs defaultActiveKey="first" className="tab-design">
          <Tab eventKey="first" title="Business">
            <div className="business-details">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-agent">Commission Agent</div>
                </div>
              </div>
              <div className="detail-of-market">
                <div>
                  <span>Market Name</span>
                  <span className="location">{mandi.marketStdName}</span>
                </div>
                <div>
                  <span>Film Name</span>
                  <span className="shop-detail">{mandi.firmName}</span>
                </div>
                <div>
                  <span>Shop Number</span>
                  <span className="shop-number">{mandi.mandiShopnum}</span>
                </div>
              </div>
              <div className="product-detail">Products</div>
              <div>
                <Product />
              </div>
              <div className="footer-content">
                <span className="color-primary">
                  join the agricultural community
                </span>
                <button className="btn btn-primary p-1">
                  DownLoad gramoday
                </button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="second" title="Review">
            <div className="footer-content">
              <span className="color-primary">
                join the agricultural community
              </span>
              <button className="btn btn-primary p-1">DownLoad gramoday</button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Business;
