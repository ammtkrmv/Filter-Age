Feature: Client Test
    Scenario: Create client
        Given Users have accessed the client page
        When Users click add client
        And Users input client data
        And Users click save button
        Then Users should see create success message

    Scenario: View client
        Given Users have accessed the client page
        When Users click client data
        Then Users should see client detail data
    
    Scenario: Edit client
        Given Users have accessed the client page
        When Users click client data
        And Users change client data
        And Users click save button
        Then Users should see update success message

    Scenario: Check age displayed
        Given Users have accessed the client page
        Then the website display client age