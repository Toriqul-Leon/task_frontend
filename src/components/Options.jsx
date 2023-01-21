import React from "react";
import { useState } from "react";
import { data } from "../utils/data";
import "./options.css";

const Options = () => {
  const [isChecked, setIsChecked] = useState(false);

  const HandleIsChecked = () => {
    // check if on
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="formContainer">
      <h2>
        Please enter your name and pick the Sectors you are currently involved
        in
      </h2>
      <form onChange={handleOnChange}>
        <label htmlFor="">
          <span> Name:</span>
          <input type="text" />
        </label>
        <select className="selectContainer" size="25">
          <option className="parentOption" value="">
            Manufacturing
          </option>
          {data?.manufacturing?.map((item, index) => {
            console.log(item);
            return (
              <>
                <option className="mainOptions" key={index} value={item.value}>
                  {item.label}
                </option>

                {item?.foodAndBeverage?.map((subItem) => {
                  return (
                    <>
                      <option className="subParentOption" value="">
                        {subItem?.sub?.label}
                      </option>
                      <option
                        className="subItem"
                        key={subItem.value}
                        value={subItem.value}
                      >
                        {subItem.label}
                      </option>
                    </>
                  );
                })}
              </>
            );
          })}
        </select>
        {/* agree checkbox */}
        <label htmlFor="">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={HandleIsChecked}
          />
          <span> Agree to terms</span>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Options;
