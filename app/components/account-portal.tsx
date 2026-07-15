/* "use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const phoneNumberSchema = z.object({
  telephoneNumber: z.string().regex(/^\d{11}$/, {
    message: "Telephone number must be 11 digits.",
  }),
});

const AccountPortal = () => {
  const form = useForm<z.infer<typeof phoneNumberSchema>>({
    resolver: zodResolver(phoneNumberSchema),
    defaultValues: {
      telephoneNumber: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof phoneNumberSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" flex h-full py-45 justify-left items-center px-5 lg:px-10 xl:px-20">
      <div className="w-full h-full flex justify-center items-center text-[#444444]">
        <div className="md:p-6 p-4 flex flex-col gap-3 rounded shadow bg-[#f8f8f8] border-gray-50">
          <div>
            <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-lg text-[#444444] relative">
              Let's Create your Account
            </h3>
            <p className="text-[14px] text-[#444444] pt-3">
              Welcome to Assetium! What type of account do you want to open?
            </p>
          </div>
          <div className="flex my-3 p-2 rounded bg-[#cecece]">
            <div className="w-full p-1 hover:cursor-pointer">
              <p className="font-semibold text-sm pl-3">Corporate Account</p>
            </div>
            <div className="w-full p-1 bg-white rounded hover:cursor-pointer">
              <p className="font-semibold text-sm pl-3">Indiviual Account</p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="telephoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] text-medium text-[#444444] pt-3">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-sm"
                          placeholder="+234"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="text-[8px]" />
                    </FormItem>
                  )}
                />
                <Button
                  className="text-xs md:text-sm w-full text-background px-5 border-none uppercase"
                  variant={"default"}
                >
                  Contiune
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AccountPortal;
 */

"use client";

import React, { useState } from "react";
import IndividualPortal from "@/app/components/individual-portal";
import CorporatePortal from "@/app/components/corporate-portal";
import KiddiesPortal from "./kiddies-portal";

const AccountPortal = () => {
  const [accountType, setAccountType] = useState<
    "kiddies" | "individual" | "corporate" | null
  >("kiddies");

  return (
    <div className="flex h-full py-30 md:py-45 justify-left items-center px-5 lg:px-10 xl:px-20">
      <div className="w-full h-full flex justify-center items-center text-[#444444]">
        <div className="md:p-6 p-4 flex flex-col gap-3 rounded shadow bg-[#f8f8f8] border-gray-50">
          <div>
            <h3 className="font-semibold leading-tight tracking-tighter text-title-sm xsm:text-title-lg text-[#444444] relative">
              Let us create your account
            </h3>
            <p className="xsm:text-[14px] text-[#444444] pt-3 text-xs">
              Welcome to Assetium! What type of account do you want to open?
            </p>
          </div>
          <div className="flex my-3 p-2 rounded bg-[#EEEEEE]">
            <div
              className={`w-full p-1 ${
                accountType === "kiddies" ? "bg-[#f8f8f8] rounded" : ""
              } hover:cursor-pointer`}
              onClick={() => setAccountType("kiddies")}
            >
              <p className="font-semibold text-xs xsm:text-center xsm:text-sm xsm:pl-0 pl-1">
                Kiddies
              </p>
            </div>
            <div
              className={`w-full p-1 ${
                accountType === "individual" ? "bg-[#f8f8f8] rounded" : ""
              } hover:cursor-pointer`}
              onClick={() => setAccountType("individual")}
            >
              <p className="font-semibold text-xs xsm:text-center xsm:text-sm xsm:pl-0 pl-1">
                Individual
              </p>
            </div>
            <div
              className={`w-full p-1 ${
                accountType === "corporate" ? "bg-[#f8f8f8] rounded" : ""
              } hover:cursor-pointer`}
              onClick={() => setAccountType("corporate")}
            >
              <p className="font-semibold text-xs xsm:text-center xsm:text-sm xsm:pl-0 pl-1">
                Corporate
              </p>
            </div>
          </div>

          {/* Render the appropriate form based on account type */}
          {accountType === "kiddies" && <KiddiesPortal />}
          {accountType === "individual" && <IndividualPortal />}
          {accountType === "corporate" && <CorporatePortal />}
        </div>
      </div>
    </div>
  );
};

export default AccountPortal;
