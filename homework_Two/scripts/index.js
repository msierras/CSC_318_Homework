// Gets the values for grade that user input

function calculateGPA() {
    event.preventDefault(); // Prevents inputs from being deleted when submit button is pressed
    

    // These are the grade inputs 
    let grade_One = parseFloat(document.getElementById("grade_One").value);
    let grade_Two = parseFloat(document.getElementById("grade_Two").value);
    let grade_Three = parseFloat(document.getElementById("grade_Three").value);
    let grade_Four = parseFloat(document.getElementById("grade_Four").value);
    let grade_Five = parseFloat(document.getElementById("grade_Five").value);
    let grade_Six = parseFloat(document.getElementById("grade_Six").value);
    let grade_Seven = parseFloat(document.getElementById("grade_Seven").value);
    let grade_Eight = parseFloat(document.getElementById("grade_Eight").value);
    
    if(isNaN(grade_One)){
        grade_One = 0.0
    }
    if(isNaN(grade_Two)){
        grade_Two = 0.0
    }
    if(isNaN(grade_Three)){
        grade_Three = 0.0
    }
    if(isNaN(grade_Four)){
        grade_Four = 0.0
    }
    if(isNaN(grade_Five)){
        grade_Five = 0.0
    }
    if(isNaN(grade_Six)){
        grade_Six = 0.0
    }
    if(isNaN(grade_Seven)){
        grade_Seven = 0.0
    }
    if(isNaN(grade_Eight)){
        grade_Eight = 0.0
    }


    console.log('Grades:', grade_One, grade_Two, grade_Three, grade_Four, grade_Five, grade_Six, grade_Seven, grade_Eight);

    // Declaring letter grade variables for ranges of percentages 
    let letter_Grade_One; 
    let letter_Grade_Two; 
    let letter_Grade_Three; 
    let letter_Grade_Four; 
    let letter_Grade_Five; 
    let letter_Grade_Six; 
    let letter_Grade_Seven; 
    let letter_Grade_Eight;
    
    
    // TRY AND AUTOMATE THIS WHEN YOU HAVE TIME!!
    if(grade_One >= 93 && grade_One <= 100){
        letter_Grade_One = 4.00; 
    }
    else if (grade_One >= 90 && grade_One <= 92){
        letter_Grade_One = 3.70
    }
    else if (grade_One >= 87 && grade_One <= 89){
        letter_Grade_One = 3.30 
    }
    else if (grade_One >= 83 && grade_One <= 86){
        letter_Grade_One = 3.00; 
    } 
    else if (grade_One >= 80 && grade_One <= 82){
        letter_Grade_One = 2.70;
    }
    else if(grade_One >= 77 && grade_One <= 79){
        letter_Grade_One = 2.30; 
    }
    else if (grade_One >= 73 && grade_One <= 76){
        letter_Grade_One = 2.00;
    }
    else if (grade_One >= 70 && grade_One <= 72){
        letter_Grade_One = 1.70
    }
    else if (grade_One >= 67 && grade_One <= 69){
        letter_Grade_One = 1.30; 
    }
    else if (grade_One >= 63 && grade_One <= 66){
        letter_Grade_One = 1.00;
    }
    else if (grade_One >= 60 && grade_One <= 62){
        letter_Grade_One = 0.70
    }
    else if (grade_One < 60){
        letter_Grade_One = 0.00; 
    }


    if(grade_Two >= 93 && grade_Two <= 100){
        letter_Grade_Two = 4.00; 
    }
    else if (grade_Two >= 90 && grade_Two <= 92){
        letter_Grade_Two = 3.70
    }
    else if (grade_Two >= 87 && grade_Two <= 89){
        letter_Grade_Two = 3.30 
    }
    else if (grade_Two >= 83 && grade_Two <= 86){
        letter_Grade_Two = 3.00; 
    } 
    else if (grade_Two >= 80 && grade_Two <= 82){
        letter_Grade_Two = 2.70;
    }
    else if(grade_Two >= 77 && grade_Two <= 79){
        letter_Grade_Two = 2.30; 
    }
    else if (grade_Two >= 73 && grade_Two <= 76){
        letter_Grade_Two = 2.00;
    }
    else if (grade_Two >= 70 && grade_Two <= 72){
        letter_Grade_Two = 1.70
    }
    else if (grade_Two >= 67 && grade_Two <= 69){
        letter_Grade_Two = 1.30; 
    }
    else if (grade_Two >= 63 && grade_Two <= 66){
        letter_Grade_Two = 1.00;
    }
    else if (grade_Two >= 60 && grade_Two <= 62){
        letter_Grade_Two = 0.70
    }
    else if (grade_Two < 60){
        letter_Grade_Two = 0.00; 
    }
  

    if(grade_Three >= 93 && grade_Three <= 100){
        letter_Grade_Three = 4.00; 
    }
    else if (grade_Three >= 90 && grade_Three <= 92){
        letter_Grade_Three = 3.70
    }
    else if (grade_Three >= 87 && grade_Three <= 89){
        letter_Grade_Three = 3.30 
    }
    else if (grade_Three >= 83 && grade_Three <= 86){
        letter_Grade_Three = 3.00; 
    } 
    else if (grade_Three >= 80 && grade_Three <= 82){
        letter_Grade_Three = 2.70;
    }
    else if(grade_Three >= 77 && grade_Three <= 79){
        letter_Grade_Three = 2.30; 
    }
    else if (grade_Three >= 73 && grade_Three <= 76){
        letter_Grade_Three = 2.00;
    }
    else if (grade_Three >= 70 && grade_Three <= 72){
        letter_Grade_Three = 1.70
    }
    else if (grade_Three >= 67 && grade_Three <= 69){
        letter_Grade_Three = 1.30; 
    }
    else if (grade_Three >= 63 && grade_Three <= 66){
        letter_Grade_Three = 1.00;
    }
    else if (grade_Three >= 60 && grade_Three <= 62){
        letter_Grade_Three = 0.70
    }
    else if (grade_Three < 60){
        letter_Grade_Three = 0.00; 
    }
    

    if(grade_Four >= 93 && grade_Four <= 100){
        letter_Grade_Four = 4.00; 
    }
    else if (grade_Four >= 90 && grade_Four <= 92){
        letter_Grade_Four = 3.70
    }
    else if (grade_Four >= 87 && grade_Four <= 89){
        letter_Grade_Four = 3.30 
    }
    else if (grade_Four >= 83 && grade_Four <= 86){
        letter_Grade_Four = 3.00; 
    } 
    else if (grade_Four >= 80 && grade_Four <= 82){
        letter_Grade_Four = 2.70;
    }
    else if(grade_Four >= 77 && grade_Four <= 79){
        letter_Grade_Four = 2.30; 
    }
    else if (grade_Four >= 73 && grade_Four <= 76){
        letter_Grade_Four = 2.00;
    }
    else if (grade_Four >= 70 && grade_Four <= 72){
        letter_Grade_Four = 1.70
    }
    else if (grade_Four >= 67 && grade_Four <= 69){
        letter_Grade_Four = 1.30; 
    }
    else if (grade_Four >= 63 && grade_Four <= 66){
        letter_Grade_Four = 1.00;
    }
    else if (grade_Four >= 60 && grade_Four <= 62){
        letter_Grade_Four = 0.70
    }
    else if (grade_Four < 60){
        letter_Grade_Four = 0.00; 
    }


    if(grade_Five >= 93 && grade_Five <= 100){
        letter_Grade_Five = 4.00; 
    }
    else if (grade_Five >= 90 && grade_Five <= 92){
        letter_Grade_Five = 3.70
    }
    else if (grade_Five >= 87 && grade_Five <= 89){
        letter_Grade_Five = 3.30 
    }
    else if (grade_Five >= 83 && grade_Five <= 86){
        letter_Grade_Five = 3.00; 
    } 
    else if (grade_Five >= 80 && grade_Five <= 82){
        letter_Grade_Five = 2.70;
    }
    else if(grade_Five >= 77 && grade_Five <= 79){
        letter_Grade_Five = 2.30; 
    }
    else if (grade_Five >= 73 && grade_Five <= 76){
        letter_Grade_Five = 2.00;
    }
    else if (grade_Five >= 70 && grade_Five <= 72){
        letter_Grade_Five = 1.70
    }
    else if (grade_Five >= 67 && grade_Five <= 69){
        letter_Grade_Five = 1.30; 
    }
    else if (grade_Five >= 63 && grade_Five <= 66){
        letter_Grade_Five = 1.00;
    }
    else if (grade_Five >= 60 && grade_Five <= 62){
        letter_Grade_Five = 0.70
    }
    else if (grade_Five < 60){
        letter_Grade_Five = 0.00; 
    }


    if(grade_Six >= 93 && grade_Six <= 100){
        letter_Grade_Six = 4.00; 
    }
    else if (grade_Six >= 90 && grade_Six <= 92){
        letter_Grade_Six = 3.70
    }
    else if (grade_Six >= 87 && grade_Six <= 89){
        letter_Grade_Six = 3.30 
    }
    else if (grade_Six >= 83 && grade_Six <= 86){
        letter_Grade_Six = 3.00; 
    } 
    else if (grade_Six >= 80 && grade_Six <= 82){
        letter_Grade_Six = 2.70;
    }
    else if(grade_Six >= 77 && grade_Six <= 79){
        letter_Grade_Six = 2.30; 
    }
    else if (grade_Six >= 73 && grade_Six <= 76){
        letter_Grade_Six = 2.00;
    }
    else if (grade_Six >= 70 && grade_Six <= 72){
        letter_Grade_Six = 1.70
    }
    else if (grade_Six >= 67 && grade_Six <= 69){
        letter_Grade_Six = 1.30; 
    }
    else if (grade_Six >= 63 && grade_Six <= 66){
        letter_Grade_Six = 1.00;
    }
    else if (grade_Six >= 60 && grade_Six <= 62){
        letter_Grade_Six = 0.70
    }
    else if (grade_Six < 60){
        letter_Grade_Six = 0.00; 
    }


    if(grade_Seven >= 93 && grade_Seven <= 100){
        letter_Grade_Seven = 4.00; 
    }
    else if (grade_Seven >= 90 && grade_Seven <= 92){
        letter_Grade_Seven = 3.70
    }
    else if (grade_Seven >= 87 && grade_Seven <= 89){
        letter_Grade_Seven = 3.30 
    }
    else if (grade_Seven >= 83 && grade_Seven <= 86){
        letter_Grade_Seven = 3.00; 
    } 
    else if (grade_Seven >= 80 && grade_Seven <= 82){
        letter_Grade_Seven = 2.70;
    }
    else if(grade_Seven >= 77 && grade_Seven <= 79){
        letter_Grade_Seven = 2.30; 
    }
    else if (grade_Seven >= 73 && grade_Seven <= 76){
        letter_Grade_Seven = 2.00;
    }
    else if (grade_Seven >= 70 && grade_Seven <= 72){
        letter_Grade_Seven = 1.70
    }
    else if (grade_Seven >= 67 && grade_Seven <= 69){
        letter_Grade_Seven = 1.30; 
    }
    else if (grade_Seven >= 63 && grade_Seven <= 66){
        letter_Grade_Seven = 1.00;
    }
    else if (grade_Seven >= 60 && grade_Seven <= 62){
        letter_Grade_Seven = 0.70
    }
    else if (grade_Seven < 60){
        letter_Grade_Seven = 0.00; 
    }


    if(grade_Eight >= 93 && grade_Eight <= 100){
        letter_Grade_Eight = 4.00; 
    }
    else if (grade_Eight >= 90 && grade_Eight <= 92){
        letter_Grade_Eight = 3.70
    }
    else if (grade_Eight >= 87 && grade_Eight <= 89){
        letter_Grade_Eight = 3.30 
    }
    else if (grade_Eight >= 83 && grade_Eight <= 86){
        letter_Grade_Eight = 3.00; 
    } 
    else if (grade_Eight >= 80 && grade_Eight <= 82){
        letter_Grade_Eight = 2.70;
    }
    else if(grade_Eight >= 77 && grade_Eight <= 79){
        letter_Grade_Eight = 2.30; 
    }
    else if (grade_Eight >= 73 && grade_Eight <= 76){
        letter_Grade_Eight = 2.00;
    }
    else if (grade_Eight >= 70 && grade_Eight <= 72){
        letter_Grade_Eight = 1.70
    }
    else if (grade_Eight >= 67 && grade_Eight <= 69){
        letter_Grade_Eight = 1.30; 
    }
    else if (grade_Eight >= 63 && grade_Eight <= 66){
        letter_Grade_Eight = 1.00;
    }
    else if (grade_Eight >= 60 && grade_Eight <= 62){
        letter_Grade_Eight = 0.70
    }
    else if (grade_Eight < 60){
        letter_Grade_Eight = 0.00; 
    }


    // These are the credit inputs 
    let credits_One = parseFloat(document.getElementById("credits_One").value);
    let credits_Two = parseFloat(document.getElementById("credits_Two").value);
    let credits_Three = parseFloat(document.getElementById("credits_Three").value);
    let credits_Four = parseFloat(document.getElementById("credits_Four").value);
    let credits_Five = parseFloat(document.getElementById("credits_Five").value);
    let credits_Six = parseFloat(document.getElementById("credits_Six").value);
    let credits_Seven = parseFloat(document.getElementById("credits_Seven").value);
    let credits_Eight = parseFloat(document.getElementById("credits_Eight").value);

    if (isNaN(credits_One)){
        credits_One = 0.0
    }
    if (isNaN(credits_Two)){
        credits_Two = 0.0
    }
    if (isNaN(credits_Three)){
        credits_Three = 0.0
    }
    if (isNaN(credits_Four)){
        credits_Four = 0.0
    }
    if (isNaN(credits_Five)){
        credits_Five = 0.0
    }
    if (isNaN(credits_Six)){
        credits_Six = 0.0
    }
    if (isNaN(credits_Seven)){
        credits_Seven = 0.0
    }
    if (isNaN(credits_Eight)){
        credits_Eight = 0.0
    }

    console.log('Credits:', credits_One, credits_Two, credits_Three, credits_Four, credits_Five, credits_Six, credits_Seven, credits_Eight);


    let totalCredits = credits_One + credits_Two + credits_Three + credits_Four + credits_Five + credits_Six + credits_Seven + credits_Eight;
    let totalGradePoints = letter_Grade_One * credits_One + letter_Grade_Two * credits_Two + letter_Grade_Three * credits_Three + letter_Grade_Four * credits_Four + letter_Grade_Five * credits_Five + letter_Grade_Six * credits_Six + letter_Grade_Seven * credits_Seven + letter_Grade_Eight * credits_Eight;
    
    let gpa = totalGradePoints / totalCredits;
    alert(gpa);
}



