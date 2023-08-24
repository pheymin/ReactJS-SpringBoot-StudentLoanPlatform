package com.example.student.loan.model;

public class AdminDTO {
    private Integer adminID;
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

    public AdminDTO() {
        }

    public AdminDTO(Integer adminID, String name, String email, String password, String dob, String ic, String phone, String bankName, String bankAcc, String userType, String city, String street, String state, String postcode, Integer status) {
        this.adminID = adminID;
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

    public static AdminDTO createDTO(Admin admin) {
        AdminDTO dto = new AdminDTO(
                admin.getAdminID(),
                admin.getUser().getName(),
                admin.getUser().getEmail(),
                admin.getUser().getPassword(),
                admin.getUser().getDob(),
                admin.getUser().getIc(),
                admin.getUser().getPhone(),
                admin.getUser().getBankName(),
                admin.getUser().getBankAcc(),
                admin.getUser().getUserType(),
                admin.getUser().getCity(),
                admin.getUser().getStreet(),
                admin.getUser().getState(),
                admin.getUser().getPostcode(),
                admin.getUser().getStatus()
        );
        return dto;
    }

    public Integer getAdminID() {
        return adminID;
    }

    public void setAdminID(Integer adminID) {
        this.adminID = adminID;
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
