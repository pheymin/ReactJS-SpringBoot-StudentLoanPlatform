package com.example.student.loan.dto;

import com.example.student.loan.model.Lender;

public class LenderDTO {
    private Integer lenderID;
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

    public LenderDTO() {
    }

    public LenderDTO(Integer lenderID, String name, String email, String password, String dob, String ic, String phone, String bankName, String bankAcc, String userType, String city, String street, String state, String postcode, Integer status) {
        this.lenderID = lenderID;
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
    }

    public static LenderDTO createDTO(Lender lender) {
        LenderDTO dto = new LenderDTO(
                lender.getLenderID(),
                lender.getUser().getName(),
                lender.getUser().getEmail(),
                lender.getUser().getPassword(),
                lender.getUser().getDob(),
                lender.getUser().getIc(),
                lender.getUser().getPhone(),
                lender.getUser().getBankName(),
                lender.getUser().getBankAcc(),
                lender.getUser().getUserType(),
                lender.getUser().getCity(),
                lender.getUser().getStreet(),
                lender.getUser().getState(),
                lender.getUser().getPostcode(),
                lender.getUser().getStatus()
        );
        return dto;
    }

    public Integer getLenderID() {
        return lenderID;
    }

    public void setLenderID(Integer lenderID) {
        this.lenderID = lenderID;
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
}
