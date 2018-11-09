Feature: Portal user login

    To view dashboard I should login in portal

    Scenario: Login as portal user
        Given I open home page
        When I login using valid credentials
        Then I can see dashboard