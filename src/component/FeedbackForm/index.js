// FeedbackForm.js
import React from "react";
import FormInput from "../FormInput";

function FeedbackForm(props) {
  const { formData, setFormData, errors, setErrors } = props;
  console.log(props, "checkdata here");
  return (
    <form className="w-[50%] h-[55%] bg-[#111111] box-border p-4 border-1 rounded-md flex flex-col justify-between items-center shadow-[box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;]">
      <div className="w-full flex justify-between items-center pt-2 cursor-pointer">
        <FormInput
          label="First Name"
          placeholder="Richa"
          errorMessage="We need your First Name."
        />
        <FormInput
          label="Last Name"
          placeholder="Singh"
          errorMessage="We need your Last Name."
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <FormInput
          label="Enter Your Email"
          placeholder="exmample@gmail.com"
          errorMessage="We need your Email."
          fullWidth={true}
        />
        <FormInput
          label=" Share your Feedback"
          fullWidth={true}
          errorMessage="We need your Feedback."
        />
      </div>
      <button className="w-[100%] bg-green-300 p-2 mt-2 font-bold text-lg text-white cursor-pointer rounded-md">
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
