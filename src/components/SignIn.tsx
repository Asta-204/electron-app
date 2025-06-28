"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";

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

const formSchema = z.object({
  email: z.string()
    .min(6, { message: "minimum 6 caractères." })
    .email("email invalide."),

  password: z.string()
    .min(8, { message: "minimum 8 caractères." }).trim(),

  confirmPassword: z.string()
    .min(8, { message: "minimum 8 caractères." }).trim(),

}).refine((data) => data.password === data.confirmPassword, { message: "Les mots de passe ne correspondent pas", path: ["confirmPassword"], });



export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="kekeli@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"} placeholder="******" {...field}
                    className="border-0 focus-visible:ring-0 shadow-none"
                  />
                </FormControl>
                <div onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
              <FormDescription>
                Entrer un mot de passe sûr.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>confirm Password</FormLabel>
              <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                <FormControl>
                  <Input
                    type={showConfirmPassword ? "text" : "password"} placeholder="******" {...field}
                    className="border-0 focus-visible:ring-0 shadow-none"
                  />
                </FormControl>
                <div onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
              <FormDescription>
                Confirmer le mot de passe.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="items-center">
        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}