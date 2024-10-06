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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dropzone = {
  accept: {
    "image/*": [".jpg", ".jpeg", ".png"],
    "application/pdf": [".pdf"],
  },
  maxFiles: 1,
  maxSize: 4 * 1024 * 1024,
} satisfies DropzoneOptions;
const spesialization = [
  {
    name: "Clinical Psychology",
  },
  {
    name: "Educational Psychology",
  },
  {
    name: "Developmental Psychology",
  },
  {
    name: "General Psychology",
  },
];

const work_experience = [
  {
    name: "1 Years",
  },
  {
    name: "2 Years",
  },
  {
    name: "3 Years",
  },
  {
    name: "4 Years",
  },
];
export default function StepThree() {
  const form = useFormContext();
  return (
    <>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="profesional_identification_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Professional Identification Number"
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
          name="spesialization"
          render={({ field }) => (
            <FormItem className="w-full">
              <MultiSelector
                onValuesChange={field.onChange}
                values={field.value}
              >
                <MultiSelectorTrigger className="border-primary-custom_primary border-2 ">
                  <div className="flex justify-between items-center flex-1 ">
                    <MultiSelectorInput
                      placeholder="Spesialization"
                      className="placeholder:text-primary-custom_primary-foreground"
                    />
                  </div>
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {spesialization.map((spesialization) => (
                      <MultiSelectorItem
                        key={spesialization.name}
                        value={spesialization.name}
                      >
                        <span>{spesialization.name}</span>
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
          name="work_experience"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-primary-custom_primary border-2 ">
                    <SelectValue
                      placeholder="Work Experience"
                      className="placeholder:text-primary-custom_primary"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {work_experience.map((work_experience) => (
                    <SelectItem
                      key={work_experience.name}
                      value={work_experience.name}
                    >
                      {work_experience.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem>
              <FileUploadCustom
                value={field.value}
                onValueChange={field.onChange}
                dropzoneOptions={dropzone}
                placeholder="Upload CV"
                reSelect={true}
              />

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="practice_license"
          render={({ field }) => (
            <FormItem>
              <FileUploadCustom
                value={field.value}
                onValueChange={field.onChange}
                dropzoneOptions={dropzone}
                placeholder="Upload Practice License"
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
