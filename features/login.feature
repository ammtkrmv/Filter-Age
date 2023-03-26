Feature: Login Test

  Scenario: Sign in with accurate login credentials

    Given Users have accessed the login page
    When Users authenticate using the username 'Admin' and password 'Admin@Navi'
    Then Users should access the dashboard page after logging in
