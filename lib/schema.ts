"use client";

import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Email is not valid",
  }),

  subject: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const JobApplicationFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  otherName: z.string().min(2, {
    message: "Other Name must be at least 2 characters.",
  }),

  emailAddress: z.string().email({
    message: "Email is not valid",
  }),

  contactAddress: z.string().min(5, {
    message: "Incorrect Contact Address",
  }),

  telephoneNumber: z.string().regex(/^\d{11}$/, {
    message: "Telephone number must be 11 digits.",
  }),

  yearsOfExperience: z.string().refine((value) => /^\d+$/.test(value), {
    message: "Years of experience must be a number",
  }),

  positionAppliedFor: z
    .string()
    .min(5, { message: " Applied Position must be at least 5 characters." }),

  presentlyEmployed: z.boolean(),

  desiredPosition: z
    .string()
    .min(5, { message: "Desired Position must be at least 5 characters." }),

  startingSalary: z
    .string()
    .min(4, { message: "Invalid Salary" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Sstarting Salary must be a number",
    }),

  currentEmployer: z
    .string()
    .min(3, { message: "Current Employer must be at least 3 characters." }),

  employerAddress: z
    .string()
    .min(3, { message: "Employer Address must be at least 3 characters." }),

  employerTelephoneNumber: z.string().regex(/^\d{11}$/, {
    message: "Telephone number must be 11 digits.",
  }),

  employerEmailAddress: z.string().email({
    message: "Email is not valid",
  }),

  signature: z
    .string()
    .refine((val) => val.toLowerCase() === "signature", {
      message: 'Please type "signature" exactly to confirm your agreement.',
    }),

  resume: z
    .instanceof(File)
    .refine((file) => file.type === "application/pdf", {
      message: "Resume must be a PDF file.",
    })

    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "Resume must be less than 2MB.",
    })

    .nullable(),
});

export const individualAccountSchema = z.object({
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters long.",
  }),
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters long.",
  }),
  otherNames: z
    .string()
    .min(2, {
      message: "Other Names must be at least 2 characters long.",
    })
    .optional(),
  dob: z.string().min(2, {
    message: "Date of Birth is required.",
  }),
  gender: z.string().min(2, {
    message: "Gender is required.",
  }),
  type_of_investment: z.string().min(2, {
    message: "Type of Investment is required.",
  }),
  state_of_origin: z.string().min(2, {
    message: "State of Origin is required.",
  }),
  lga: z.string().optional(),
  contact_address: z.string().min(5, {
    message: "Contact Address must be at least 5 characters long.",
  }),
  mobile_number: z.string().regex(/^\d{11}$/, {
    message: "Mobile Number must be exactly 11 digits.",
  }),
  emailAddress: z.string().email({
    message: "Invalid Email Address format.",
  }),
  issue_date: z.string(),
  bankName: z.string().min(2, {
    message: "Bank Name is required.",
  }),
  bvn: z.string().regex(/^\d{11}$/, {
    message: "BVN must be exactly 11 digits.",
  }),
  accountName: z.string().min(2, {
    message: "Account Name is required.",
  }),
  signature: z.string().min(2, {
    message: "Signature is required.",
  }),
  accountNumber: z.string().regex(/^\d{10}$/, {
    message: "Account Number must be exactly 10 digits.",
  }),
  middleName: z.string().min(2, {
    message: "Middle Name is required.",
  }),

  title: z.string(),
  alternate_mobile_number: z.string(),
  occupation: z.string(),
  place_of_work: z.string(),
  nok_name: z.string(),
  nok_contact_address: z.string(),
  nok_email_address: z.string(),
  nok_phone_number: z.string(),
  means_of_identification: z.enum([
    "international_passport",
    "national_id",
    "drivers_license",
    "voters_card",
  ]),
  id_number: z.string(),
  expiry_date: z.string(),
  political_person: z.boolean(),
  political_person_summary: z.string(),
  isInformationAccurate: z.boolean(),
  eighteenAndAbove: z.boolean(),
  iUnderstandInvestmentRisk: z.boolean(),
  indemnityAgreement: z.boolean(),

  incomeDistribution: z.string(),
  jointAccountTitle: z.string(),
  jointAccountDOB: z.string(),
  jointAccountGender: z.string(),
  jointAccountSurname: z.string(),
  jointAccountMiddleName: z.string(),
  jointAccountFirstName: z.string(),
  jointAccountEmail: z.string(),
  jointAccountPhoneNumber: z.string(),
  jointAccountAlternatePhoneNumber: z.string(),
  nokRelationship: z.string(),
  nokAlternatePhoneNumber: z.string(),
  accountHolderSignature: z.string(),
  proofOfAddress: z.string(),
  recentPassport: z.string(),
  idCard: z.string(),
  isAccountVerified: z.boolean(),
  accountOpenedById: z.string(),
  addressVerifiedById: z.string(),
  accountOpeningAuthorisedById: z.string(),
});

