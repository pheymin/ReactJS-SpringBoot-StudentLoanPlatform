-- Insert fake data into User table and related role tables
-- Borrowers
INSERT INTO User (name, email, password, dob, ic, phone, address, bankName, bankAcc, userType)
VALUES
    ('John Doe', 'john@example.com', '123456', '1990-01-01', '123456789012', '1234567890', '123 Main St', 'Bank A', '123456789', 'Borrower');

INSERT INTO Borrower (userID, uniName, levelOfStudy, course, courseDuration, expGraduation)
VALUES
    (LAST_INSERT_ID(), 'University A', 'Undergraduate', 'Computer Science', '2022-01-01', '2024-05-15');

-- Lenders
INSERT INTO User (name, email, password, dob, ic, phone, address, bankName, bankAcc, userType)
VALUES
    ('Jane Smith', 'jane@example.com', '654321', '1995-05-15', '987654321098', '9876543210', '456 Elm St', 'Bank B', '987654321', 'Lender');

INSERT INTO Lender (userID)
VALUES
    (LAST_INSERT_ID());

-- Admins
INSERT INTO User (name, email, password, dob, ic, phone, address, userType)
VALUES
    ('Admin User', 'admin@example.com', '987654', '1985-08-20', '555555555555', '5555555555', '789 Oak St', 'Admin');

INSERT INTO Admin (userID)
VALUES
    (LAST_INSERT_ID());
