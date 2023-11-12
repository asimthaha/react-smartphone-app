import React from "react";
import SmartPhoneNavbar from "./SmartPhoneNavbar";

const SmartPhoneAdd = () => {
  return (
    <>
      <SmartPhoneNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <label htmlFor="" className="form-label">
                  Color
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <label htmlFor="" className="form-label">
                  Capacity
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartPhoneAdd;
