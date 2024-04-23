import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Employee {
  employee_id: number;
  name: string;
  email: string;
  phoneNo: string;
  salary: number;
  jobTitle: string;
  dateOfJoining: Date;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees: Employee[] = [
    {
      employee_id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@ganpatdemo.com',
      phoneNo: '9876543210',
      salary: 55000,
      jobTitle: 'Software Engineer',
      dateOfJoining: new Date('2019-03-15'),
      dateOfBirth: new Date('1992-05-25'),
      address: 'Flat 102, Green Park, Delhi, India'
    },
    {
      employee_id: 2,
      name: 'Sunita Gupta',
      email: 'sunita.gupta@ganpatdemo.com',
      phoneNo: '8765432109',
      salary: 65000,
      jobTitle: 'Project Manager',
      dateOfJoining: new Date('2017-06-10'),
      dateOfBirth: new Date('1988-08-12'),
      address: 'B-405, Indira Nagar, Bangalore, India'
    },
    {
      employee_id: 3,
      name: 'Amit Singh',
      email: 'amit.singh@ganpatdemo.com',
      phoneNo: '7654321098',
      salary: 60000,
      jobTitle: 'Software Engineer',
      dateOfJoining: new Date('2018-09-20'),
      dateOfBirth: new Date('1990-04-15'),
      address: 'C-203, Powai, Mumbai, India'
    },
    {
      employee_id: 4,
      name: 'Priya Sharma',
      email: 'priya.sharma@ganpatdemo.com',
      phoneNo: '6543210987',
      salary: 70000,
      jobTitle: 'HR Manager',
      dateOfJoining: new Date('2016-02-05'),
      dateOfBirth: new Date('1987-11-30'),
      address: 'D-15, Jubilee Hills, Hyderabad, India'
    },
    {
      employee_id: 5,
      name: 'Rahul Verma',
      email: 'rahul.verma@ganpatdemo.com',
      phoneNo: '5432109876',
      salary: 75000,
      jobTitle: 'Project Lead',
      dateOfJoining: new Date('2015-04-10'),
      dateOfBirth: new Date('1985-10-20'),
      address: 'E-502, Sector 50, Noida, India'
    },
    {
      employee_id: 6,
      name: 'Anjali Desai',
      email: 'anjali.desai@ganpatdemo.com',
      phoneNo: '4321098765',
      salary: 55000,
      jobTitle: 'Software Engineer',
      dateOfJoining: new Date('2020-07-01'),
      dateOfBirth: new Date('1993-01-05'),
      address: 'F-10, Malviya Nagar, Jaipur, India'
    },
    {
      employee_id: 7,
      name: 'Sanjay Patel',
      email: 'sanjay.patel@ganpatdemo.com',
      phoneNo: '3210987654',
      salary: 65000,
      jobTitle: 'QA Engineer',
      dateOfJoining: new Date('2019-01-25'),
      dateOfBirth: new Date('1991-06-15'),
      address: 'G-204, Kharadi, Pune, India'
    },
    {
      employee_id: 8,
      name: 'Shilpa Menon',
      email: 'shilpa.menon@ganpatdemo.com',
      phoneNo: '2109876543',
      salary: 70000,
      jobTitle: 'DevOps Engineer',
      dateOfJoining: new Date('2017-11-15'),
      dateOfBirth: new Date('1989-03-20'),
      address: 'H-302, Whitefield, Bangalore, India'
    },
    {
      employee_id: 9,
      name: 'Vikram Yadav',
      email: 'vikram.yadav@ganpatdemo.com',
      phoneNo: '1098765432',
      salary: 75000,
      jobTitle: 'Data Scientist',
      dateOfJoining: new Date('2016-05-10'),
      dateOfBirth: new Date('1984-09-10'),
      address: 'I-405, Hitech City, Hyderabad, India'
    },
    {
      employee_id: 10,
      name: 'Neha Iyer',
      email: 'neha.iyer@ganpatdemo.com',
      phoneNo: '0987654321',
      salary: 60000,
      jobTitle: 'Software Engineer',
      dateOfJoining: new Date('2018-08-20'),
      dateOfBirth: new Date('1994-02-15'),
      address: 'J-203, Thane West, Mumbai, India'
    },
    {
      employee_id: 11,
      name: 'Alok Sharma',
      email: 'alok.sharma@ganpatdemo.com',
      phoneNo: '9876543210',
      salary: 65000,
      jobTitle: 'Product Manager',
      dateOfJoining: new Date('2017-03-15'),
      dateOfBirth: new Date('1986-07-25'),
      address: 'K-102, Koregaon Park, Pune, India'
    },
    {
      employee_id: 12,
      name: 'Pooja Kapoor',
      email: 'pooja.kapoor@ganpatdemo.com',
      phoneNo: '8765432109',
      salary: 70000,
      jobTitle: 'UI/UX Designer',
      dateOfJoining: new Date('2019-04-10'),
      dateOfBirth: new Date('1988-10-20'),
      address: 'L-502, Gurgaon, India'
    },
    {
      employee_id: 13,
      name: 'Ramesh Nair',
      email: 'ramesh.nair@ganpatdemo.com',
      phoneNo: '7654321098',
      salary: 75000,
      jobTitle: 'Backend Developer',
      dateOfJoining: new Date('2016-07-01'),
      dateOfBirth: new Date('1983-05-05'),
      address: 'M-15, Andheri East, Mumbai, India'
    },
    {
      employee_id: 14,
      name: 'Anita Krishnan',
      email: 'anita.krishnan@ganpatdemo.com',
      phoneNo: '6543210987',
      salary: 55000,
      jobTitle: 'Frontend Developer',
      dateOfJoining: new Date('2020-02-05'),
      dateOfBirth: new Date('1995-12-30'),
      address: 'N-405, Chennai, India'
    },
    {
      employee_id: 15,
      name: 'Prakash Tiwari',
      email: 'prakash.tiwari@ganpatdemo.com',
      phoneNo: '5432109876',
      salary: 60000,
      jobTitle: 'QA Engineer',
      dateOfJoining: new Date('2018-09-20'),
      dateOfBirth: new Date('1982-04-15'),
      address: 'O-203, Navi Mumbai, India'
    },
    {
      employee_id: 16,
      name: 'Sangeeta Reddy',
      email: 'sangeeta.reddy@ganpatdemo.com',
      phoneNo: '4321098765',
      salary: 65000,
      jobTitle: 'HR Manager',
      dateOfJoining: new Date('2017-02-10'),
      dateOfBirth: new Date('1981-08-05'),
      address: 'P-204, Kondapur, Hyderabad, India'
    },
    {
      employee_id: 17,
      name: 'Arjun Menon',
      email: 'arjun.menon@ganpatdemo.com',
      phoneNo: '3210987654',
      salary: 70000,
      jobTitle: 'Software Engineer',
      dateOfJoining: new Date('2019-11-15'),
      dateOfBirth: new Date('1980-03-20'),
      address: 'Q-302, BTM Layout, Bangalore, India'
    },
    {
      employee_id: 18,
      name: 'Kavita Deshpande',
      email: 'kavita.deshpande@ganpatdemo.com',
      phoneNo: '2109876543',
      salary: 75000,
      jobTitle: 'Product Manager',
      dateOfJoining: new Date('2016-06-10'),
      dateOfBirth: new Date('1979-09-10'),
      address: 'R-405, Wakad, Pune, India'
    },
    {
      employee_id: 19,
      name: 'Rajat Kapoor',
      email: 'rajat.kapoor@ganpatdemo.com',
      phoneNo: '1098765432',
      salary: 55000,
      jobTitle: 'DevOps Engineer',
      dateOfJoining: new Date('2020-04-15'),
      dateOfBirth: new Date('1978-01-05'),
      address: 'S-10, Sector 56, Gurgaon, India'
    },
    {
      employee_id: 20,
      name: 'Ananya Singh',
      email: 'ananya.singh@ganpatdemo.com',
      phoneNo: '0987654321',
      salary: 60000,
      jobTitle: 'Data Analyst',
      dateOfJoining: new Date('2018-01-20'),
      dateOfBirth: new Date('1996-02-15'),
      address: 'T-203, Bhandup West, Mumbai, India'
    }
  ];
  

  jobTitles: string[] = [];

  // Selected job title for filtering
  selectedJobTitle: string = '';

  searchDetails: string = '';

  constructor() {
    this.employees.forEach(employee => {
      if (!this.jobTitles.includes(employee.jobTitle)) {
        this.jobTitles.push(employee.jobTitle);
      }
    });
  }

  // Filter employees based on selected job title
  get filteredEmployees(): Employee[] {
    let filteredList = this.employees;

    // if (this.selectedJobTitle) {
    //   filteredList = filteredList.filter(employee => 
    //     employee.jobTitle.toLowerCase().includes(this.selectedJobTitle.toLowerCase())
    //   );
    // }

    if (this.searchDetails) {
      const searchText = this.searchDetails.toLowerCase();
      filteredList = filteredList.filter(employee => 
        employee.name.toLowerCase().includes(searchText) ||
        employee.employee_id.toString().includes(searchText) ||
        employee.jobTitle.toLowerCase().includes(searchText)
      );
    }

    return filteredList;
  }

  sort(key: keyof Employee) {
    this.employees.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }
}