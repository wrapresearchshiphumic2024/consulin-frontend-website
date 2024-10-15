"use client";

import { Cell, Pie, PieChart } from "recharts";

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

export const description = "A pie chart with a label list";

const chartData = [
  { category: "Stress", percentage: 40, fill: "#DC3545" },
  { category: "Anxiety", percentage: 20, fill: "#4C9AFF" },
  { category: "Depression", percentage: 40, fill: "#F28D35" },
];

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
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function ChartAiAnalyzer() {
  return (
    <Card className="flex flex-col bg-secondary-custom_secondary shadow-none border-0">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="percentage"
                  nameKey="category"
                  hideLabel
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="category"
              fill="fill"
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
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
