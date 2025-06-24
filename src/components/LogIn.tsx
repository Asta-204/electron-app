"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Eye, EyeOff } from "lucide-react"

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
import { useState } from "react"
import { Card, CardContent } from "./ui/card"

const formSchema = z.object({
  email: z.string().min(1, {
    message: "le champs est vide",
  }).email("email incorrect"),

  password: z.string().min(8, {
    message: "le mot de passe est court",
  }),
})

export default function LogIn() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-[350px]">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                    <FormControl>
                      <Input
                        type='email' placeholder="kekeli@gmail.com" {...field}
                        className="border-0 focus-visible:ring-0 shadow-none "
                      />
                    </FormControl>
                  </div>
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
                        type={showPassword ? "text" : "password"} placeholder="*****" {...field}
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
            <Button variant="link">Mot de passe oublié</Button>
      </CardContent>
    </Card>
  )
}