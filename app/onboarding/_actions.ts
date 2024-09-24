'use server';
import {z} from 'zod';
import { welcomeSchema } from './page';
import { preferencesSchema } from './page';

export async function onSubmitWelcome(values: z.infer<typeof welcomeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    console.log(values)
  }

export async function onSubmitPreferences(values: z.infer<typeof preferencesSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

// export default {
//     onSubmitPreferences,
//     onSubmitWelcome
// }