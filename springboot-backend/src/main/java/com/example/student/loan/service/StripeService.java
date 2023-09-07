package com.example.student.loan.service;

import com.stripe.Stripe;
import com.stripe.model.Account;
import com.stripe.model.AccountLink;
import com.stripe.param.AccountCreateParams;
import com.stripe.param.AccountLinkCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {
    @Value("${STRIPE_SECRET_KEY}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    public String createAccount(String email) throws Exception{
        String testClientId = "ca_OZQBNSooUEdNJMwRaSpAJprqKib2nr7w";
        // Create an Express account for the user
        AccountCreateParams params = new AccountCreateParams.Builder()
                .setType(AccountCreateParams.Type.STANDARD)
                .setCountry("MY")
                .setEmail(email)
                .build();

        Account account = Account.create(params);

        // Generate an account link for onboarding
        AccountLinkCreateParams linkParams = new AccountLinkCreateParams.Builder()
                .setAccount(account.getId())
                .setRefreshUrl("http://localhost:5173/profile")
                .setReturnUrl("http://localhost:5173/")
                .setType(AccountLinkCreateParams.Type.ACCOUNT_ONBOARDING)
                .build();

        AccountLink accountLink = AccountLink.create(linkParams);

        return accountLink.getUrl();
    }
}
