localStorage.clear();

const employees = [
  {
    ID: "EMP001",
    Name: "Ali Khan",
    Email: "e@e.com",
    Password: "123",

    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
      total: 5,
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Customer Database",
        taskDescription:
          "Review and update customer contact information in the CRM system.",
        taskDate: "2026-09-19",
        category: "Database",
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Weekly Report",
        taskDescription:
          "Prepare the weekly performance report and submit it to the team lead.",
        taskDate: "2026-09-20",
        category: "Reporting",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription:
          "Attend the weekly team meeting and discuss current project progress.",
        taskDate: "2026-09-18",
        category: "Meeting",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Project Documents",
        taskDescription:
          "Review the latest project documentation and provide feedback.",
        taskDate: "2026-09-17",
        category: "Documentation",
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Client Proposal",
        taskDescription:
          "Finalize and submit the client proposal before the deadline.",
        taskDate: "2026-09-16",
        category: "Sales",
      },
    ],
  },

  {
    ID: "EMP002",
    Name: "Sara Ahmed",
    Email: "employee2@example.com",
    Password: "123",

    taskStats: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1,
      total: 6,
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription:
          "Create the initial design for the new product landing page.",
        taskDate: "2026-09-19",
        category: "Design",
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Brand Assets",
        taskDescription:
          "Update the company logo and marketing assets according to the latest guidelines.",
        taskDate: "2026-09-21",
        category: "Design",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Social Media Banner",
        taskDescription:
          "Design a promotional banner for the upcoming social media campaign.",
        taskDate: "2026-09-17",
        category: "Marketing",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Website Mockups",
        taskDescription:
          "Review the latest website mockups and suggest improvements.",
        taskDate: "2026-09-16",
        category: "Design",
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Campaign Graphics",
        taskDescription:
          "Prepare all graphics required for the marketing campaign.",
        taskDate: "2026-09-15",
        category: "Marketing",
      },
      {
        taskNumber: 6,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Email Template",
        taskDescription:
          "Design a responsive email template for the upcoming newsletter.",
        taskDate: "2026-09-22",
        category: "Marketing",
      },
    ],
  },

  {
    ID: "EMP003",
    Name: "Hassan Raza",
    Email: "employee3@example.com",
    Password: "123",

    taskStats: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1,
      total: 7,
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Investigate and resolve the authentication issue reported by users.",
        taskDate: "2026-09-19",
        category: "Development",
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement User Dashboard",
        taskDescription:
          "Develop the employee dashboard with task statistics and notifications.",
        taskDate: "2026-09-23",
        category: "Development",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription:
          "Review the latest pull request and identify potential issues.",
        taskDate: "2026-09-18",
        category: "Development",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update API Documentation",
        taskDescription:
          "Update API documentation with the latest endpoints and parameters.",
        taskDate: "2026-09-17",
        category: "Documentation",
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Staging Build",
        taskDescription:
          "Deploy the latest application build to the staging environment.",
        taskDate: "2026-09-16",
        category: "DevOps",
      },
      {
        taskNumber: 6,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription:
          "Migrate the existing database schema to the new structure.",
        taskDate: "2026-09-14",
        category: "Database",
      },
      {
        taskNumber: 7,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Notification System",
        taskDescription:
          "Implement in-app notifications for new tasks and task updates.",
        taskDate: "2026-09-24",
        category: "Development",
      },
    ],
  },

  {
    ID: "EMP004",
    Name: "Ayesha Malik",
    Email: "employee4@example.com",
    Password: "123",

    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
      total: 5,
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Process Invoices",
        taskDescription:
          "Review and process all pending invoices received from vendors.",
        taskDate: "2026-09-19",
        category: "Finance",
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monthly Expense Review",
        taskDescription:
          "Review monthly expenses and identify any unusual transactions.",
        taskDate: "2026-09-20",
        category: "Finance",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Budget Sheet",
        taskDescription:
          "Update the department budget sheet with the latest expenses.",
        taskDate: "2026-09-18",
        category: "Finance",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Vendor Payment Review",
        taskDescription:
          "Verify vendor payment details before processing payments.",
        taskDate: "2026-09-17",
        category: "Finance",
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Quarterly Financial Summary",
        taskDescription:
          "Prepare the quarterly financial summary for management review.",
        taskDate: "2026-09-15",
        category: "Reporting",
      },
    ],
  },

  {
    ID: "EMP005",
    Name: "Usman Tariq",
    Email: "employee5@example.com",
    Password: "123",

    taskStats: {
      active: 4,
      newTask: 2,
      completed: 3,
      failed: 1,
      total: 8,
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Contact New Leads",
        taskDescription:
          "Contact all new leads received through the website and update their status.",
        taskDate: "2026-09-19",
        category: "Sales",
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Presentation",
        taskDescription:
          "Prepare a presentation for the upcoming client sales meeting.",
        taskDate: "2026-09-21",
        category: "Sales",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Follow Up With Clients",
        taskDescription:
          "Follow up with clients who received proposals earlier this week.",
        taskDate: "2026-09-18",
        category: "Sales",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM Records",
        taskDescription:
          "Update customer interactions and deal statuses in the CRM.",
        taskDate: "2026-09-17",
        category: "CRM",
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research Potential Clients",
        taskDescription:
          "Research and identify potential clients in the target market.",
        taskDate: "2026-09-16",
        category: "Research",
      },
      {
        taskNumber: 6,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Close Pending Deal",
        taskDescription:
          "Follow up with the client and attempt to finalize the pending deal.",
        taskDate: "2026-09-14",
        category: "Sales",
      },
      {
        taskNumber: 7,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Client Proposal",
        taskDescription:
          "Create a customized proposal based on the client's requirements.",
        taskDate: "2026-09-22",
        category: "Sales",
      },
      {
        taskNumber: 8,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Sales Pipeline Review",
        taskDescription:
          "Review all active opportunities and update their expected closing dates.",
        taskDate: "2026-09-23",
        category: "CRM",
      },
    ],
  },
];

const admin = [
  {
    ID: "ADMIN001",
    Name: "Ahmed Khan",
    Email: "admin@example.com",
    Password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
