package com.example.student.loan.dto;

import com.example.student.loan.model.Borrower;
import java.util.Date;

public class BorrowerDTO {
    private Integer borrowerID;
    private String name;
    private String email;
    private String password;
    private String dob;
    private String ic;
    private String phone;
    private String bankName;
    private String bankAcc;
    private String userType;
    private String city;
    private String street;
    private String state;
    private String postcode;
    private Integer status;
    private String uniName;
    private String levelOfStudy;
    private String course;
    private Date courseStart;
    private Date courseEnd;

    public BorrowerDTO() {
    }

    public BorrowerDTO(Integer borrowerID, String name, String email, String password, String dob, String ic, String phone, String bankName, String bankAcc, String userType, String city, String street, String state, String postcode, Integer status, String uniName, String levelOfStudy, String course, Date courseStart, Date courseEnd) {
        this.borrowerID = borrowerID;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.ic = ic;
        this.phone = phone;
        this.bankName = bankName;
        this.bankAcc = bankAcc;
        this.userType = userType;
        this.city = city;
        this.street = street;
        this.state = state;
        this.postcode = postcode;
        this.status = status;
        this.uniName = uniName;
        this.levelOfStudy = levelOfStudy;
        this.course = course;
        this.courseStart = courseStart;
        this.courseEnd = courseEnd;
    }

    public static BorrowerDTO createDTO(Borrower borrower) {
        BorrowerDTO dto = new BorrowerDTO(
                borrower.getBorrowerID(),
                borrower.getUser().getName(),
                borrower.getUser().getEmail(),
                borrower.getUser().getPassword(),
                borrower.getUser().getDob(),
                borrower.getUser().getIc(),
                borrower.getUser().getPhone(),
                borrower.getUser().getBankName(),
                borrower.getUser().getBankAcc(),
                borrower.getUser().getUserType(),
                borrower.getUser().getCity(),
                borrower.getUser().getStreet(),
                borrower.getUser().getState(),
                borrower.getUser().getPostcode(),
                borrower.getUser().getStatus(),
                borrower.getUniName(),
                borrower.getLevelOfStudy(),
                borrower.getCourse(),
                borrower.getCourseStart(),
                borrower.getCourseEnd()
        );

        return dto;
    }

    public Integer getBorrowerID() {
        return borrowerID;
    }

    public void setBorrowerID(Integer borrowerID) {
        this.borrowerID = borrowerID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getIc() {
        return ic;
    }

    public void setIc(String ic) {
        this.ic = ic;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankAcc() {
        return bankAcc;
    }

    public void setBankAcc(String bankAcc) {
        this.bankAcc = bankAcc;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
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
