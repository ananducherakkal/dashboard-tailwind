"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { cn } from "@/utils/shadcn";
import { formatNumber } from "@/utils/chart";

export type WebsiteTrafficChartData = {
  id: string | number;
  color: string;
  value: number;
  label: string;
};

export type WebsiteTrafficChartOptions = {
  thickness?: number;
  bgColor?: string;
};

type WebsiteTrafficChartProps = {
  options?: WebsiteTrafficChartOptions;
  data: Array<WebsiteTrafficChartData>;
  className?: string;
};

const WebsiteTrafficChart = (props: WebsiteTrafficChartProps) => {
  const { options, data, className } = props;

  const _options = {
    bgColor: "#F5F4F6",
    thickness: 10,
    ...options,
  };

  const totalValue = d3.sum(data, (d) => d.value);
  const dataSum = d3.cumsum(data, (d) => d.value);
  const _data = data.map((d, index) => ({
    ...d,
    value: dataSum[index] / totalValue,
  }));

  const svgRef = useRef<SVGSVGElement | null>(null);

  const drawChart = (withAnimation: boolean = false) => {
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    const width = Math.min(
      parseInt(svg.style("width"), 10),
      parseInt(svg.style("height"), 10)
    );
    const height = width;

    const circleData: Array<d3.DefaultArcObject & WebsiteTrafficChartData> =
      _data.map((item) => {
        return {
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          ...item,
        };
      });

    const arc = d3
      .arc()
      .innerRadius(width / 2 - _options.thickness)
      .outerRadius(width / 2)
      .cornerRadius(20);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const circles = g.selectAll("g").data(circleData).enter().append("g");

    const path = circles.append("path").style("fill", (d) => d.color);

    if (withAnimation) {
      path
        .transition()
        .duration(2000)
        .attrTween("d", (d, index) => {
          const prevData = index ? circleData[index - 1].value : 0;
          const prevPrevData = index > 1 ? circleData[index - 2].value : 0;

          var interpolateStart = d3.interpolate(
            prevPrevData * 2 * Math.PI,
            (prevData + 0.02) * 2 * Math.PI
          );

          var interpolateEnd = d3.interpolate(
            prevPrevData * 2 * Math.PI,
            d.value * 2 * Math.PI
          );

          return function (t: number): string {
            d.startAngle = interpolateStart(t);
            d.endAngle = interpolateEnd(t);
            return arc(d, index) || "";
          };
        });
    } else {
      path.attr("d", (d, index) => {
        const startAngle =
          (index ? circleData[index - 1].value + 0.02 : 0.02) * 2 * Math.PI;
        const endAngle = d.value * 2 * Math.PI;
        d.startAngle = startAngle;
        d.endAngle = endAngle;
        return arc(d, index) || "";
      });
    }
  };

  useEffect(() => {
    drawChart(true);
    const handleResize = () => {
      drawChart(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={cn("mt-4", className)}>
      <div className="w-36 h-36 mx-auto relative flex items-center justify-center">
        <svg ref={svgRef} className="w-full h-full">
          <g className="loading-circles" />
        </svg>
        <div className="font-bold text-xl text-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {formatNumber(totalValue)}
        </div>
      </div>
      <div className="flex flex-col text-text mt-4">
        {data.length &&
          data.map((item) => (
            <div key={item.label} className="h-10 flex items-center">
              <div
                style={{ backgroundColor: item.color }}
                className={`h-6 w-6 rounded-sm mr-3`}
              ></div>
              <div className="text-base font-semibold">{item.label}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WebsiteTrafficChart;
