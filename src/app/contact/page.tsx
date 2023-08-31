"use client";
import { MouseEventHandler, useState } from "react";
import { IFormFieldValue, InitialContctFormState } from "../types/stateType";
import { InputField } from "../components/InputField";

const initialState: InitialContctFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phone: {
    value: "",
    error: "",
  },
  subject: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
const ContactUs = () => {
  const [formValue, setFormValue] =
    useState<InitialContctFormState>(initialState);
  const handleFromChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => {
      return {
        ...prevFormValue,
        [name]: {
          ...(prevFormValue as any)[name],
          value: value,
          error: "",
        },
      };
    });
    // setFormValue(updatedFormValue);
  };
  const handleFormSubmit: MouseEventHandler<HTMLInputElement> = async (
    event
  ) => {
    event.preventDefault();
    let isFormValid = true;
    const updatedFormValue = { ...formValue } as {
      [key: string]: IFormFieldValue;
    };
    for (const field in updatedFormValue) {
      if (!updatedFormValue[field].value) {
        updatedFormValue[field].error = "Please enter " + field;
        isFormValid = false;
      } else {
        let shouldResetError = true;
        if (field === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(updatedFormValue.email.value)) {
            updatedFormValue.email.error = "Please enter a valid email address";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (field === "phone") {
          const phoneNumberRegex = /^\d{10}$/;
          if (!phoneNumberRegex.test(updatedFormValue.phone.value)) {
            updatedFormValue.phone.error = "Please enter a valid phone number";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (field === "message") {
          if (updatedFormValue.message.value.length > 100) {
            updatedFormValue.message.error =
              "Message should not exceed 100 characters";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (shouldResetError) {
          updatedFormValue[field].error = "";
        }
      }
    }

    if (!isFormValid) {
      setFormValue(updatedFormValue as unknown as InitialContctFormState);
      return;
    }
    const message = {
      Name: formValue.name.value,
      Email: formValue.email.value,
      Subject: formValue.subject.value,
      Phone: formValue.phone.value,
      Message: formValue.message.value,
    };
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => {
        console.log("Response received");
        setFormValue(initialState);
      })
      .catch((error) => {
        console.log("Error received", error);
      });
  };

  const divStyle = {
    backgroundImage: "url('images/contactus.png')",
    backgroundSize: "cover", // This makes the image cover the entire container
    backgroundPosition: "center", // This centers the image
    height: "16em",
  };

  return (
    <>
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="row justify-content-center mb-5">
          <div
            className="col-md-7 text-center heading-section ftco-animate"
            style={divStyle}
          >
            <h2 className="mb-4">Contact Us</h2>
          </div>
        </div>
        <div
          id="contact-us"
          style={{ marginBottom: "20px", padding: "6em 0px" }}
        >
          <section className="ftco-domain">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 ftco-animate">
                  <h2>Let's Talk - Contact Us</h2>
                  <p>
                    Please provide the required details, and we will get back to
                    you.
                  </p>
                </div>
                <div className="col-lg-7 p-5 ftco-wrap ftco-animate">
                  <form action="#" className="domain-form mb-3">
                    <div className="d-flex">
                      <div className="form-group domain-name contactus_field">
                        <InputField
                          name={"name"}
                          value={formValue.name.value}
                          onChange={handleFromChange}
                          placeholder={"Name"}
                          errorMessage={formValue.name.error}
                        />
                      </div>
                      <div className="form-group domain-name contactus_field">
                        <InputField
                          name={"email"}
                          onChange={handleFromChange}
                          placeholder={"Email"}
                          errorMessage={formValue.email.error}
                          value={formValue.email.value}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="form-group domain-name contactus_field">
                        <InputField
                          name={"phone"}
                          onChange={handleFromChange}
                          placeholder={"Phone"}
                          errorMessage={formValue.phone.error}
                          value={formValue.phone.value}
                        />
                      </div>
                      <div className="form-group domain-name contactus_field">
                        <InputField
                          name={"subject"}
                          onChange={handleFromChange}
                          placeholder={"Subject"}
                          errorMessage={formValue.subject.error}
                          value={formValue.subject.value}
                        />
                      </div>
                    </div>
                    <div
                      className="form-group domain-name contactus_field"
                      style={{ width: "97%" }}
                    >
                      <textarea
                        rows={8}
                        cols={120}
                        className="form-control "
                        placeholder="Message"
                        name="message"
                        value={formValue.message.value}
                        onChange={handleFromChange}
                      ></textarea>
                      {formValue.message.error && (
                        <span style={{ color: "#383131" }}>
                          {formValue.message.error}
                        </span>
                      )}
                    </div>
                    <div className="form-group contactus_submit">
                      <input
                        type="submit"
                        className="search-domain btn btn-primary text-center"
                        value="Submit"
                        onClick={handleFormSubmit}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