export const corporateAccountSchema = z.object({
  typeOfInvestment: z.string().min(3, {
    message: "Type of investment must be at least 3 characters long.",
  }),

  companyName: z
    .string()
    .min(3, { message: "Company name must be at least 3 characters long." }),
  rcNumber: z
    .string()
    .regex(/^\d+$/, { message: "RC Number must be numeric." })
    .min(3, { message: "RC Number must be at least 3 digits." }),
  dateOfRegistration: z
    .string()
    .min(2, { message: "Date of registration must be provided." }),
  operatingAddress: z.string().min(2, {
    message: "Operating address must be at least 2 characters long.",
  }),

  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits." }),
  emailAddress: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  natureOfBusiness: z.string().min(3, {
    message: "Nature of business must be at least 3 characters long.",
  }),

  SCUMLNumber: z
    .string()
    .regex(/^\d+$/, { message: "SCUML Number must be numeric." })
    .min(3, { message: "SCUML Number must be at least 3 digits." }),
  tinNumber: z
    .string()
    .regex(/^\d+$/, { message: "TIN must be numeric." })
    .min(3, { message: "TIN must be at least 3 digits." }),
  BVN: z
    .string()
    .regex(/^\d+$/, { message: "BVN must be numeric." })
    .min(3, { message: "BVN must be at least 3 digits." }),

  accountName: z
    .string()
    .min(2, { message: "Account name must be at least 2 characters long." }),
  accountNumber: z
    .string()
    .regex(/^\d+$/, { message: "Account number must be numeric." })
    .min(3, { message: "Account number must be at least 3 digits." }),
  bankName: z
    .string()
    .min(2, { message: "Bank name must be at least 2 characters long." }),

  signature: z
    .string()
    .min(3, { message: "Signature must be at least 3 characters long." }),

  // executives: z.array(
  //   z.object({
  //     firstName: z.string().min(2, {
  //       message: "First Name must be at least 2 characters long.",
  //     }),

  //     title: z.string().min(2, {
  //       message: "First Name must be at least 2 characters long.",
  //     }),

  //     surname: z.string().min(2, {
  //       message: "Surname must be at least 2 characters long.",
  //     }),

  //     emailAddress: z.string().email(),

  //     bvn: z.number(),

  //     dob: z.string().min(2, {
  //       message: "Surname must be at least 2 characters long.",
  //     }),

  //     gender: z.string().min(2, {
  //       message: "Surname must be at least 2 characters long.",
  //     }),

  //     idNumber: z.string().min(2, {
  //       message: "Surname must be at least 2 characters long.",
  //     }),

  //     phoneNumber: z.string(),

  //     authorizedSignatoryMeansOfIdentity: z.string(),

  //     isPoliticalExposedPerson: z.boolean(),

  //     lga: z.string(),

  //     middlename: z.string(),

  //     isPoliticalExposedPersonDetails: z.string().optional(),

  //     state: z.string(),
  //     placeOfWork: z.string(),
  //     residentialAddress: z.string(),
  //     occupation: z.string(),
  //     signatureClass: z.string(),
  //   })
  // ),

  stateOfRegistration: z.string(),

  alternatePhoneNumber: z.string(),

  mAndateType: z.string(),
  execTitle: z.string(),
  execDob: z.string(),
  execGender: z.string(),
  memorandom: z.string(),
  SCUMLCertificate: z.string(),
  certificateOfIncorporation: z.string().optional(),
  recentPassport: z.string(),
  proofOfAddress: z.string(),
  meansOfIdentification: z.string(),
  execSurname: z.string(),
  execFirstname: z.string(),
  execPhoneNumber: z.string(),
  execBvn: z.string(),
  execResidentialAddress: z.string(),
  execEmailAddress: z.string(),
  execIdType: z.string(),
  execState: z.string(),
  execLga: z.string(),
  execOccupation: z.string(),
  execPlaceOfWork: z.string(),
  isExecPoliticallyExposed: z.string(),
  execSignature: z.string(),
  accountSignatory: z.string(),
  accountSignatory2: z.string(),
  accountMandate: z.string(),
});

