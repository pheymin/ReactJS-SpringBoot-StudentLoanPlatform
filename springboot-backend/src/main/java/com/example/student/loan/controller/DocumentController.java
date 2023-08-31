package com.example.student.loan.controller;

import com.example.student.loan.model.Document;
import com.example.student.loan.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/documents")
public class DocumentController {
    @Autowired
    private final DocumentRepository documentRepository;

    public DocumentController(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    @GetMapping
    public List<Document> getAllDocuments(){
        return documentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Document getDocumentById(@PathVariable Integer id){ return documentRepository.findById(id).orElse(null);}

    @PutMapping("/{id}")
    public Document updateDocument(@PathVariable Integer id, @RequestBody Document document) {
        document.setDocumentID(id);
        return documentRepository.save(document);
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(@PathVariable Integer id) {
        documentRepository.deleteById(id);
    }

    @PostMapping
    public Document createDocument(@RequestBody Document document) {
        return documentRepository.save(document);
    }
}
