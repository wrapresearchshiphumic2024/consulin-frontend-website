// "use client";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";

// import { formChooseDateSchema } from "@/helpers/validations/validation-shedule";

// import ScheduleComponentDate from "./ui/schedule-component-time";

// export default function FormChooseDate() {
//   const form = useForm<z.infer<typeof formChooseDateSchema>>({
//     mode: "all",
//     resolver: zodResolver(formChooseDateSchema),
//     defaultValues: {
//       schedule_date: [],
//     },
//     shouldUnregister: false,
//   });

//   async function onSubmit(values: z.infer<typeof formChooseDateSchema>) {
//     console.log(values);
//   }

//   return (
//     <>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-8 text-primary-custom_primary mt-10"
//         >
//           <div>
//             <FormField
//               control={form.control}
//               name="schedule_date"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <ScheduleComponentDate
//                       value={field.value}
//                       onChange={field.onChange}
//                     />
//                   </FormControl>

//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <Button type="submit" className=" bg-green-500 mr-3">
//             Save
//           </Button>
//           <Button type="button" className=" bg-red-500">
//             Cancel
//           </Button>
//         </form>
//       </Form>
//     </>
//   );
// }
