function detectSpeed(speed) {
    const Limit = 70;
    const DemeritPointperKM = 5;
    const maximumdemeritPoints = 12;

    if (speed <= Limit) {
        console.log("Ok");
    } else {
        // Finding demerit points
        const demeritPoints = Math.floor((speed - Limit) / DemeritPointperKM);

        if (demeritPoints > maximumdemeritPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}
console.log(detectSpeed(80))