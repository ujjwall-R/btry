import React, { useState } from "react";
import { startDAction } from "../../actions/startDataAction";
import "./GetStarted.css";
import axios from "axios";
// import "./styleHome.css";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    contact: "",
    budget: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(formData);
    const data = await startDAction(formData);

    // console.log(data);
  };
  // const [fullname, setFullname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Request a Quote Today | Magicarnival</title>
      <link rel="stylesheet" href="styles/styleHome.css" />
      <link rel="stylesheet" href="styles/Form.css" />
      <div>
        <header-component />
      </div>
      {/*<form action="" method="" id="form">
  <label for="firstname" class="formtext">First Name</label><br>
  <input type="text" placeholder="Enter your first name" class="boxes" required><br><br>
  <label for="lastname" class="formtext">Last Name</label><br>
  <input type="text" placeholder="Enter your last name" class="boxes" required><br><br>
  <label for="email" class="formtext">Email ID</label><br>
  <input type="email" placeholder="Enter your email ID" class="boxes" required><br><br>
  <label for="contact" class="formtext">Contact Number</label><br>
  <input type="text" placeholder="Enter your contact number" class="boxes" required><br><br>
  <label for="budget" class="formtext">Enter your budget</label><br>
  <select required>
      <option value="">Enter your budget</option>
      <option value="1">₹30,000 - ₹1,00,000</option>
      <option value="2">₹1,00,000 - ₹5,00,000</option>
      <option value="3">₹5,00,000 - ₹10,00,000</option>
      <option value="4">+ ₹10,00,000</option>
  </select>
  <br><br>
  <input type="submit">
</form>*/}
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close" />
                <div className="screen-header-button maximize" />
                <div className="screen-header-button minimize" />
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact" style={{ fontSize: "10px" }}>
                  CONTACT INFO : +91 7979033873
                </div>
              </div>
              <form onSubmit={submitHandler}>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        type="text"
                        className="app-form-control"
                        placeholder="first name"
                        name="fname"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        type="text"
                        className="app-form-control"
                        placeholder="last name"
                        name="lname"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        type="email"
                        className="app-form-control"
                        placeholder="Email ID"
                        name="email"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact: e.target.value,
                          })
                        }
                        value={formData.contact}
                        type="text"
                        className="app-form-control"
                        placeholder="Contact No."
                        name="contact"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        className="app-form-control"
                        placeholder="Describe your project"
                      />
                    </div>
                    <br />
                    <br />
                    <div>
                      <label
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            budget: e.target.value,
                          })
                        }
                        htmlFor="budget"
                        className="formtext"
                      >
                        Enter your budget
                      </label>
                      <br />
                      <br />
                      <br />
                      <select required>
                        <option value>Enter your budget</option>
                        <option value={1}>₹30,000 - ₹1,00,000</option>
                        <option value={2}>₹1,00,000 - ₹5,00,000</option>
                        <option value={3}>₹5,00,000 - ₹10,00,000</option>
                        <option value={4}>+ ₹10,00,000</option>
                      </select>
                    </div>
                    <br />
                    <br />
                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
