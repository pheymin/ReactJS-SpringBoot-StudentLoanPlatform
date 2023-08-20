package com.example.student.loan.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "borrower")
public class Borrower extends User{

}
