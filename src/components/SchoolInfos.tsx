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
  schoolname: z.string().min(1, {
    message: "le champs est vide",
  }),

  file: z.string(),
 
})

export default function SchoolInfos() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolname: "",
      file: "",
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
              name="schoolname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom etablissement</FormLabel>
                  <div className="rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                    <FormControl>
                      <Input
                        type='text' placeholder="victor lobad" {...field}
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
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ajouter image</FormLabel>
                  <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                    <FormControl>
                      <Input
                        type="file" placeholder="" {...field}
                        className="border-0 focus-visible:ring-0 shadow-none"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}