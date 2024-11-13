"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  active_patients: {
    label: "Active Patient",
    color: "#28A745",
  },
} satisfies ChartConfig;

// Map nama bulan ke angka bulan untuk menentukan ganjil atau genap
const monthIndex = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export function SingleChart({ data }: { data: any }) {
  console.log(data);
  return (
    <Card className="w-full h-full bg-secondary-custom_secondary rounded-3xl shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          Monthly Active Patient Report
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

            <Bar dataKey="active_patients" radius={4}>
              {data.map((entry: any) => (
                <Cell
                  key={entry.month}
                  fill={
                    monthIndex[entry.month] % 2 !== 0 ? "#27374D" : "#28A745"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
