"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { individualAccountSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
type Props = {
  phoneNumber: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export function IndividualAccountForm({ phoneNumber }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof individualAccountSchema>>({
    resolver: zodResolver(individualAccountSchema),
    defaultValues: {
      title: "not available",
      dob: "",
      gender: "",
      surname: "",
      firstName: "",
      middleName: "",
      contact_address: "",
      state_of_origin: "",
      lga: "",
      issue_date: "2012-01-26T13:51:50.417-07:00",
      mobile_number: phoneNumber,
      alternate_mobile_number: "not available",
      emailAddress: "",
      occupation: "not available",
      place_of_work: "not available",
      nok_name: "not available",
      nok_contact_address: "not available",
      nok_email_address: "not available",
      nok_phone_number: "not available",
      means_of_identification: "international_passport",
      id_number: "not available",
      expiry_date: "2012-01-26T13:51:50.417-07:00",
      political_person: false,
      political_person_summary: "not available",
      isInformationAccurate: false,
      eighteenAndAbove: false,
      iUnderstandInvestmentRisk: false,
      indemnityAgreement: false,
      bvn: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      incomeDistribution: "payout",
      jointAccountTitle: "not available",
      jointAccountDOB: "not available",
      jointAccountGender: "not available",
      jointAccountSurname: "not available",
      jointAccountMiddleName: "not available",
      jointAccountFirstName: "not available",
      jointAccountEmail: "not available",
      jointAccountPhoneNumber: "not available",
      jointAccountAlternatePhoneNumber: "not available",
      nokRelationship: "not available",
      nokAlternatePhoneNumber: "not available",
      accountHolderSignature: "not available",
      proofOfAddress: "not available",
      recentPassport: "not available",
      idCard: "not available",
      isAccountVerified: false,
      accountOpenedById: "not available",
      addressVerifiedById: "not available",
      accountOpeningAuthorisedById: "not available",
      signature: "",
      type_of_investment: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof individualAccountSchema>) {
    setIsLoading(true);

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        `${BASE_URL}/api/v1/account/online-individual-account`,
        values
      );

      // Check if the response indicates success
      if (response.status === 200 || response.status === 201) {
        // Show success notification
        toast.success("Form submitted successfully!");

        // Redirect to the home page
        router.replace("/");
      } else {
        // Handle unexpected status codes
        toast.error(`Unexpected response: ${response.status}`);
      }
    } catch (error: unknown) {
      // Handle errors (e.g., network issues, server errors)
      if (error instanceof Error) {
        // If the error is an instance of Error, you can safely access the message
        console.error("Error submitting the form:", error.message);
        toast.error(`An error occurred: ${error.message}`);
      } else {
        // If the error is not an instance of Error, handle it in a generic way
        console.error("Unknown error:", error);
        toast.error("An unknown error occurred while submitting the form.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function onError(errors: unknown) {
    console.error("Form validation errors:", errors);
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 ">
        <div className="w-full flex gap-6 col-span-2">
          <div className="py-10 lg:py-20 px-5 lg:pl-10 xl:pl-20 xl:pr-10 w-full mt-14">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="space-y-8 "
              >
                <div>
                  <div>
                    <div className="px-5 py-3 md:py-5 bg-[#c14511] fleX">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Personal information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="type_of_investment"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Type
                                  of Investment Portfolio
                                </FormLabel>
                                <FormControl>
                                  <select
                                    {...field} // Spread field props to connect with form control
                                    className="text-sm bg-red-50 my-3 md:my-0 border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#c14511] focus:border-[#c14511]"
                                  >
                                    <option value="" disabled>
                                      Select Investment Type
                                    </option>
                                    <option value="Assetium Kiddies Commodity Portfolio">
                                      Assetium Kiddies Commodity Portfolio
                                    </option>
                                    <option value="feAssetium Ethical Commodity Portfoliomale">
                                      Assetium Ethical Commodity Portfolio
                                    </option>
                                    <option value="Assetium Commodity Portfolio">
                                      Assetium Commodity Portfolio
                                    </option>
                                    <option value="  Standard Account">
                                      Standard Account
                                    </option>
                                  </select>
                                </FormControl>
                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="bvn"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Bank
                                  Verification Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="0000000000"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="block md:grid grid-cols-3 gap-3">
                          <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Surname
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="John"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  First Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Doe"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="middleName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Other Names
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Frank"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="block md:grid grid-cols-2 gap-3 ">
                          <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Date
                                  of Birth
                                </FormLabel>

                                <FormControl>
                                  <input
                                    type="date"
                                    {...field} // Spread field props to connect with form control
                                    className="border bg-red-50 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#c14511] focus:border-[#c14511]"
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Gender
                                </FormLabel>
                                <FormControl>
                                  <select
                                    {...field} // Spread field props to connect with form control
                                    className="text-sm bg-red-50 my-3 md:my-0 border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#c14511] focus:border-[#c14511]"
                                  >
                                    <option value="" disabled>
                                      Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                  </select>
                                </FormControl>
                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="px-5 py-3 md:py-5 bg-[#1A1919]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Contact Details
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div className="block md:grid grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50 my-3 md:my-0"
                                    placeholder="example@gmail.com"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="mobile_number"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  Phone Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50"
                                    placeholder="07000000000"
                                    {...field}
                                    value={field.value} // Pre-filled value
                                    readOnly // Makes the field unchangeable
                                  />
                                </FormControl>
                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="block md:grid grid-cols-2 gap-3 ">
                          <FormField
                            control={form.control}
                            name="state_of_origin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  State of Origin
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Ogun State"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lga"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Local Govt Area
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Ijebu Ode LGA"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          <FormField
                            control={form.control}
                            name="contact_address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  Contact Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Contact Address"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="px-5 py-3 md:py-5 bg-[#C14511]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Bank Information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div className="block md:grid grid-cols-3 gap-3">
                          <FormField
                            control={form.control}
                            name="bankName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Bank
                                  Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="John"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="accountName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Account Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="John Doe"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="accountNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Account Number{" "}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="0000000000"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="px-5 py-3 md:py-5 bg-[#1A1919]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Declaration
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <FormField
                          control={form.control}
                          name="signature"
                          render={({ field }) => (
                            <FormItem>
                              <div>
                                <p className="text-sm">
                                  <span className="text-[#c14511] font-bold">
                                    *
                                  </span>
                                  I certify that all the information provided by
                                  me on this application is true and complete to
                                  the best of my knowledge
                                </p>
                              </div>
                              <FormControl>
                                <Input
                                  className="text-sm bg-red-50"
                                  placeholder="Signature"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-[8px]" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <Button
                      className="text-sm md:text-base text-background border-none uppercase w-full bg-[#c14511]"
                      type="submit"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="hidden lg:block bg-[#1a1919] text-white sticky top-14 h-screen pt-3">
          <div className="py-25 md:px-8 xl:px-10">
            <p className="text-[12px] font-medium uppercase text-[#c14511]">
              Begin your financial journey today
            </p>
            <h3 className="leading-tight tracking-tighter my-3 text-title-lg">
              Open an Individual Account with Ease and Confidence
            </h3>
            <p className="text-[13px] md:text-base">
              Take control of your financial future. Start by creating an
              individual account that suits your needs, flexibility, and
              convenience every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualAccountForm;
