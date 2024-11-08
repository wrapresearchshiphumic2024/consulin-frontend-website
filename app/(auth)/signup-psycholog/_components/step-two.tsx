import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/extension/multi-select";
import FileUploadCustom from "@/components/ui/file-upload-custom";
import { DropzoneOptions } from "react-dropzone";
const dropzone_serticate = {
  accept: {
    "application/pdf": [".pdf"],
  },
  maxFiles: 5,
  maxSize: 10 * 1024 * 1024,
} satisfies DropzoneOptions;
const language = [
  {
    name: "Indonesia",
  },
  {
    name: "English",
  },
];
export default function StepTwo() {
  const form = useFormContext();
  return (
    <>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Degree"
                  {...field}
                  autoComplete="degree"
                  className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="University"
                  {...field}
                  className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Major"
                  {...field}
                  className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="graduation_year"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Graduation Year"
                  type="number"
                  {...field}
                  className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="w-full">
              <MultiSelector
                onValuesChange={field.onChange}
                values={field.value}
              >
                <MultiSelectorTrigger className="border-primary-custom_primary border-2 ">
                  <div className="flex justify-between items-center flex-1 ">
                    <MultiSelectorInput
                      placeholder="Languages Master"
                      className="placeholder:text-primary-custom_primary-foreground"
                    />
                  </div>
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {language.map((language) => (
                      <MultiSelectorItem
                        key={language.name}
                        value={language.name}
                      >
                        <span>{language.name}</span>
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="certificate"
          render={({ field }) => (
            <FormItem>
              <FileUploadCustom
                value={field.value}
                onValueChange={field.onChange}
                dropzoneOptions={dropzone_serticate}
                placeholder="Upload certificate"
                reSelect={true}
              />

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
