import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from "formik";

const buttonStyle = {
  color: "gold",
  fundingicons: false,
  label: "checkout",
  shape: "rect",
  size: "responsive",
  tagline: false,
};

const PaypalButton = (props) => {
  const {submitForm, setSubmitting, isValid, isSubmitting} = props;
  
  const createOrderOrBillingAgreement = async () => {
    const values = await submitForm(); // submit will call api with form values and inject _paypal_token into the form values

    return new Promise((resolve, reject) => {
      if (isValid) {
        setSubmitting(true);
        resolve(values._paypal_token);
      } else {
        setSubmitting(false);
        reject('Paypal token is invalid');
      }
    })
  };

  const onApprove = () => {
    // do something on success
  };

  const paypal = window["paypal"];
  if (!paypal) {
    return null;
  }

  const Button = paypal.Buttons.driver("react", { React, ReactDOM });

  return (
    <div>
      <div style={isSubmitting ? { display: "none" } : {}}>
        <Button
          commit
          env="sandbox"
          createBillingAgreement={createOrderOrBillingAgreement}
          onApprove={onApprove}
          onCancel={() => setSubmitting(false)}
          onError={() => setSubmitting(false)}
          style={buttonStyle}
        />
      </div>
    </div>
  );
}

export default withFormik({
  initialValues: {_paypal_token: null},
  handleSubmit: (_, formik) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // formik.setValues({ _paypal_token: "fake_paypal_token" });
        formik.setSubmitting(false);
        resolve({ _paypal_token: "fake_paypal_token" });
      }, 3000);
    })
  }
})(PaypalButton);
