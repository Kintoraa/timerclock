import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const InputForm = ({ label, field, lenght }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, data) => {
    let value = e.target.value.replace(/\D/g, "").padStart(2, "0").slice(-2);
    if (value > 59) value = "59";
    value = value.padStart(2, "0").slice(-2);
    data(value);
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl className={"size-16"}>
        <Input
          className={"text-center focus:border-green-500"}
          {...field}
          type={"number"}
          max={lenght}
          onChange={(e) => handleInputChange(e, field.onChange)}
        />
      </FormControl>
      <FormDescription></FormDescription>
      <FormMessage />
    </FormItem>
  );
};
