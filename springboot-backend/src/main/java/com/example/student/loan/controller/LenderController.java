package com.example.student.loan.controller;

import com.example.student.loan.model.Lender;
import com.example.student.loan.model.LenderDTO;
import com.example.student.loan.repository.LenderRepository;
import com.example.student.loan.service.LenderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/lenders")
public class LenderController {
    private final LenderService lenderService;

    public LenderController(LenderService lenderService) {
        this.lenderService = lenderService;
    }

    @GetMapping
    public ResponseEntity<List<LenderDTO>> getAllLenders() {
        List<Lender> lenders = lenderService.getAllLenders();
        List<LenderDTO> lenderDTOs = new ArrayList<>();

        for (Lender lender : lenders) {
            lenderDTOs.add(LenderDTO.createDTO(lender));
        }

        return ResponseEntity.ok(lenderDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LenderDTO> getLenderById(@PathVariable Integer id) {
        Lender lender = lenderService.getLenderById(id);
        LenderDTO lenderDTO = LenderDTO.createDTO(lender);

        return ResponseEntity.ok(lenderDTO);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<LenderDTO> getLenderByUserId(@PathVariable Integer id) {
        Lender lender = lenderService.findLenderIDByUserID(id);
        LenderDTO lenderDTO = LenderDTO.createDTO(lender);

        return ResponseEntity.ok(lenderDTO);
    }

    @PostMapping
    public ResponseEntity<LenderDTO> createLender(@RequestBody Lender lender) {
        Lender newLender = lenderService.createLender(lender);
        LenderDTO lenderDTO = LenderDTO.createDTO(newLender);

        return ResponseEntity.ok(lenderDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LenderDTO> updateLender(@PathVariable Integer id, @RequestBody Lender lender) {
        Lender updatedLender = lenderService.updateLender(id, lender);
        LenderDTO lenderDTO = LenderDTO.createDTO(updatedLender);

        return ResponseEntity.ok(lenderDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteLender(@PathVariable Integer id) {
        lenderService.deleteLender(id);
    }
}
