@digital-skola @login
Feature: Swag Labs - Login - Negative
  Background: User on the login page
    Given Meilani is on the login page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When Meilani login with "locked_out_user" credential
    Then Meilani should see error "Epic sadface: Sorry, this user has been locked out."

  @negative
  Scenario: As a invalid_user, I should get error message
    When Meilani login with "invalid password" credential
    Then Meilani should see error "Epic sadface: Username and password do not match any user in this service"


