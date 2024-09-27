// The Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Student variables
const student1: Student = {
    firstName: "Marie",
    lastName: "Jane",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Sam",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Stored in an array
const studentsList: Student[] = [student1, student2];

// Rendering the table
function studentTable(students: Student[]): void {
    const table = document.createElement('table');

    // table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const headers = ["First Name", "Location", "Age"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Create table body
    const tbody = document.createElement('tbody');
    students.forEach(student => {
        const row = tbody.insertRow();
        const firstNameCell = row.insertCell(0);
        const locationCell = row.insertCell(1);
        const ageCell = row.insertCell(2);

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        ageCell.textContent = student.age.toString();
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

studentTable(studentsList);
