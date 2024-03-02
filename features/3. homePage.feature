@digital-skola @homepage
Feature: Swag Labs - HomePage - Positive
  Background: User on the home page
    Given Meilani is on the home page

  @positive
  Scenario: As a standard_user, I should successfully add backpack product to cart
    When Meilani click add "backpack" product to cart 
    Then Meilani "backpack" product is added to cart