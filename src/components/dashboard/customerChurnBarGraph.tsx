"use client";
import { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  max,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from "d3";

export interface IData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: IData[];
}

export function BarChart({ data }: BarChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const highestValue = max(data, (d) => d.value) || 0;

  const drawChart = () => {
    const svg = select(svgRef.current);

    svg.selectAll("*").remove();

    const width = parseInt(svg.style("width"), 10);
    const height = parseInt(svg.style("height"), 10);

    const margin = { top: 20, right: 0, bottom: 20, left: 30 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const scaleX = scaleBand()
      .domain(data.map(({ label }) => label))
      .range([0, innerWidth])
      .padding(0.5);

    const scaleY = scaleLinear()
      .domain([0, Math.max(...data.map(({ value }) => value))])
      .range([innerHeight, 0]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    g.classed("text-gray-60", true);

    // y axis config
    const yAxis = g.append("g");
    yAxis.call(axisLeft(scaleY).ticks(6));
    yAxis.select(".domain").remove();
    yAxis
      .selectAll(".tick line")
      .attr("x2", "100%")
      .classed("text-text-secondary", true);
    yAxis.selectAll(".tick text").classed("text-text-light-secondary", true);

    const xAxis = g.append("g");
    xAxis
      .call(axisBottom(scaleX))
      .attr("transform", `translate(0, ${innerHeight})`)
      .classed("text-text-light-secondary", true);
    xAxis.select(".domain").remove();
    xAxis.selectAll(".tick line").remove();

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => scaleX(d.label) || 0)
      .attr("y", (d) => scaleY(d.value))
      .attr("width", scaleX.bandwidth())
      .attr("height", (d) => innerHeight - scaleY(d.value))
      .style("fill", "currentColor")
      .classed("text-primary", (d) => d.value === highestValue)
      .attr("rx", 5);

    g.selectAll(".bar-corner")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-corner")
      .attr("x", (d) => scaleX(d.label) || 0)
      .attr("y", (d) => (innerHeight + scaleY(d.value)) / 2)
      .attr("width", scaleX.bandwidth())
      .attr("height", (d) => (innerHeight - scaleY(d.value)) / 2)
      .style("fill", "currentColor")
      .classed("text-primary", (d) => d.value === highestValue);
  };

  useEffect(() => {
    drawChart();
    window.addEventListener("resize", drawChart);
    return () => {
      window.removeEventListener("resize", drawChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <svg ref={svgRef} className="w-full h-full"></svg>;
}
