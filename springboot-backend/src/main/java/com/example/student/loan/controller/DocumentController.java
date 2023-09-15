package com.example.student.loan.controller;

import com.example.student.loan.model.Document;
import com.example.student.loan.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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

    @GetMapping("/user/{id}")
    public List<Document> getDocumentByUserId(@PathVariable Integer id){ return documentRepository.findByUserID(id);}

    @PutMapping("/{id}")
    public Document updateDocument(@PathVariable Integer id, @RequestBody Document document) {
        document.setDocID(id);
        return documentRepository.save(document);
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(@PathVariable Integer id) {
        documentRepository.deleteById(id);
    }

    @PostMapping
    public String createDocuments(@RequestParam("file") MultipartFile[] files,
                                  @RequestParam("userId") Integer[] userIds,
                                  @RequestParam("docType") String[] docTypes) {
        try {
            // Process and save the uploaded files
            for (int i = 0; i < files.length; i++) {
                MultipartFile file = files[i];
                Integer userId = userIds[i];
                String docType = docTypes[i];

                String fileName = file.getOriginalFilename();
                String relativePath = "react-frontend\\public\\document";
                String frontendBasePath = System.getProperty("user.dir");
                String fullPath = frontendBasePath + File.separator + relativePath;
                fullPath = fullPath.replace("\\springboot-backend", "");
                File uploadDir = new File(fullPath);

                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }

                File destinationFile = new File(uploadDir, fileName);
                file.transferTo(destinationFile);

                // Create a Document object and save it to the database
                Document document = new Document();
                document.setUserID(userId);
                document.setDocumentType(docType);
                document.setFilePath(fileName);
                documentRepository.save(document);
            }

            return "200";
        } catch (IOException e) {
            e.printStackTrace(); // Log the exception for debugging
            return "500"; // Return a 500 error code for an internal server error
        }
    }

    @GetMapping("/check/{id}")
    public ResponseEntity<String> checkUserDocument(@PathVariable Integer id) {
        List<Document> document = documentRepository.findByUserID(id);
        if(document.isEmpty()){
            return ResponseEntity.ok("404");
        }
        else{
            return ResponseEntity.ok("200");
        }
    }
}
