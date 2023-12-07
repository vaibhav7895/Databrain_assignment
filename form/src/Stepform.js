import React, { useState } from "react";
import FormDataDisplay from "./FormDataDisplay";
import "./stepform.css";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    dob: "",
    password: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        errors.firstName = "First Name is required";
      }
      if (!formData.lastName.trim()) {
        errors.lastName = "Last Name is required";
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      }
      if (!formData.dob.trim()) {
        errors.dob = "Date of Birth is required";
      }
    } else if (currentStep === 2) {
      if (!formData.street.trim()) {
        errors.street = "Street is required";
      }
      if (!formData.city.trim()) {
        errors.city = "City is required";
      }
      if (!formData.state.trim()) {
        errors.state = "State is required";
      }
      if (!formData.zipcode.trim()) {
        errors.zipcode = "Zip Code is required";
      } else if (formData.zipcode.length < 6) {
        errors.zipcode = "Zip Code must be at least 6 numbers";
      }
    } else if (currentStep === 3) {
      if (!formData.cardNumber.trim()) {
        errors.cardNumber = "Card Number is required";
      } else if (formData.cardNumber.length !== 16) {
        errors.cardNumber = "Card Number must be 16 numbers";
      }

      if (!formData.expirationDate.trim()) {
        errors.expirationDate = "Expiration Date is required";
      } else {
        const currentDate = new Date();
        const expirationDate = new Date(formData.expirationDate);

        if (expirationDate <= currentDate) {
          errors.expirationDate = "Expiration Date must be in the future";
        }
      }

      if (!formData.cvv.trim()) {
        errors.cvv = "CVV is required";
      } else if (formData.cvv.length !== 3) {
        errors.cvv = "CVV must be 3 numbers";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = () => {
    if (validateForm()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <span className="error">{errors.firstName}</span>
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <span className="error">{errors.lastName}</span>
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="error">{errors.password}</span>
            <br />
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <span className="error">{errors.dob}</span>
            <br />
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            <span className="error">{errors.street}</span>
            <br />
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <span className="error">{errors.city}</span>
            <br />
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <span className="error">{errors.state}</span>
            <br />
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
            />
            <span className="error">{errors.zipcode}</span>
            <br />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <label>Card Number:</label>
            <input
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            <span className="error">{errors.cardNumber}</span>
            <br />
            <label>Expiration Date:</label>
            <input
              type="date"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
            />
            <span className="error">{errors.expirationDate}</span>
            <br />
            <label>CVV:</label>
            <input
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
            <span className="error">{errors.cvv}</span>
            <br />
            <button onClick={prevStep}>Previous</button>
            <button onClick={submitForm}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1>Multi-Step Form</h1>
      {submitted ? (
        <FormDataDisplay formData={formData} />
      ) : (
        <div className="form-step">{renderStep()}</div>
      )}
    </div>
  );
};
