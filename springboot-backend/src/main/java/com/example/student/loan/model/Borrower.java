package com.example.student.loan.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Borrower")
public class Borrower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer borrowerID;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userID")
    private User user;

    @Column(name = "uni_name")
    private String uniName;

    @Column(name = "level_of_study")
    private String levelOfStudy;

    @Column(name = "course")
    private String course;

    @Column(name = "course_start")
    private Date courseStart;

    @Column(name = "course_end")
    private Date courseEnd;

    public Borrower() {}

    public Borrower(Integer borrowerID, User user, String uniName, String levelOfStudy, String course, Date courseStart, Date courseEnd) {
        this.borrowerID = borrowerID;
        this.user = user;
        this.uniName = uniName;
        this.levelOfStudy = levelOfStudy;
        this.course = course;
        this.courseStart = courseStart;
        this.courseEnd = courseEnd;
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

    public Date getCourseStart() {
        return courseStart;
    }

    public void setCourseStart(Date courseStart) {
        this.courseStart = courseStart;
    }

    public Date getCourseEnd() {
        return courseEnd;
    }

    public void setCourseEnd(Date courseEnd) {
        this.courseEnd = courseEnd;
    }

}
