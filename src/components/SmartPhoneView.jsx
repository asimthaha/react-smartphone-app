import React, { useEffect, useState } from "react";
import axios from "axios";
import SmartPhoneNavbar from "./SmartPhoneNavbar";

const SmartPhoneView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://api.restful-api.dev/objects").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SmartPhoneNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 card-group">
                    <div class="card mb-3">
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        {/* {value.data} &&(
                        <p>{value.data.color}</p>
                        <p>{value.data.capacity}</p> ) */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartPhoneView;
