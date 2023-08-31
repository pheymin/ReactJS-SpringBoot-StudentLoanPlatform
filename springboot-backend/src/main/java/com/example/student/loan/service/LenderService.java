package com.example.student.loan.service;

import com.example.student.loan.model.Lender;
import com.example.student.loan.model.LenderDTO;
import com.example.student.loan.repository.LenderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LenderService {
    private final LenderRepository lenderRepository;

    public LenderService(LenderRepository lenderRepository) {
        this.lenderRepository = lenderRepository;
    }

    public List<Lender> getAllLenders() {
        return lenderRepository.findAll();
    }

    public LenderDTO getLenderDTOById(Integer id) {
        Lender lender = lenderRepository.findById(id).orElse(null);
        if(lender == null) return null;
        return LenderDTO.createDTO(lender);
    }

    public Lender getLenderById(Integer id) {
        return lenderRepository.findById(id).orElse(null);
    }

    public Lender createLender(Lender lender) {
        return lenderRepository.save(lender);
    }

    public Lender updateLender(Integer id, Lender lender) {
        lender.setLenderID(id);
        return lenderRepository.save(lender);
    }

    public void deleteLender(Integer id) {
        lenderRepository.deleteById(id);
    }

}
