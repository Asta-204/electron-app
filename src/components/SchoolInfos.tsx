"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod/v4"; 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "./ui/card"

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png",  "image/webp"];

const formSchema = z.object({
  schoolname: z.string().min(1, {
    message: "le champs est vide",
  }).max(40, {message: "vous avez atteint la longueur maximale"}),

  image: z.instanceof(FileList)
    .refine(
      (files) => files[0]?.size <= MAX_FILE_SIZE,
      { message: "La taille maximale recommandée est de 5 Mo." }
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      { message: "Seuls les formats .jpg, .jpeg, .png et .webp sont acceptés." }
    ),

})

export default function SchoolInfos() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolname:"",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    console.log(values.image)
  }


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
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: {onChange} }) => (
                <FormItem>
                  <FormLabel>Ajouter une image</FormLabel>
                  <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                    <FormControl>
                      <Input 
                      onChange={(e)=>onChange(e.target.files)}
                        type="file" placeholder=""
                        className="border-0 focus-visible:ring-0 shadow-none"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2 flex flex-row gap-2 justify-center">
              <Button type="submit">Submit</Button>
              <Button variant="secondary">Ignorer</Button>
            </div>

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}