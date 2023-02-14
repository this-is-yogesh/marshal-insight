import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import "./App.css";
import Dropdown from "./Dropdown";

const initialValues = {
  title: "",
  customer: "",
  arr: "",
  insightheadline: "",
  insightsituation: "",
  supportingdata: "",
  impact: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container" position="relative">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  Create a <b>Customer Highlight</b> insight
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="title" className="input-label">
                      Title
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="title"
                      id="title"
                      placeholder="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? (
                      <p className="form-error">{errors.title}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="customer" className="input-label">
                      Customer
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="customer"
                      id="customer"
                      placeholder="customer"
                      value={values.customer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.customer && touched.customer ? (
                      <p className="form-error">{errors.customer}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="arr" className="input-label">
                      Annual Revenue Rate (ARR)
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="arr"
                      id="arr"
                      placeholder="Annual Revenue Rate "
                      value={values.arr}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.arr && touched.arr ? (
                      <p className="form-error">{errors.arr}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="insightheadline" className="input-label">
                      Insight Headline('The What')
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="insightheadline"
                      id="insightheadline"
                      placeholder="Insight Headline"
                      value={values.insightheadline}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.insightheadline && touched.insightheadline ? (
                      <p className="form-error">{errors.insightheadline}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="insightsituation" className="input-label">
                      Insight Situation ('The Why')
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="insightsituation"
                      id="insightsituation"
                      placeholder="Insight Situation"
                      value={values.insightsituation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.insightsituation && touched.insightsituation ? (
                      <p className="form-error">{errors.insightsituation}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="supportingdata" className="input-label">
                      Supporting Data
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="supportingdata"
                      id="supportingdata"
                      placeholder="Supporting Data"
                      value={values.supportingdata}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.supportingdata && touched.supportingdata ? (
                      <p className="form-error">{errors.supportingdata}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="impact" className="input-label">
                      Impact
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="impact"
                      id="impact"
                      placeholder="Impact"
                      value={values.impact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.impact && touched.impact ? (
                      <p className="form-error">{errors.impact}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                {/* <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                /> */}
                <p>
                  <h2 className="modal-title"> Tips :</h2>
                  <ol>
                    <li>
                      {" "}
                      You agree to waive your right to be identified as the
                      author of such content and your right to object to
                      derogatory treatment of such content.{" "}
                    </li>
                    <li>
                      {" "}
                      The total price in single figure of any good or service,
                      along with the breakup price for the good or service,
                      showing all the compulsory and voluntary charges such as
                      delivery charges, postage and handling charges, conveyance
                      charges and the applicable tax, as applicable.{" "}
                    </li>
                    <li>
                      {" "}
                      Importer and the guarantees related to the authenticity or
                      genuineness of the imported products; and. guarantees or
                      warranties applicable to such goods or services.{" "}
                    </li>
                    <li>
                      {" "}
                      All software used on this website is the property of
                      Amazon Seller Services Private Limited, its affiliates or
                      its software suppliers and is protected by India and
                      international copyright and author' rights laws.
                    </li>
                    <li>
                      {" "}
                      You acknowledge and undertake that you are accessing the
                      services on the website and transacting at your own risk
                      and are using your best and prudent judgment before
                      entering into any transactions through the website.
                    </li>
                  </ol>

                  <Dropdown />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    padding: 70px 50px;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Registration;
