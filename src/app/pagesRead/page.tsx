"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
import { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";
import { BooksContext } from "@/context/BooksProvider";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadPages = () => {
  const { readBooks } = useContext(BooksContext);

  if (readBooks.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex min-h-100 w-full flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <FaBookOpen className="text-3xl text-emerald-500" />
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            No Reading Data Yet
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            Start reading books and mark them as read. Your reading progress
            and total pages will appear here.
          </p>

          <div className="mt-6 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
            Your reading journey starts here
          </div>
        </div>
      </div>
    );
  }

  const data = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Reading Progress
        </h2>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Track the number of pages you have read from each book
        </p>
      </div>

      <div className="flex justify-center">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />

          <Tooltip cursor={{ fillOpacity: 0.5 }} />

          <XAxis dataKey="name" />

          <YAxis width="auto" />

          <Bar dataKey="pages" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default ReadPages;