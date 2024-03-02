@digital-skola @login
Feature: Swag Labs - Login - Positive
  Background: User on the login page
    Given Meilani is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Meilani login with "standard_user" credential
    Then Meilani should see home page

  @positive
  Scenario: As a problem_user, I should successfully login
    When Meilani login with "problem_user" credential
    Then Meilani should see home page
