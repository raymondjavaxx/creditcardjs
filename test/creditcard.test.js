module("CreditCard");

test("luhn", function () {
	expect(2);
	ok(CreditCard.luhn("4111111111111111"));
	ok(!CreditCard.luhn("4111111111111112"));
});

test("type", function () {
	expect(5);
	equal(CreditCard.type("4111111111111111"), "visa");
	equal(CreditCard.type("5555555555554444"), "mastercard");
	equal(CreditCard.type("378282246310005"), "amex");
	equal(CreditCard.type("6011111111111117"), "discover");
	equal(CreditCard.type("38520000023237"), false);
});

test("valid", function () {
	expect(2);
	equal(CreditCard.valid("4111111111111111"), true);
	equal(CreditCard.type("38520000023237"), false);
});
