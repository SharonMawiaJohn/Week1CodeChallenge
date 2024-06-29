function finalGrade(){
    let result = prompt("Kindly enter the students score interpreted as a percentage: ");
    //Using the if else function in allocating final grades.
    let score;
    if (result>=80){
        score = "A"
    } else if (result>=60){
        score = "B"
    } else if (result>=50){
        score = "C"
    } else if (result>=40){
        score = "D"
    } else if (result<40){
        score = "E"
    }
    alert(`The student's final grade is ${score}`)
}
console.log(finalGrade())
