"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { JobApplicationFormSchema } from "@/lib/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof JobApplicationFormSchema>>({
    resolver: zodResolver(JobApplicationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      otherName: "",
      emailAddress: "",
      contactAddress: "",
      telephoneNumber: "",
      positionAppliedFor: "",
      presentlyEmployed: false,
      desiredPosition: "",
      startingSalary: "",
      currentEmployer: "",
      employerAddress: "",
      employerTelephoneNumber: "",
      employerEmailAddress: "",
      signature: "",
      yearsOfExperience: "",
      resume: null,
    },
  });

  async function onSubmit(values: z.infer<typeof JobApplicationFormSchema>) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${values.firstName} ${values.lastName}${
            values.otherName ? " " + values.otherName : ""
          }`,
          email_address: values.emailAddress,
          telephone_number: values.telephoneNumber,
          contact_address: values.contactAddress,
          position_applied_for: values.positionAppliedFor,
          desired_position: values.desiredPosition,
          years_of_experience: values.yearsOfExperience,
          presently_employed: values.presentlyEmployed ? "Yes" : "No",
          starting_salary: values.startingSalary,
          current_employer: values.currentEmployer,
          employer_address: values.employerAddress,
          employer_telephone: values.employerTelephoneNumber,
          employer_email: values.employerEmailAddress,
          to_email: "hr@assetium.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success(
        "Application submitted successfully! We\u2019ll be in touch soon."
      );
      form.reset();
    } catch {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.error("Validation errors:", errors);
        })}
        className="space-y-8"
      >
        <div className=" flex flex-col md:gap-5 text-[#444444]">
          <h3 className="text-title-sm text-[#c14511] tracking-tighter font-medium">
            Basic Information
          </h3>
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <div className="block md:grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  First Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50  my-3 md:my-0"
                      placeholder="First Name"
                      {...field}
                    />
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
                  {/*  <FormLabel className="text-base text-[#444444] font-medium">
                  Last Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50  my-3 md:my-0"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherName"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Other Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50  my-3 md:my-0"
                      placeholder="Other Name"
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
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Email Address
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephoneNumber"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Email Address
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Telephone Number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="contactAddress"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Contact Address
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="w-full h-32 border rounded-md text-left p-3 resize-none text-sm align-top bg-red-50 "
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

        <div className="flex flex-col gap-5 text-[#444444] pt-9">
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <h3 className="text-title-sm text-[#c14511] tracking-tighter font-medium">
            Job Details
          </h3>
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <div className="block md:grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="yearsOfExperience"
              render={({ field }) => (
                <FormItem>
                  {/*  <FormLabel className="text-base text-[#444444] font-medium">
                  Last Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Years Of Experience"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desiredPosition"
              render={({ field }) => (
                <FormItem>
                  {/*  <FormLabel className="text-base text-[#444444] font-medium">
                  Last Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Desired Position"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="presentlyEmployed"
              render={({ field }) => (
                <FormItem>
                  <div className="gap-2 flex items-center h-full pt-3 md:pt-0 m-3 md:m-0">
                    <Label htmlFor={field.name} className="text-[#444444]">
                      Presently Employed
                    </Label>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
          <div className="block md:grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="startingSalary"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Email Address
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Starting Salary"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="positionAppliedFor"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  First Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50"
                      placeholder="Position Applied For"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-[#444444] pt-9">
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <h3 className="text-title-sm text-[#c14511] tracking-tighter font-medium">
            Current Employment
          </h3>
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <div className="block md:grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="currentEmployer"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  First Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Current Employer Name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employerEmailAddress"
              render={({ field }) => (
                <FormItem>
                  {/*  <FormLabel className="text-base text-[#444444] font-medium">
                  Last Name
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50 my-3 md:my-0"
                      placeholder="Employer Email Address"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employerTelephoneNumber"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-base text-[#444444] font-medium">
                  Email Address
                </FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50"
                      placeholder="Employer Telephone Number"
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
              name="employerAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full h-32 border rounded-md text-left p-3 resize-none text-sm bg-red-50"
                      placeholder="Employer Address"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-[#444444] pt-9">
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <h3 className="text-title-sm text-[#c14511] tracking-tighter font-medium">
            Resume
          </h3>
          <div className="w-full h-[0.5px] bg-[#dadada]" />

          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        console.log("Uploaded file:", file);
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-[#444444] pt-9">
          <div className="w-full h-[0.5px] bg-[#dadada]" />
          <h3 className="text-title-sm text-[#c14511] tracking-tighter font-medium">
            Declaration
          </h3>
          <div className="w-full h-[0.5px] bg-[#dadada]" />

          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="signature"
              render={({ field }) => (
                <FormItem>
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-2">
                    <p className="text-sm text-[#444444] leading-relaxed">
                      <span className="text-[#c14511] font-bold">* </span>I
                      certify that all the information provided by me on this
                      application is true and complete to the best of my
                      knowledge. By typing{" "}
                      <span className="font-bold text-[#c14511]">&ldquo;signature&rdquo;</span>{" "}
                      below, I agree to this declaration.
                    </p>
                  </div>
                  <FormControl>
                    <Input
                      className="text-sm bg-red-50"
                      placeholder='Type "signature" to agree'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[8px]" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <Button
            className="text-sm md:text-base text-background border-none uppercase w-full"
            variant={"default"}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default JobApplicationForm;
