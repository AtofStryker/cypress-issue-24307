
With the first test running by itself, we can see the cookie is set

But with both together, the cookie is not there. 
This is consistent with current legacy behavior with how [cypress clears cookies](https://docs.cypress.io/api/commands/clearcookies), but should be rehydrated with cy.session.
My guess is due to this being in a `before` block, the session is not called to rehydrate the cookie state, hence it's absence 

Also I ran into the following error intermittently, not sure if possibly related?