export const kiddiesAccountSchema = z.object({
  title: z.string(),
  dob: z.string().min(2, {
    message: "Date of Birth is required.",
  }),
  gender: z.string().min(2, {
    message: "Gender is required.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters long.",
  }),
  otherNames: z
    .string()
    .min(2, {
      message: "Other Names must be at least 2 characters long.",
    })
    .optional(),
  contactAddress: z.string().min(5, {
    message: "Contact Address must be at least 5 characters long.",
  }),
  stateOfOrigin: z.string().min(2, {
    message: "State of Origin is required.",
  }),
  lga: z.string().optional(),
  mobileNumber: z.string().regex(/^\d{11}$/, {
    message: "Mobile Number must be exactly 11 digits.",
  }),
  emailAddress: z.string().email({
    message: "Invalid Email Address format.",
  }),
  nameOfSchool: z.string().min(5, {
    message: "Name of School must be at least 5 characters long.",
  }),
  nokName: z.string().min(2, {
    message: "Next of Kin's Names must be at least 2 characters long.",
  }),
  nokContactAddress: z.string().min(2, {
    message: "Next of Kin's Address is invalid",
  }),
  nokEmailAddress: z.string().email({
    message: "Next of Kin's Address is invalid",
  }),
  nokRelationship: z.string().min(2, {
    message: "Next of Kin's Relationship must be at least 2 characters long.",
  }),
  nokPhoneNumber: z.string().regex(/^\d{11}$/, {
    message: "Mobile Number must be exactly 11 digits.",
  }),

  meansOfIdentification: z.enum([
    "international_passport",
    "national_id",
    "drivers_license",
    "voters_card",
  ]),
  idNumber: z.string(),
  expiryDate: z.string(),
  issueDate: z.string(),
  politicalPerson: z.enum(["Yes", "No"]),
  politicalPersonSummary: z.string(),

  parentBvn: z.string().regex(/^\d{11}$/, {
    message: "BVN must be exactly 11 digits.",
  }),
  bankName: z.string().min(2, {
    message: "Bank Name is required.",
  }),
  accountNumber: z.string().regex(/^\d{10}$/, {
    message: "Invalid Account Number",
  }),
  accountName: z.string().min(2, {
    message: "Account Name is required.",
  }),

  signature: z.string().min(2, {
    message: "Signature is required.",
  }),
  proofOfAddress: z.string(),
  recentPassport: z.string(),
  parentIdCard: z.string(),
  birthCertificate: z.string(),

  isAccountVerified: z.boolean(),
  accountOpenedById: z.string(),
  addressVerifiedById: z.string(),
  accountOpeningAuthorisedById: z.string(),
});
