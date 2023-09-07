package com.example.student.loan.controller;

import com.example.student.loan.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.student.loan.service.StripeService;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/stripe")
public class StripeController {
    private final StripeService stripeService;

    @Autowired
    public StripeController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @PostMapping("/onboard")
    public String onboardWithStripe(@RequestBody User request) {
        try {
            String email = request.getEmail();
            String accountLinkUrl = stripeService.createAccount(email);
            return accountLinkUrl;
        } catch (Exception e) {
            // Handle errors appropriately
            System.out.println(e.getMessage());
            return "Error: " + e.getMessage();
        }
    }
}
