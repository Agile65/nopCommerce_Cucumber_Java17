$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerTest.feature");
formatter.feature({
  "line": 2,
  "name": "Computer menu test case",
  "description": "",
  "id": "computer-menu-test-case",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9722031500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify product arrange in alphabetical order",
  "description": "",
  "id": "computer-menu-test-case;verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select sort by position Name : Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the product arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 393618800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOn(String)"
});
formatter.result({
  "duration": 1198316500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 948294000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 281154000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSeeTheProductArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 3249752700,
  "status": "passed"
});
formatter.after({
  "duration": 949293100,
  "status": "passed"
});
formatter.before({
  "duration": 4365493400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "computer-menu-test-case;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Computers\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add To Cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Text \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select ram \"8GB [+$60.00]\" using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I check Two Check boxes \"Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can see the computer price \"$1,475.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027ADD TO CARD\u0027 Button.",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "After that close the bar clicking on the cross button.",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "MouseHover on \u0027Shopping cart\u0027 and Click on \u0027GO TO CART\u0027 button.",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I can see the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I change the Qty to 2 and Click on \u0027Update shopping cart\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can see the Total \"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on checkbox \u0027I agree with the terms of service\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027CHECKOUT\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I see the Text “Welcome, Please Sign In!”",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027CHECKOUT AS GUEST\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I fill first \"fname\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input Last Name \"lname\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input email \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select country \"country\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input City \"city\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Address \"address1\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input ZipCode \"zipCode1\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I input Telephone \"telNum\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on the \u0027CONTINUE\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Radio Button \u0027Next Day Air($0.00)\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on \u0027CONTINUE\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select Radio Button \u0027Credit Card\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select \u0027Master card\u0027 From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I fill all the details",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should click on \u0027CONTINUE\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I can see \u0027Payment Method\u0027 is “Credit Card”",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I can see \u0027Shipping Method\u0027 is “Next Day Air”",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I can see Total is “$2,950.00”",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I can click on \u0027CONFIRM\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I see the Text “Thank You”",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I see the message “Your order has been successfully processed!”",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click on the \u0027CONTINUE\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I can see the text “Welcome to our store”",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 3187200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOn(String)"
});
formatter.result({
  "duration": 1050532600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 788052500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 294758500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 1089153100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 768126500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessorUsingSelectClass(String)"
});
formatter.result({
  "duration": 309407900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRamUsingSelectClass(String)"
});
formatter.result({
  "duration": 202488100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectHDDRadio(String)"
});
formatter.result({
  "duration": 135800500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectOSRadio(String)"
});
formatter.result({
  "duration": 140396600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 25
    },
    {
      "val": "Total Commander [+$5.00]",
      "offset": 58
    }
  ],
  "location": "ComputerSteps.iCheckTwoCheckBoxesAnd(String,String)"
});
formatter.result({
  "duration": 131215300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iCanSeeTheComputerPrice(String)"
});
formatter.result({
  "duration": 2063359900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARDButton()"
});
formatter.result({
  "duration": 97663100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iCanSeeTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 342589700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.afterThatCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 440729300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.mousehoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1612421300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 184172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iChangeTheQtyToAndClickOnUpdateShoppingCart(int)"
});
formatter.result({
  "duration": 850921100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iCanSeeTheTotal(String)"
});
formatter.result({
  "duration": 209203100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 202377400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUT()"
});
formatter.result({
  "duration": 942580000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSeeTheTextWelcomePleaseSignIn()"
});
formatter.result({
  "duration": 213083900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCHECKOUTASGUESTTab()"
});
formatter.result({
  "duration": 744141600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iFillFirst(String)"
});
formatter.result({
  "duration": 386817400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lname",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iInputLastName(String)"
});
formatter.result({
  "duration": 213634500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iInputEmail(String)"
});
formatter.result({
  "duration": 180234600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 137324400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iInputCity(String)"
});
formatter.result({
  "duration": 188088900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address1",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iInputAddress(String)"
});
formatter.result({
  "duration": 147724700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zipCode1",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iInputZipCode(String)"
});
formatter.result({
  "duration": 111553600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telNum",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iInputTelephone(String)"
});
formatter.result({
  "duration": 124067300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheCONTINUE()"
});
formatter.result({
  "duration": 85806500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "00",
      "offset": 41
    }
  ],
  "location": "ComputerSteps.iClickOnRadioButtonNextDayAir$(int,int)"
});
formatter.result({
  "duration": 433600500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCONTINUE()"
});
formatter.result({
  "duration": 146062100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "duration": 391393100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectMasterCardFromSelectCreditCardDropdown()"
});
formatter.result({
  "duration": 108926100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iFillAllTheDetails()"
});
formatter.result({
  "duration": 2876675500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldClickOnCONTINUE()"
});
formatter.result({
  "duration": 111529800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSeePaymentMethodIsCreditCard()"
});
formatter.result({
  "duration": 522011900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSeeShippingMethodIsNextDayAir()"
});
formatter.result({
  "duration": 116606000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "950",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iCanSeeTotalIs$(int,int,int)"
});
formatter.result({
  "duration": 50392900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCONFIRM()"
});
formatter.result({
  "duration": 95405700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSeeTheTextThankYou()"
});
formatter.result({
  "duration": 879956400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSeeTheMessageYourOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "duration": 84019600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheCONTINUEButton()"
});
formatter.result({
  "duration": 533881600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSeeTheTextWelcomeToOurStore()"
});
formatter.result({
  "duration": 293746200,
  "status": "passed"
});
formatter.after({
  "duration": 771305200,
  "status": "passed"
});
});