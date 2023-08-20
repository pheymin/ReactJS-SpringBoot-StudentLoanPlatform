-- User Table
CREATE TABLE User (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    ic VARCHAR(12) NOT NULL,
    phone VARCHAR(11) NOT NULL,
    bankName VARCHAR(50),
    bankAcc VARCHAR(25),
    userType ENUM('Borrower', 'Lender', 'Admin') NOT NULL,
    city varchar(255),
	street varchar(255),
	state varchar(255),
	postcode varchar(10),
	status ENUM('0', '1')
);

-- Borrower Table
CREATE TABLE Borrower (
    borrowerID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    uniName VARCHAR(100) NOT NULL,
    levelOfStudy VARCHAR(50) NOT NULL,
    course VARCHAR(50) NOT NULL,
    courseDuration DATE NOT NULL,
    expGraduation DATE NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID)
);

-- Lender Table
CREATE TABLE Lender (
    lenderID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID)
);

-- Admin Table
CREATE TABLE Admin (
    adminID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID)
);

-- Document Table
CREATE TABLE Document (
    docID INT AUTO_INCREMENT PRIMARY KEY,
    borrowerID INT NOT NULL,
    docName VARCHAR(255) NOT NULL,
    docType VARCHAR(255) NOT NULL,
    filePath VARCHAR(255) NOT NULL,
    uploadDate DATE NOT NULL,
    FOREIGN KEY (borrowerID) REFERENCES Borrower(borrowerID)
);

-- Loan Table
CREATE TABLE Loan (
    loanID INT AUTO_INCREMENT PRIMARY KEY,
    borrowerID INT NOT NULL,
    lenderID INT NOT NULL,
    loanAmount FLOAT NOT NULL,
    loanDuration DATE NOT NULL,
    interestRate FLOAT NOT NULL,
    termsNConditions VARCHAR(255) NOT NULL,
    loanPurpose VARCHAR(255) NOT NULL,
    appliedDate DATE NOT NULL,
    issuedDate VARCHAR(25) NOT NULL,
    outstandingBalance FLOAT NOT NULL,
    loanStatus VARCHAR(50) NOT NULL,
    FOREIGN KEY (borrowerID) REFERENCES Borrower(borrowerID),
    FOREIGN KEY (lenderID) REFERENCES Lender(lenderID)
);
