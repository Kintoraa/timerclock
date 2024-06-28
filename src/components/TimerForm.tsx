"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Timer } from "@/components/Timer";
import { useTimersStore } from "@/lib/zustand/storeTimer";
import { Card } from "@/components/ui/card";
import { InputForm } from "@/components/InputForm";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z
  .object({
    hours: z.string().regex(/^\d{0,3}$/, "Entrez 3 chiffres maximum"),
    minutes: z.string().regex(/^\d{0,2}$/, "Entrez 2 chiffres maximum"),
    seconds: z.string().regex(/^\d{0,2}$/, "Entrez 2 chiffres maximum"),
    name: z
      .string()
      .max(10, "Le nom doit contenir 10 caractères maximum")
      .optional(),
  })
  .refine((data) => {
    const total =
      parseInt(data.hours) + parseInt(data.minutes) + parseInt(data.seconds);
    if (total > 0) return true;
    if (total <= 0) {
      toast.error("Le timer doit avoir au moins une valeur supérieure à zéro", {
        duration: 1000,
      });
      return false;
    }
  });

export const TimerForm = () => {
  const { addTimer } = useTimersStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hours: "00",
      minutes: "00",
      seconds: "00",
      name: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addTimer(values.hours, values.minutes, values.seconds, values.name);
  }

  return (
    <div className={"flex flex-col"}>
      <Card className={"p-12 m-5 relative"}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-2 flex items-center text-center"
          >
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <InputForm
                  field={field}
                  label={"Heures"}
                  lenght={100}
                ></InputForm>
              )}
            />
            <FormField
              control={form.control}
              name="minutes"
              render={({ field }) => (
                <InputForm
                  field={field}
                  label={"Minutes"}
                  lenght={59}
                ></InputForm>
              )}
            />
            <FormField
              control={form.control}
              name="seconds"
              render={({ field }) => (
                <InputForm
                  field={field}
                  label={"Secondes"}
                  lenght={59}
                ></InputForm>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      className={"text-center focus:border-green-500"}
                      {...field}
                      type={"text"}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={
                "bg-green-500 hover:bg-green-900 absolute bottom-2 right-2 p-4"
              }
            >
              Ajouter
            </Button>
          </form>
        </Form>
      </Card>
      <Timer />
    </div>
  );
};
