'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { format } from 'date-fns'; // {{ edit_1 }}
import { CalendarIcon } from "lucide-react"
import { Toast } from "@/components/ui/toast"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { Input } from "@/components/ui/input"
// ... existing code ...
import cn from 'classnames'; // Add this line to import the classnames utility

import {onSubmitWelcome} from './_actions';
import {onSubmitPreferences} from './_actions';
// ... existing code ...
export const welcomeSchema = z.object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {message: "Last name must be at least 2 characters."}),
    dateOfBirth: z.date({required_error: 'The birthdate field is required' }),
    university: z.string(),
  })

export const preferencesSchema = z.object({
    destinationPreferences: z.string().array(),
    budgetRange: z.string().array(),
    travelInterests: z.string().array(),
})

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(2);


  const welcomeForm = useForm<z.infer<typeof welcomeSchema>>({
    resolver: zodResolver(welcomeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
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

 

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {/* ... header and footer */}

      <main>
        {currentStep === 1 && (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-4xl font-bold pb-12'>Personal Information</h1>
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
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value || ''}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
              control={welcomeForm.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York University" {...field} />
                  </FormControl>
                  <FormDescription>
                    The university you are currently attending.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="secondary" type="submit" onClick={() => {handleNextStep}}>Save</Button>
          </form>
        </Form>
        </div>
        )}

        {currentStep === 2 && (
          <div className='flex flex-col justify-center items-center w-full h-screen'>
          <h1 className='text-4xl font-bold pb-12'>Travel Preferences</h1>
        <Form {...preferencesForm}>
        <form onSubmit={preferencesForm.handleSubmit(onSubmitPreferences)} className="space-y-8">
          <FormField
            control={preferencesForm.control}
            name="destinationPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What city are you currently in?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. New York City" {...field} />
                </FormControl>
                <FormDescription>
                  
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={preferencesForm.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value[0]}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a price range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="$0-$49">0-$49</SelectItem>
                  <SelectItem value="$50-$149">0-$49</SelectItem>
                  <SelectItem value="$150+">0-$49</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This is your estimate of how much you would like to spend on the trip.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
            control={preferencesForm.control}
            name="travelInterests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What do you like to do for fun?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Mountain-biking" {...field} />
                </FormControl>
                <FormDescription>
                  Things you would take a weekend to do solo or with friends.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit" onClick={() => {setCurrentStep(currentStep + 1)}}>Submit</Button>
        </form>
      </Form>
      </div>
        )}

        {/* ... other steps */}
      </main>
    </div>
  );
};

