# Student Loan Platform

This project is a **Student Loan Platform** built using **ReactJS** for the frontend and **Spring Boot** for the backend. It provides a system where borrowers can apply for loans, lenders can fund loans, and admins can manage loans and repayments. The system supports three user roles: **Admin**, **Borrower**, and **Lender**, each with specific functionalities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
---

## Features

### Admin Features:
![admin](https://github.com/user-attachments/assets/4b7a2590-8e94-49a9-951e-0cf39349e956)
- Manage and update **user accounts** (both borrowers and lenders).
- Manage **loans** and **repayments**:
  - View loan applications.
  - Track loans in progress.
  - View repayment history for each loan.
- View details about **borrowers** and **lenders**.

### Borrower Features:
![borrower](https://github.com/user-attachments/assets/4718705d-91d9-4c8f-bbef-0e363b75706f)
- Submit **loan applications**.
- View **loan status**.
- Make **loan repayments**.
- Manage **profile** details.

### Lender Features:
![lender](https://github.com/user-attachments/assets/d3e72a43-afc7-4cb5-8a5d-1318731a339b)
- View **pending loan agreements**.
- Sign **loan agreements**.
- Provide **funds** to approved loans.
- Manage **profile** details.

### Authentication:
- All roles have access to **authentication functions**:
  - Sign-up, login, and profile management.

---

## Tech Stack

### Frontend (React):
- **React**: Dynamic and interactive user interfaces.
- **Vite**: Fast and optimized development environment.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI styling.
- **Ant Design (AntD)**: UI components for building the admin and user dashboard.
- **Axios**: For HTTP requests and API integration.
- **ApexCharts**: Data visualization for loan and repayment history.
- **React Router**: For routing and navigation within the app.

### Backend (Spring Boot):
- **Spring Boot**: For building REST APIs and handling the business logic.
- **MySQL**: Database for storing user data, loans, and repayment history.

---

## Roles and Responsibilities

### 1. **Admin**
- Manage borrowers and lenders.
- Manage loans and repayments.
- View loan applications and track the status.
  
### 2. **Borrower**
- Submit loan applications.
- View loan status updates.
- Make repayments on active loans.

### 3. **Lender**
- Sign agreements for loans.
- Provide funds to approved loan requests.

---

## Installation

### Prerequisites:
- **Node.js** (version 18 or higher) for the frontend.
- **Java 11** or higher for the backend.
- **MySQL** for the database.

### Backend (Spring Boot) Setup:
1. Clone the repository:

    ```bash
    git clone https://github.com/pheymin/ReactJS-SpringBoot-StudentLoanPlatform.git
    cd student-loan-backend
    ```

2. Set up the database by creating a new MySQL database:
    ```sql
    CREATE DATABASE student_loan;
    ```

3. Update the database credentials in `src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/student_loan
    spring.datasource.username=your-username
    spring.datasource.password=your-password
    ```

4. Build and run the backend:
    ```bash
    ./mvnw spring-boot:run
    ```

The Spring Boot application will start on `http://localhost:8080`.

### Frontend (React) Setup:
1. Clone the frontend repository:

    ```bash
    git clone https://github.com/pheymin/ReactJS-SpringBoot-StudentLoanPlatform.git
    cd student-loan-frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

The React application will start on `http://localhost:5173`.

---

## Usage

https://github.com/user-attachments/assets/24bf92ca-84f1-4556-9e46-1c4480f7be1a

### Admin Dashboard
- After logging in as an admin, you can manage loans, users, and repayments via the admin dashboard.
- Navigate to the **Loans** section to view pending loan applications, active loans, and repayment history.

### Borrower Dashboard
- Borrowers can submit a new loan application by navigating to the **Apply for Loan** section.
- Borrowers can view the status of their loan in the **Loan Status** section.
- Repayments can be made under the **Repayment** section.

### Lender Dashboard
- Lenders can view pending loan agreements and sign them in the **Loan Agreements** section.
- Lenders can provide funds for approved loans and track their contributions.

---

## Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact
Pheymin - [pheymin1223@gmail.com](pheymin1223@gmail.com) - https://github.com/pheymin
