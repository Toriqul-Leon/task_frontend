import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSelectOptions from "../../hooks/useSelectOptions";
import User from "../User/User";
// import { data } from "../utils/data";
import "./options.css";

const Options = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [options] = useSelectOptions(`${process.env.REACT_APP_URL}/formData`);

  const HandleIsChecked = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const handleOnClick = (e) => {
    setShowUser(false);
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      sectors: Array.from(e.target.querySelectorAll("option:checked")).map(
        (el) => el.value
      ),
      agreeToTerms: isChecked,
    };

    // get user then put user
    fetch(`${process.env.REACT_APP_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const id = data[0]._id;
          fetch(`${process.env.REACT_APP_URL}/user/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                setShowUser(true);
                toast.success("User Info Updated");
              }
            });
        }
      });
  };

  return (
    <section className="container">
      {" "}
      <div className="formContainer">
        <div className="formCard">
          <h2>
            Please enter your name <br /> and pick the Sectors you are currently
            involved in.
          </h2>
          <form onSubmit={handleOnClick}>
            <label className="label" htmlFor="">
              <span> Name:</span>
              <input required className="nameInput" name="name" type="text" />
            </label>
            <label className="sectorsContainer" htmlFor="">
              <label /> <span> Sectors:</span>
              <select
                required
                className="selectContainer"
                size="10"
                multiple=" "
              >
                {options?.manufacturing?.map((item, index) => {
                  // console.log(item.machinery);
                  return (
                    <>
                      {item.style === "bold" ? (
                        <option className="parentOption" value={item.value}>
                          {item.label}
                        </option>
                      ) : (
                        <option className="subParentOption" value={item.value}>
                          {item.label}
                        </option>
                      )}

                      {item?.foodAndBeverage?.map((subItem) => {
                        return (
                          <>
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
                      {item?.furniture?.map((subItem) => {
                        return (
                          <>
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
                      {item?.machinery?.map((subItem) => {
                        return (
                          <>
                            <option
                              className="subItem"
                              key={subItem.value}
                              value={subItem.value}
                            >
                              {subItem.label}
                            </option>
                            {subItem?.maritime?.map((subSubItem) => {
                              return (
                                <>
                                  <option
                                    className="subSubItem"
                                    key={subSubItem.value}
                                    value={subSubItem.value}
                                  >
                                    {subSubItem.label}
                                  </option>
                                </>
                              );
                            })}
                          </>
                        );
                      })}
                      {item?.metalWorking?.map((subItem) => {
                        return (
                          <>
                            <option
                              className="subItem"
                              key={subItem.value}
                              value={subItem.value}
                            >
                              {subItem.label}
                            </option>
                            {subItem?.metalWorks?.map((subSubItem) => {
                              return (
                                <>
                                  <option
                                    className="subSubItem"
                                    key={subSubItem.value}
                                    value={subSubItem.value}
                                  >
                                    {subSubItem.label}
                                  </option>
                                </>
                              );
                            })}
                          </>
                        );
                      })}
                      {item?.plasticAndRubber?.map((subItem) => {
                        return (
                          <>
                            <option
                              className="subItem"
                              key={subItem.value}
                              value={subItem.value}
                            >
                              {subItem.label}
                            </option>
                            {subItem?.plasticProcessingTechnology?.map(
                              (subSubItem) => {
                                return (
                                  <>
                                    <option
                                      className="subSubItem"
                                      key={subSubItem.value}
                                      value={subSubItem.value}
                                    >
                                      {subSubItem.label}
                                    </option>
                                  </>
                                );
                              }
                            )}
                          </>
                        );
                      })}
                      {item?.printing?.map((subItem) => {
                        return (
                          <>
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
                      {item?.textileAndClothing?.map((subItem) => {
                        return (
                          <>
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
                      {item?.wood?.map((subItem) => {
                        return (
                          <>
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
                {options?.other.map((item) => {
                  return (
                    <>
                      {item.style === "bold" ? (
                        <option className="parentOption" value="">
                          {item.label}
                        </option>
                      ) : (
                        <option className="subParentOption" value={item.value}>
                          {item.label}
                        </option>
                      )}
                    </>
                  );
                })}
                {options?.services.map((item) => {
                  return (
                    <>
                      {item.style === "bold" ? (
                        <option className="parentOption" value="">
                          {item.label}
                        </option>
                      ) : (
                        <option className="subParentOption" value={item.value}>
                          {item.label}
                        </option>
                      )}
                      {item?.informationTechnologyAndTelecommunications?.map(
                        (subItem) => {
                          return (
                            <>
                              <option
                                className="subItem"
                                key={subItem.value}
                                value={subItem.value}
                              >
                                {subItem.label}
                              </option>
                            </>
                          );
                        }
                      )}
                      {item?.transportAndLogistics?.map((subSubItem) => {
                        return (
                          <>
                            <option
                              className="subItem"
                              key={subSubItem.value}
                              value={subSubItem.value}
                            >
                              {subSubItem.label}
                            </option>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </select>
            </label>

            {/* agree checkbox */}
            <label>
              <input
                className="checkbox"
                required
                type="checkbox"
                checked={isChecked}
                onChange={HandleIsChecked}
              />
              <span> Agree to terms</span>
            </label>
            <button type="submit">Save</button>
            <ToastContainer />
          </form>
        </div>
      </div>
      {showUser ? <User /> : null}
    </section>
  );
};

export default Options;
