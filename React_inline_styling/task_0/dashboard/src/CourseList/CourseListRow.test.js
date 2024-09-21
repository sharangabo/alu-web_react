import React from "react";
import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  it("renders the first and second cell if isHeader is true", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("renders only the first cell if isHeader is true and textSecondCell is null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />);
    
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.queryByText("Second")).not.toBeInTheDocument();
  });

  it("renders two cells if isHeader is false", () => {
    render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("applies the correct background color for a header row", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    const row = screen.getAllByRole("row")[0];
    
    expect(row).toHaveStyle("background-color: #deb5b545");
  });

  it("applies the correct background color for a non-header row", () => {
    render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    const row = screen.getAllByRole("row")[0];
    
    expect(row).toHaveStyle("background-color: #f5f5f5ab");
  });
});