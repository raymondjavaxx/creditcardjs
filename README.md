creditcard.js
===

Simple library for validating credit card numbers and detecting credit card types.

Usage
---

### Detecting Card Type

	CreditCard.type("4111111111111111"); // -> "visa"

### Validating

	CreditCard.valid("4111111111111111"); // -> true
	CreditCard.valid("1234"); // -> false
