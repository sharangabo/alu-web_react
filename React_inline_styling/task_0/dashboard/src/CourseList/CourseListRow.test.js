import React from "react";
import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  it("renders the first and second cell if isHeader is true", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    
    // Check if the text content for both header cells is rendered
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("renders only the first cell if isHeader is true and textSecondCell is null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />);
    
    // Check if only the first cell is rendered
    expect(screen.getByText("First")).toBeInTheDocument();
    // Ensure no second cell is rendered
    const secondCell = screen.queryByText("Second");
    expect(secondCell).toBeNull();
  });

  it("renders two cells if isHeader is false", () => {
    render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    
    // Check if both the first and second text in body are rendered
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("applies the correct background color for a header row", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    const row = screen.getByTestId("course-table-header").closest("tr");
    
    expect(row).toHaveStyle("background-color: #deb5b545");
  });

  it("applies the correct background color for a non-header row", () => {
    render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    const row = screen.getByTestId("course-table-body").closest("tr");
    
    expect(row).toHaveStyle("background-color: #f5f5f5ab");
  });
});
