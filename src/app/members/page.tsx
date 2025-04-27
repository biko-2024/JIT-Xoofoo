"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  universityId: z
    .string()
    .min(3, { message: "University ID must be at least 3 characters." }),
  department: z.string().min(1, { message: "Please select your department." }),
  gender: z.enum(["male", "female"], { message: "Please select your gender." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  origin: z
    .string()
    .min(2, { message: "Please let us know where you are from." }),
  participations: z
    .array(z.string())
    .min(1, { message: "Please select at least one participation area." }),
});

const departments = [
  "Freshman and Non-Institute Courses",
  "pre-engineering",
  "Computer Science",
  "Information Science",
  "Information Technology",
  "Software Engineering",
  "Electrical Engineering",
  "Biomedical Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Economics",
  "Medicine",
  "Law",
  "Other",
];

const participationOptions = [
  { id: "kutaa-mana-galmee", label: "Kutaa mana galmee" },
  { id: "kutaa-faaruu", label: "Kutaa Faaruu" },
  { id: "kutaa-midiyaa", label: "Kutaa Miidiyaa" },
  { id: "kutaa-gochagarii", label: "Kutaa Gocha Gaarii" },
  { id: "kutaa-misomaa", label: "Kutaa Misoomaa" },
  { id: "kutaa-barumsaa", label: "Kutaa Barumsaa" },
  { id: "kutaa-ogumma", label: "Kutaa Ogummaa" },
  { id: "kutaa-miseensaa", label: "Kutaa Miseensaa" },
  { id: "kutaa-to'annaa", label: "Kutaa To'annaa" },
  { id: "kutaa-qabeenyaa", label: "Kutaa Qabeenyaa" },
  { id: "kutaa-baachii", label: "Kutaa baachii" },
  
];

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = "7775092891:AAFaGhHTmjvO_oyN0Fa2z9XT_--B6-KXeDk";
// Using the user's personal chat ID
const TELEGRAM_CHAT_ID = "1790327982";

// Function to send message to Telegram
const sendToTelegram = async (message: string) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.description || "Failed to send message to Telegram");
    }
    return true;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
};

// Format member data for Telegram message
const formatMemberDataForTelegram = (data: z.infer<typeof formSchema>) => {
  const participationLabels = data.participations
    .map((id) => {
      const option = participationOptions.find((opt) => opt.id === id);
      return option ? option.label : id;
    })
    .join(", ");

  return `🆕 <b>New Member Registration</b>\n\n<b>Name:</b> ${data.firstName} ${data.lastName}\n<b>University ID:</b> ${data.universityId}\n<b>Department:</b> ${data.department}\n<b>Gender:</b> ${data.gender === "male" ? "Male" : "Female"}\n<b>Phone:</b> ${data.phoneNumber}\n<b>Origin:</b> ${data.origin}\n<b>Participation Areas:</b> ${participationLabels}\n\n<i>Submitted at: ${new Date().toLocaleString()}</i>`;
};

export default function MembersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      universityId: "",
      department: "",
      gender: undefined,
      phoneNumber: "",
      origin: "",
      participations: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      console.log("Form data:", values);

      // Format data for Telegram
      const telegramMessage = formatMemberDataForTelegram(values);

      // Send to Telegram
      const telegramSuccess = await sendToTelegram(telegramMessage);

      if (!telegramSuccess) {
        throw new Error("Failed to send data to Telegram");
      }

      // Show success message and reset form
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "There was an error submitting your registration. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Member Registration</h1>
          <p className="mt-2 text-muted-foreground">
            Join our community by filling out the form below.
          </p>
        </div>

        {isSuccess ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-xl text-green-600">
                Registration Successful!
              </CardTitle>
              <CardDescription className="text-center">
                Thank you for registering with JIT Xoofoo W/Q/GIYOORGISII.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                Your registration has been submitted successfully. We will
                contact you soon.
              </p>
              <Button onClick={() => setIsSuccess(false)}>
                Register Another Member
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Please fill out all the required information below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitError && (
                <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                  {submitError}
                </div>
              )}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="universityId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>University ID</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your university ID"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departments.map((department) => (
                                <SelectItem key={department} value={department}>
                                  {department}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-x-8"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Male
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Female
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="origin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Where are you from?</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your hometown/region"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="participations"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Participation Options</FormLabel>
                          <FormDescription>
                            Select the areas you would like to participate in.
                          </FormDescription>
                        </div>
                        {participationOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="participations"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              option.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
