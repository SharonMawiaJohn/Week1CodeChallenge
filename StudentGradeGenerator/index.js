function finalGrade(){
    let result = prompt("Kindly enter the students score interpreted as a percentage: ");
    //Using the if else function in allocating final grades.
    let score;
    if (result>=80 && result<=100){
        score = "A"
    } else if (result>=60 && result<=79){
        score = "B"
    } else if (result>=50 && result<=59){
        score = "C"
    } else if (result>=40 && result<=49){
        score = "D"
    } else if (result<40 && result>=0){
        score = "E"
    } else {alert(`The input is invalid`)}
    alert(`The student's final grade is ${score}`)
}
console.log(finalGrade())
