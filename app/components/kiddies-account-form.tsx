"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { kiddiesAccountSchema } from "@/lib/schema";
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

export function KiddiesAccountForm({ phoneNumber }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof kiddiesAccountSchema>>({
    resolver: zodResolver(kiddiesAccountSchema),
    defaultValues: {
      title: "",
      dob: "",
      gender: "",
      surname: "",
      otherNames: "",
      contactAddress: "",
      stateOfOrigin: "",
      lga: "",
      emailAddress: "",
      nameOfSchool: "",
      nokName: "",
      nokContactAddress: "",
      nokEmailAddress: "",
      nokRelationship: "",
      nokPhoneNumber: "",
      meansOfIdentification: "international_passport",
      idNumber: "",
      issueDate: "",
      expiryDate: "",
      politicalPerson: "No",
      politicalPersonSummary: "",
      parentBvn: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      signature: "",
      birthCertificate: "",
      proofOfAddress: "",
      recentPassport: "",
      parentIdCard: "",

      isAccountVerified: false,
      accountOpenedById: "",
      addressVerifiedById: "",
      accountOpeningAuthorisedById: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof kiddiesAccountSchema>) {
    setIsLoading(true);

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        `${BASE_URL}/api/v1/account/online-kiddies-account`,
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
  console.log(isLoading, phoneNumber);

  return (
    <>
      <div className="grid lg:grid-cols-3 ">
        <div className="w-full flex gap-6 col-span-2">
          <div className="py-10 lg:py-20 px-5 lg:pl-10 xl:pl-20 xl:pr-10 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="space-y-8 "
              >
                <div>
                  <div>
                    <div className="px-5 py-3 md:py-5 bg-[#c14511] flex">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Personal information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
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
                            name="otherNames"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Other Names
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
                            name="dob"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Date
                                  Of Birth
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder=""
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          {/* <FormField
                            control={form.control}
                            name="S"
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
                          /> */}
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
                            name="mobileNumber"
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
                            name="stateOfOrigin"
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
                            name="contactAddress"
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
                        <div className="grid grid-cols-1 gap-3">
                          <FormField
                            control={form.control}
                            name="nameOfSchool"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  Name of School
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="XYZ School"
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
                        Next Of Kin Information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div>
                          <FormField
                            control={form.control}
                            name="nokName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Next
                                  of Kin Name
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
                        </div>
                        <div className="block md:grid grid-cols-3 gap-3">
                          <FormField
                            control={form.control}
                            name="nokRelationship"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Relationship with Next of Kin
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="Grand Mother"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="nokContactAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Next
                                  of Kin Contact Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="XYZ John Street, Jigawa"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="nokEmailAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Next
                                  of Kin Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="example@gmail.com"
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
                    <div className="px-5 py-3 md:py-5 bg-[#191919]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Bank Information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div>
                          <FormField
                            control={form.control}
                            name="parentBvn"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Parent BVN
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
                                    placeholder="XYZ Mortage Bank"
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
              Open an Kiddies Account with Ease and Confidence
            </h3>
            <p className="text-[13px] md:text-base">
              Take control of your financial future. Start by creating an
              kiddies account that suits your needs, flexibility, and
              convenience every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KiddiesAccountForm;