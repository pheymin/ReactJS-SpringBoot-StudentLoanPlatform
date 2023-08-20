package com.example.student.loan.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Borrower")
public class Borrower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer borrowerID;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userID")
    private User user;

    @Column(name = "uniName")
    private String uniName;

    @Column(name = "levelOfStudy")
    private String levelOfStudy;

    @Column(name = "course")
    private String course;

    @Column(name = "courseDuration")
    private Date courseDuration;

    @Column(name = "expGraduation")
    private Date expGraduation;

    public Borrower() {}

    public Borrower(Integer borrowerID, User user, String uniName, String levelOfStudy, String course, Date courseDuration, Date expGraduation) {
        this.borrowerID = borrowerID;
        this.user = user;
        this.uniName = uniName;
        this.levelOfStudy = levelOfStudy;
        this.course = course;
        this.courseDuration = courseDuration;
        this.expGraduation = expGraduation;
    }

    public Integer getBorrowerID() {
        return borrowerID;
    }

    public void setBorrowerID(Integer borrowerID) {
        this.borrowerID = borrowerID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getUniName() {
        return uniName;
    }

    public void setUniName(String uniName) {
        this.uniName = uniName;
    }

    public String getLevelOfStudy() {
        return levelOfStudy;
    }

    public void setLevelOfStudy(String levelOfStudy) {
        this.levelOfStudy = levelOfStudy;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Date getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(Date courseDuration) {
        this.courseDuration = courseDuration;
    }

    public Date getExpGraduation() {
        return expGraduation;
    }

    public void setExpGraduation(Date expGraduation) {
        this.expGraduation = expGraduation;
    }

    @Override
    public String toString() {
        return "Borrower{" +
                "borrowerID=" + borrowerID +
                ", user=" + user +
                ", uniName='" + uniName + '\'' +
                ", levelOfStudy='" + levelOfStudy + '\'' +
                ", course='" + course + '\'' +
                ", courseDuration=" + courseDuration +
                ", expGraduation=" + expGraduation +
                '}';
    }
}
