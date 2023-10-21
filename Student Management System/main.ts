import inquirer from 'inquirer';

class Student {
  constructor(public name: string, public studentID: string, public courses: string[], public balance: number) {}

  enrollCourse(course: string) {
    this.courses.push(course);
  }

  payTuition(amount: number) {
    this.balance -= amount;
  }

  showStatus() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Enrolled Courses: ${this.courses.join(', ')}`);
    console.log(`Balance: $${this.balance}`);
  }
}

const students: Student[] = [];

function generateStudentID(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

async function addStudent() {
  const studentID = generateStudentID();
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter student name:',
    },
  ]);

  const student = new Student(answers.name, studentID, [], 0);
  students.push(student);
  console.log(`Student ${answers.name} added with ID ${studentID}`);
}

async function enrollStudent() {}

async function payTuition() {}

async function viewStudentStatus() {
  const { studentID } = await inquirer.prompt([
    {
      type: 'input',
      name: 'studentID',
      message: 'Enter student ID:',
    },
  ]);

  const student = students.find((s) => s.studentID === studentID);

  if (student) {
    student.showStatus();
  } else {
    console.log('Student not found.');
  }
}

async function mainMenu() {
  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Choose an option:',
        choices: ['Add Student', 'Enroll Student', 'Pay Tuition', 'View Student Status', 'Exit'],
      },
    ]);

    switch (choice) {
      case 'Add Student':
        await addStudent();
        break;
      case 'Enroll Student':
        await enrollStudent();
        break;
      case 'Pay Tuition':
        await payTuition();
        break;
      case 'View Student Status':
        await viewStudentStatus();
        break;
      case 'Exit':
        console.log('Goodbye!');
        return;
    }
  }
}

async function runSMS() {
  console.log('=== Student Management System ===');
  await mainMenu();
}

runSMS();
