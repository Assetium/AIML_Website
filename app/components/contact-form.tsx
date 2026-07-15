"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import axios from "axios";

export function ContactForm() {
  // const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  // async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.post(`${BASE_URL}/api/v1/contact`, values);

  //     if (response.status === 200 || response.status === 201) {
  //       toast.success("Form submitted successfully!");
  //     } else {
  //       toast.error(`Unexpected response: ${response.status}`);
  //     }
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error("Error submitting the form:", error.message);
  //       toast.error(`An error occurred: ${error.message}`);
  //     } else {
  //       console.error("Unknown error:", error);
  //       toast.error("An unknown error occurred while submitting the form.");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-[#444444] font-medium">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input className="text-sm" placeholder="John" {...field} />
                </FormControl>
                <FormMessage className="text-[8px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-[#444444] font-medium">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input className="text-sm " placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage className="text-[8px]" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-[#444444] font-medium">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="text-sm"
                  placeholder="example@yahoo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[8px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-[#444444] font-medium">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  className="text-sm"
                  placeholder="I would love to inquire about..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[8px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-[#444444] font-medium">
                Message
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full h-32 border align-top rounded-md text-left p-3 resize-none text-sm"
                  placeholder="I heard about your product via...."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[8px]" />
            </FormItem>
          )}
        />
        <Button
          type="button"
          onClick={async () => {
            // Validate with react-hook-form
            const isValid = await form.trigger();
            if (!isValid) {
              toast.error("Please fill out all required fields.");
              return;
            }

            // Build mailto
            const subject =
              form.getValues("subject").trim() || "Contact Request";
            const firstName = form.getValues("firstName").trim();
            const lastName = form.getValues("lastName").trim();
            const email = form.getValues("email").trim();
            const message = form.getValues("message").trim();

            const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

            const mailtoLink = `mailto:info@assetium.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;

            console.log("MAILTO:", mailtoLink);

            // Actually open the mail client
            window.location.href = mailtoLink;
          }}
          className="w-full text-sm md:text-base text-background border-none uppercase"
        >
          Send Email
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
