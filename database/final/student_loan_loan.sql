-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_loan
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `loanID` int NOT NULL AUTO_INCREMENT,
  `borrowerID` int NOT NULL,
  `lenderID` int DEFAULT NULL,
  `loan_amount` double DEFAULT NULL,
  `loan_duration_start` date DEFAULT NULL,
  `loan_purpose` varchar(255) DEFAULT NULL,
  `applied_date` date DEFAULT NULL,
  `issued_date` date DEFAULT NULL,
  `loan_status` varchar(255) DEFAULT NULL,
  `loan_duration_end` date DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `borrower_id` int DEFAULT NULL,
  `lender_id` int DEFAULT NULL,
  PRIMARY KEY (`loanID`),
  KEY `FKogwq6due0sobgr76cjs39vju5` (`borrowerID`),
  KEY `FKgs7s795ugxhe24s6qmdaovqq8` (`lenderID`),
  CONSTRAINT `FKgs7s795ugxhe24s6qmdaovqq8` FOREIGN KEY (`lenderID`) REFERENCES `user` (`userID`),
  CONSTRAINT `FKogwq6due0sobgr76cjs39vju5` FOREIGN KEY (`borrowerID`) REFERENCES `user` (`userID`),
  CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`borrowerID`) REFERENCES `borrower` (`borrowerID`),
  CONSTRAINT `loan_ibfk_2` FOREIGN KEY (`lenderID`) REFERENCES `lender` (`lenderID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-12  0:21:22
