import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type InputFormProps = {
  label: string;
  field: {
    value: string;
    onChange: (value: string) => void;
  };
  lenght: number;
};

export const InputForm = ({ label, field, lenght }: InputFormProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    let value = e.target.value.replace(/\D/g, "").padStart(2, "0").slice(-2);
    if (parseInt(value) > 59) value = "59";
    value = value.padStart(2, "0").slice(-2);
    onChange(value);
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
