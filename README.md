
With the first test running by itself, we can see the cookie is set

<img width="1792" alt="Screen Shot 2022-10-19 at 10 10 17 AM" src="https://user-images.githubusercontent.com/3980464/196719201-d630e6f8-c2a0-45cc-b545-bf6befdacf84.png">

But with both together, the cookie is not there. 
This is consistent with current legacy behavior with how [cypress clears cookies](https://docs.cypress.io/api/commands/clearcookies), but should be rehydrated with cy.session.
My guess is due to this being in a `before` block, the session is not called to rehydrate the cookie state, hence it's absence 

<img width="1792" alt="Screen Shot 2022-10-19 at 10 10 29 AM" src="https://user-images.githubusercontent.com/3980464/196719156-7713f94e-3cea-4367-bab5-5df1fdacbc24.png">


Also I ran into the following error intermittently, not sure if possibly related?

<img width="1792" alt="Screen Shot 2022-10-19 at 10 09 33 AM" src="https://user-images.githubusercontent.com/3980464/196719253-5c1a7774-703e-4a01-af16-b76e036e5de8.png">
