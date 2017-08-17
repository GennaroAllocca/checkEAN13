function checkEan13(eanCode) {
	// Check if there are only digits
	var ValidChars = "0123456789";
	for (i = 0; i < eanCode.length; i++) {
		digit = eanCode.charAt(i);
		if (ValidChars.indexOf(digit) == -1) {
			return false;
		}
	}

	// should check the length of eanCode
	if (eanCode.length != 13) {
		return false;
	}

	// Get number which has been checked
	numberCheck = eanCode.substring(eanCode.length - 1);
	eanCode = eanCode.substring(0, eanCode.length - 1);

	// Sum all even numbers
	evenNumber = Number(eanCode.charAt(1)) +
	             Number(eanCode.charAt(3)) +
	             Number(eanCode.charAt(5)) +
	             Number(eanCode.charAt(7)) +
	             Number(eanCode.charAt(9)) +
	             Number(eanCode.charAt(11));
	// Multiply evenNumber by 3
	evenNumber *= 3;

	// Sum all odd numbers
	oddNumber = Number(eanCode.charAt(0)) +
	            Number(eanCode.charAt(2)) +
	            Number(eanCode.charAt(4)) +
	            Number(eanCode.charAt(6)) +
	            Number(eanCode.charAt(8)) +
	            Number(eanCode.charAt(10));

	// Sum even and odd
	totalSum = evenNumber + oddNumber;

    // Store the remainder obtained by dividing totalSum by 10
    checkResult = totalSum % 10;
    // If checkResult is not 0 then remove 10
    if (checkResult != 0) {
        checkResult = 10 - checkResult;
    }
	// check if checkResult is equal to numberCheck
	if (checkResult != numberCheck) {
		return false;
	}
    return true;
}
