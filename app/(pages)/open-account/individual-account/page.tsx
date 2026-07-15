/* // app/account-opening/page.tsx
"use client";
import React, { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(1); // Step state
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    otherNames: "",
    dateOfBirth: "",
    gender: "",
    stateOfOrigin: "",
    lga: "",
    contactAddress: "",
    phoneNumber: "",
    emailAddress: "",
    bankName: "",
    bvn: "",
    accountName: "",
    accountNumber: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Next and Back navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Account Opening Form</h1>

      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Page;

// Step 1 Component: Personal Information
const Step1 = ({ formData, handleChange, nextStep }: any) => (
  <form>
    <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
    <div className="mb-4">
      <label className="block font-medium">Surname</label>
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Other Names</label>
      <input
        type="text"
        name="otherNames"
        value={formData.otherNames}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Date of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Gender</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <button
      type="button"
      onClick={nextStep}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Next
    </button>
  </form>
);

// Step 2 Component: Contact Information
const Step2 = ({ formData, handleChange, nextStep, prevStep }: any) => (
  <form>
    <h2 className="text-xl font-semibold mb-4">Step 2: Contact Information</h2>
    <div className="mb-4">
      <label className="block font-medium">Contact Address</label>
      <input
        type="text"
        name="contactAddress"
        value={formData.contactAddress}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Email Address</label>
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={prevStep}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  </form>
);

// Step 3 Component: Bank Details
const Step3 = ({ formData, handleChange, prevStep, handleSubmit }: any) => (
  <form onSubmit={handleSubmit}>
    <h2 className="text-xl font-semibold mb-4">Step 3: Bank Details</h2>
    <div className="mb-4">
      <label className="block font-medium">Bank Name</label>
      <input
        type="text"
        name="bankName"
        value={formData.bankName}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">BVN</label>
      <input
        type="text"
        name="bvn"
        value={formData.bvn}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Account Name</label>
      <input
        type="text"
        name="accountName"
        value={formData.accountName}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium">Account Number</label>
      <input
        type="text"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={prevStep}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  </form>
);
 */

// app/(pages)/open-account/individual-account/page.tsx

export const dynamic = "force-dynamic";
import React from "react";
import IndividualAccountClientSide from "@/app/sections/individual-account-client-side";

const page = () => {
  return (
    <>
      <IndividualAccountClientSide />
    </>
  );
};

export default page;
