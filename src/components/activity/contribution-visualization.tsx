"use client";
import { useState, useMemo } from "react";
import { Card } from "@heroui/react";
import {
  CalendarIcon,
  BarChart3Icon,
  LineChartIcon,
  GridIcon,
} from "lucide-react";
import { ContributionsGrid } from "./grid-graph";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/react";
import { Button } from "@heroui/react";
import { ContributionsCalender } from "@/lib/github";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

type ChartType = "grid" | "bar" | "line";
interface ContributionVisualizationProps {
  contributions: ContributionsCalender;
}

const chartConfig = {
  contributions: {
    label: "Contributions",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ContributionVisualization({
  contributions,
}: ContributionVisualizationProps) {
  const [chartType, setChartType] = useState<ChartType>("grid");

  console.log(contributions);

  const chartData = useMemo(() => {
    return contributions.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: new Date(day.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        contributions: day.contributionCount,
      }))
    );
  }, [contributions]);

  return (
    <Card className="p-6 bg-content1 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <CalendarIcon className="mr-2 text-primary h-5 w-5" />
          <h3 className="text-lg font-semibold text-foreground">
            GitHub Contributions
          </h3>
        </div>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="solid" size="sm">
              {chartType === "grid" && <GridIcon className="h-4 w-4" />}
              {chartType === "bar" && <BarChart3Icon className="h-4 w-4" />}
              {chartType === "line" && <LineChartIcon className="h-4 w-4" />}
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              textValue="Grid view"
              key="grid"
              onPress={() => setChartType("grid")}
              startContent={<GridIcon className="h-4 w-4" />}
            >
              Grid View
            </DropdownItem>
            <DropdownItem
              textValue="Bar chart"
              key="bar"
              onPress={() => setChartType("bar")}
              startContent={<BarChart3Icon className="h-4 w-4" />}
            >
              Bar Chart
            </DropdownItem>
            <DropdownItem
              textValue="Line chart"
              key="line"
              onPress={() => setChartType("line")}
              startContent={<LineChartIcon className="h-4 w-4" />}
            >
              Line Chart
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        {chartType === "grid" && (
          <ContributionsGrid contributions={contributions} />
        )}
        {chartType === "bar" && (
          <ChartContainer config={chartConfig}>
            <BarChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.split("/")[1]}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="contributions"
                fill="var(--color-contributions)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        )}
        {chartType === "line" && (
          <ChartContainer config={chartConfig}>
            <LineChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.split("/")[1]}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line
                type="natural"
                dataKey="contributions"
                stroke="var(--color-contributions)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
      </div>
    </Card>
  );
}
