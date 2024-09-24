'use client'
import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const welcomeSchema = z.object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {message: "Last name must be at least 2 characters."}),
    dateOfBirth: z.string().date(),
    university: z.string(),
  })

const preferencesSchema = z.object({
    destinationPreferences: z.string().array(),
    budgetRange: z.string().array(),
    travelInterests: z.string().array(),
})

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);


  const welcomeForm = useForm<z.infer<typeof welcomeSchema>>({
    resolver: zodResolver(welcomeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      university: "",

    },
  })

  const preferencesForm = useForm<z.infer<typeof preferencesSchema>>({
    resolver: zodResolver(welcomeSchema),
    defaultValues: {
      destinationPreferences: [],
      budgetRange: [],
      travelInterests: []

    },
  })

  function onSubmitWelcome(values: z.infer<typeof welcomeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  function onSubmitPreferences(values: z.infer<typeof preferencesSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {/* ... header and footer */}

      <main>
        {currentStep === 1 && (
          <Form {...welcomeForm}>
          <form onSubmit={welcomeForm.handleSubmit(onSubmitWelcome)} className="space-y-8">
            <FormField
              control={welcomeForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your first name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={welcomeForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={welcomeForm.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of birth</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={welcomeForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        )}

        {currentStep === 2 && (
          <form>
            <h2>Step 2: Profile Setup</h2>
            {/* User profile setup form */}
            <button onClick={handleNextStep}>Next</button>
          </form>
        )}

        {/* ... other steps */}
      </main>
    </div>
  );
};