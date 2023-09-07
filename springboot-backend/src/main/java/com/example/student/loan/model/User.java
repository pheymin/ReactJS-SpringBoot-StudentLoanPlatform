package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table (name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "dob")
    private String dob;

    @Column(name = "ic")
    private String ic;

    @Column(name = "phone")
    private String phone;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "bank_acc")
    private String bankAcc;

    @Column(name = "user_type")
    private String userType;

    @Column(name = "city")
    private String city;
    @Column(name = "street")
    private String street;
    @Column(name = "state")
    private String state;
    @Column(name = "postcode")
    private String postcode;
    @Column(name = "status")
    private Integer status;

    @Column(name = "photo_url")
    private String photoUrl;

    public User(){}

    public User(Integer userID, String name, String email, String password, String dob, String ic, String phone, String bankName, String bankAcc, String userType, String city, String street, String state, String postcode, Integer status, String photoUrl) {
        this.userID = userID;
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
        this.photoUrl = photoUrl;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
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

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }
}
