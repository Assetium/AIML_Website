"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { corporateAccountSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
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
import axios from "axios";

type Props = {
  emailAddress: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export function CorporateAccountForm({ emailAddress }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof corporateAccountSchema>>({
    resolver: zodResolver(corporateAccountSchema),
    defaultValues: {
      typeOfInvestment: "",
      companyName: "",
      rcNumber: "",
      dateOfRegistration: "",
      operatingAddress: "",
      phoneNumber: "",
      emailAddress: emailAddress,
      natureOfBusiness: "",
      SCUMLNumber: "",
      tinNumber: "",
      BVN: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      signature: "",
      stateOfRegistration: "not available",
      alternatePhoneNumber: "not available",
      mAndateType: "not available",
      execTitle: "not available",
      execDob: "not available",
      execGender: "not available",
      memorandom: "not available",
      SCUMLCertificate: " not available",
      certificateOfIncorporation: "not available",
      recentPassport: "not available",
      proofOfAddress: "not available",
      meansOfIdentification: "not available",
      execSurname: "not available",
      execFirstname: "not available",
      execPhoneNumber: "not available",
      execResidentialAddress: "not available",
      execEmailAddress: "not available",
      execIdType: "not available",
      execState: "not available",
      execLga: "not available",
      execOccupation: "not available",
      execPlaceOfWork: "not available",
      isExecPoliticallyExposed: " not available",
      execSignature: "not available",
      accountSignatory: "not available",
      accountSignatory2: "not available",
      accountMandate: "not available",
      execBvn: "not available",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof corporateAccountSchema>) {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/account/online-corperate-account
`,
        values
      );

      console.log(values);

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!");

        router.replace("/");
      } else {
        toast.error(`Unexpected response: " ${response.status}`);
      }
    } catch (error: unknown) {
      // Handle errors (e.g., network issues, server errors)
      if (error instanceof Error) {
        // If the error is an instance of Error, you can safely access the message
        console.error("Error submitting the form:", error);
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

  function onError(errors: FieldValues) {
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
                    <div className="px-5 py-3 md:py-5 bg-[#c14511]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Company information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="typeOfInvestment"
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
                                    <option
                                      value=""
                                      disabled
                                      className="text-xs"
                                    >
                                      Select Investment Type
                                    </option>
                                    <option
                                      className="text-xs"
                                      value="Assetium Kiddies Commodity Portfolio"
                                    >
                                      Assetium Kiddies Commodity Portfolio
                                    </option>
                                    <option
                                      className="text-xs"
                                      value="Assetium Ethical Commodity Portfolio"
                                    >
                                      Assetium Ethical Commodity Portfolio
                                    </option>
                                    <option
                                      className="text-xs"
                                      value="Assetium Commodity Portfolio"
                                    >
                                      Assetium Commodity Portfolio
                                    </option>
                                    <option
                                      className="text-xs"
                                      value="Standard AccountPortal"
                                    >
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
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>{" "}
                                  Company Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50  my-3 md:my-0"
                                    placeholder="XYZ Limited"
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
                            name="dateOfRegistration"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span> Date
                                  of Company Registration
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
                            name="natureOfBusiness"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">*</span>
                                  Nature of Business
                                </FormLabel>
                                <Input
                                  className="text-xs bg-red-50  my-3 md:my-0"
                                  placeholder="Microfinance Bank"
                                  {...field}
                                />
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
                                  Company Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50 my-3 md:my-0"
                                    placeholder="example@gmail.com"
                                    {...field}
                                    value={field.value} // Pre-filled value
                                    readOnly // Makes the field unchangeable
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phoneNumber"
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
                            name="operatingAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  Company Operating Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-xs bg-red-50 my-3 md:my-0"
                                    placeholder="123, Address Street. Ikeja."
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
                    <div className="px-5 py-3 md:py-5 bg-[#c14511]">
                      <h3 className="text-title-sm text-white tracking-tighter font-medium">
                        Regulatory Information
                      </h3>
                    </div>
                    <div>
                      <div className="flex flex-col gap-7 my-4 p-1">
                        <div className="block md:grid grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name="SCUMLNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  SCUML Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50 my-3 md:my-0"
                                    placeholder="0000000"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="rcNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  RC Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50"
                                    placeholder="07000000000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="block md:grid grid-cols-2 gap-3">
                          <FormField
                            control={form.control}
                            name="tinNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  TIN
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50 my-3 md:my-0"
                                    placeholder="000000"
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage className="text-[8px]" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="BVN"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs text-[#444444] font-medium">
                                  <span className="text-[#c14511]">* </span>
                                  BVN
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="text-sm bg-red-50"
                                    placeholder="000000"
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
                    <div className="px-5 py-3 md:py-5 bg-[#1a1919]">
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
                    <div className="px-5 py-3 md:py-5 bg-[#c14511]">
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
              Open a Corporate Account with Ease and Confidence
            </h3>
            <p className="text-[13px] md:text-base">
              Take control of your financial future. Start by creating an
              Corporate account that suits your business needs, flexibility, and
              convenience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CorporateAccountForm;
