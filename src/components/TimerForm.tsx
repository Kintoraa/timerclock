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
import { formSchema } from "@/lib/zod/schema";

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

  const onSubmit = (values: z.infer<typeof formSchema>) =>
    addTimer(values.hours, values.minutes, values.seconds, values.name);

  return (
    <div className={"flex flex-col items-center"}>
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
