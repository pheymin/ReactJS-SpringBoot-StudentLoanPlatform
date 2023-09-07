package com.example.student.loan.controller;

import com.example.student.loan.model.Admin;
import com.example.student.loan.dto.AdminDTO;
import com.example.student.loan.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public ResponseEntity<List<AdminDTO>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        List<AdminDTO> adminDTOs = new ArrayList<>();

        for (Admin admin : admins) {
            adminDTOs.add(AdminDTO.createDTO(admin));
        }

        return ResponseEntity.ok(adminDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminDTO> getAdminById(@PathVariable Integer id) {
        Admin admin = adminService.getAdminById(id);
        AdminDTO adminDTO = AdminDTO.createDTO(admin);

        return ResponseEntity.ok(adminDTO);
    }

    @PostMapping
    public ResponseEntity<AdminDTO> createAdmin(@RequestBody Admin admin) {
        Admin newAdmin = adminService.createAdmin(admin);
        AdminDTO adminDTO = AdminDTO.createDTO(newAdmin);

        return ResponseEntity.ok(adminDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminDTO> updateAdmin(@PathVariable Integer id, @RequestBody Admin admin) {
        Admin updatedAdmin = adminService.updateAdmin(id, admin);
        AdminDTO adminDTO = AdminDTO.createDTO(updatedAdmin);

        return ResponseEntity.ok(adminDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Integer id) {
        adminService.deleteAdmin(id);
    }
}
