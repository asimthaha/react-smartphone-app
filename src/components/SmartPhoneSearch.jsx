import React from "react";
import SmartPhoneNavbar from "./SmartPhoneNavbar";

const SmartPhoneSearch = () => {
  return (
    <>
      <SmartPhoneNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12">
                <label htmlFor="" className="form-label">
                  Search Country
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12">
                <button className="btn btn-success">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartPhoneSearch;
