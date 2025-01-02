"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  Percentage: {
    label: "Percentage",
    color: "hsl(var(--chart-1))",
  },
  Stress: {
    label: "Stress",
    color: "hsl(var(--chart-1))",
  },
  Anxiety: {
    label: "Anxiety",
    color: "hsl(var(--chart-2))",
  },
  Depression: {
    label: "Depression",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartAiAnalyzer({
  data,
}: {
  data: { category: string; percentage: number; fill: string }[];
}) {
  return (
    <Card className="flex flex-col bg-secondary-custom_secondary shadow-none border-0">
      <CardContent className="flex-1 p-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 40,
            }}
          >
            <XAxis dataKey="percentage" type="number" hide />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
              hide
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="percentage"
                  nameKey="category"
                  hideLabel
                />
              }
            />
            <Bar dataKey="percentage" layout="vertical" radius={4}>
              <LabelList
                dataKey="percentage"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" flex justify-center gap-3   text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#DC3545]"></div>
          <p>Stress</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#4C9AFF]"></div>
          <p>Anxiety</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#F28D35]"></div>
          <p>Depression</p>
        </div>
      </CardFooter>
    </Card>
  );
}
