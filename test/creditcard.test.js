module("CreditCard");

test("luhn", function () {
	expect(2);
	ok(CreditCard.luhn("4111111111111111"));
	equal(CreditCard.luhn("4111111111111112"), false);
});

test("type", function () {
	expect(10);
	equal(CreditCard.type("411"), "visa");
	equal(CreditCard.type("555"), "mastercard");
	equal(CreditCard.type("347"), "amex");
	equal(CreditCard.type("644"), "discover");
	equal(CreditCard.type("385"), false);

	equal(CreditCard.type("4111111111111111", true), "visa");
	equal(CreditCard.type("5555555555554444", true), "mastercard");
	equal(CreditCard.type("378282246310005", true), "amex");
	equal(CreditCard.type("6011111111111117", true), "discover");
	equal(CreditCard.type("38520000023237", true), false);
});

test("valid", function () {
	expect(2);
	equal(CreditCard.valid("4111111111111111"), true);
	equal(CreditCard.type("38520000023237"), false);
});
