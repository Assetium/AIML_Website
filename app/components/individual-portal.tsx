"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./loader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import bcrypt from "bcryptjs";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// Encryption
const salt = bcrypt.genSaltSync(10);

// Zod schema for phone number validation
const individualPortalSchema = z.object({
  telephoneNumber: z.string().regex(/^\d{11}$/, {
    message: "Telephone number must be 11 digits.",
  }),
  isTelephoneNumberValid: z.boolean(),
});

const IndividualPortal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof individualPortalSchema>>({
    resolver: zodResolver(individualPortalSchema),
    defaultValues: {
      telephoneNumber: "",
      isTelephoneNumberValid: false,
    },
  });

  // Watch fields for dynamic validation
  // const telephoneNumber = form.watch("telephoneNumber");
  // const isTelephoneNumberValid = form.watch("isTelephoneNumberValid");

  // Derived state for button disabled status
  // const isDisabled =
  //   !/^\d{11}$/.test(telephoneNumber) || !isTelephoneNumberValid;

  const onSubmit = async (values: z.infer<typeof individualPortalSchema>) => {
    setIsLoading(true);

    try {
      // Hash the phone number
      const hash = bcrypt.hashSync(values.telephoneNumber, salt);

      // Store both phone number and hash securely
      Cookies.set("phoneNumber", values.telephoneNumber);
      Cookies.set("phoneNumberHash", hash);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect to a new route with the hash
      await router.push(
        `/open-account/individual-account?id=${encodeURIComponent(hash)}`
      );
    } catch (error: unknown) {
      // Display error message
      if (error instanceof Error) {
        toast.error(error.message || "An unexpected error occurred.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <Loader />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="telephoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium text-[#444444] pt-3">
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

              <FormField
                control={form.control}
                name="isTelephoneNumberValid"
                render={({ field }) => (
                  <FormItem>
                    <div className="gap-3  flex items-center h-full pt-3 md:pt-0 my-3 md:m-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <Label
                        htmlFor={field.name}
                        className="text-[#c14511] font-normal text-xs"
                      >
                        I confirm this is my valid phone number
                      </Label>
                    </div>
                    <FormMessage className="text-[8px]" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="text-xs md:text-sm w-full text-background px-5 border-none uppercase"
                variant={"default"}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default IndividualPortal;
