class CreditCard
  @types = {
    visa: /^4[0-9]{12}([0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[4|7][0-9]{13}$/,
    discover: /^(?:6011|644[0-9]|65[0-9]{2})[0-9]{12}$/
  }

  @type: (number) ->
    for type, regex of @types
      return type if regex.test(number)
    return false

  @luhn: (number) ->
    sum = 0
    odd = true
    for digit in number.split('').reverse()
      digit = parseInt(digit)
      if (odd = !odd)
        digit *= 2
        digit -= 9 if digit > 9
      sum += digit
    sum % 10 == 0

  @valid: (number) ->
    this.type(number) != false && this.luhn(number) 

@CreditCard = CreditCard
