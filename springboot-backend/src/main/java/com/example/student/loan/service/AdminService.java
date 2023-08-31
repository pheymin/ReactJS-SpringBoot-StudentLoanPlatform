package com.example.student.loan.service;

import com.example.student.loan.model.Admin;
import com.example.student.loan.model.AdminDTO;
import com.example.student.loan.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {
    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public AdminDTO getAdminDTOById(Integer id) {
        Admin admin = adminRepository.findById(id).orElse(null);
        if(admin == null) return null;
        return AdminDTO.createDTO(admin);
    }

    public Admin getAdminById(Integer id) {
        return adminRepository.findById(id).orElse(null);
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Integer id, Admin admin) {
        admin.setAdminID(id);
        return adminRepository.save(admin);
    }

    public void deleteAdmin(Integer id) {
        adminRepository.deleteById(id);
    }
}
