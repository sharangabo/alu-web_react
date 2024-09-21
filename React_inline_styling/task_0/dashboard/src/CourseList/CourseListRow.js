import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {
  // Define the styles for header and row inline
  const rowStyle = {
    backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab",
  };

  // Conditional rendering based on isHeader and textSecondCell
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <>
          {textSecondCell === null ? (
            <th colSpan="2" data-testid="course-table-header">
              {textFirstCell}
            </th>
          ) : (
            <>
              <th data-testid="course-table-header">{textFirstCell}</th>
              <th data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      ) : (
        <>
          <td data-testid="course-table-body">{textFirstCell}</td>
          <td data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
