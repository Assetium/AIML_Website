"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./loader";
import { toast } from "react-toastify";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import bcrypt from "bcryptjs";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Encryption
const salt = bcrypt.genSaltSync(10);

// Zod schema for phone number validation
const emailAddressSchema = z.object({
  emailAddress: z.string().email({
    message: "Email is not valid",
  }),
  isEmailAddressValid: z.boolean(),
});

const CorporatePortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof emailAddressSchema>>({
    resolver: zodResolver(emailAddressSchema),
    defaultValues: {
      emailAddress: "",
      isEmailAddressValid: false,
    },
  });

  // Watch fields for dynamic validation
  // const emailAddress = form.watch("emailAddress");
  // const isEmailAddressValid = form.watch("isEmailAddressValid");

  // Derived state for button disabled status
  // const isDisabled =
  //   !/^\S+@\S+\.\S+$/.test(emailAddress) || !isEmailAddressValid;

  const onSubmit = async (values: z.infer<typeof emailAddressSchema>) => {
    setIsLoading(true);

    try {
      // Hash the email address (it seems you are hashing the email)
      const hash = bcrypt.hashSync(values.emailAddress, salt);

      // Store both email address and hash securely in cookies
      Cookies.set("emailAddress", values.emailAddress);
      Cookies.set("emailAddressHash", hash);

      // Simulate a delay (if necessary)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to the next route
      await router.push(
        `/open-account/corporate-account?id=${encodeURIComponent(hash)}`
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
    <>
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
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-medium text-[#444444] pt-3">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-sm"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[8px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isEmailAddressValid"
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
                          I confirm this is a valid email address
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
    </>
  );
};

export default CorporatePortal;
