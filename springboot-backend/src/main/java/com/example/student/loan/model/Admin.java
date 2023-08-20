package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer adminID;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userID")
    private User user;

    public Admin(Integer adminID, User user) {
        this.adminID = adminID;
        this.user = user;
    }

    public Admin() {
    }

    public Integer getAdminID() {
        return adminID;
    }

    public void setAdminID(Integer adminID) {
        this.adminID = adminID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "adminID=" + adminID +
                ", user=" + user +
                '}';
    }
}