"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  accepted: {
    label: "Accepted",
    color: "#28A745",
  },
  rejected: {
    label: "Rejected",
    color: "#DC3545",
  },
} satisfies ChartConfig;

export function MultipleChart({ data }: { data: any }) {
  console.log(data);
  return (
    <Card className="w-full h-full bg-secondary-custom_secondary rounded-3xl shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          Monthly Psychologist Approval Report
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <Bar dataKey="accepted" fill="#28A745" radius={4} />
            <Bar dataKey="rejected" fill="#DC3545" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
