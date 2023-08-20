package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Lender")
public class Lender {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer lenderID;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userID")
    private User user;

    public Lender(Integer lenderID, User user) {
        this.lenderID = lenderID;
        this.user = user;
    }

    public Lender() {
    }

    public Integer getLenderID() {
        return lenderID;
    }

    public void setLenderID(Integer lenderID) {
        this.lenderID = lenderID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Lender{" +
                "lenderID=" + lenderID +
                ", user=" + user +
                '}';
    }
}
