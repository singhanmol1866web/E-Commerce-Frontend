function isArmstrong(number) {
    const digits = Array.from(String(number), Number);
    const order = digits.length;

    // Calculate the total sum using array.map()
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);

    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log(
            number + " is not an Armstrong Number");
    }
}

// Input number 1634
isArmstrong(1634);

// Input number 749
isArmstrong(153);

c = 1**3 + 5**3 +3**3
console.log(c)

