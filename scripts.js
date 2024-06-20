document.getElementById('addSubject').addEventListener('click', function() {
    addSubject();
});

document.getElementById('calculateCgpa').addEventListener('click', function() {
    calculateCgpa();
});

const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5.5,
    "W": 0,
    "F": 0,
    "Ab": 0,
    "I": 0,
    "*": 0
};

function addSubject() {
    const subjectsContainer = document.getElementById('subjectsContainer');
    const subjectCount = subjectsContainer.children.length + 1;

    const newSubjectDiv = document.createElement('div');
    newSubjectDiv.classList.add('subject');

    const newLabel = document.createElement('label');
    newLabel.textContent = `Subject ${subjectCount}:`;
    newSubjectDiv.appendChild(newLabel);

    const newCreditInput = document.createElement('input');
    newCreditInput.type = 'number';
    newCreditInput.placeholder = 'Credit';
    newCreditInput.classList.add('credit');
    newSubjectDiv.appendChild(newCreditInput);

    const newGradeSelect = document.createElement('select');
    newGradeSelect.classList.add('grade');

    for (const grade in gradePoints) {
        const option = document.createElement('option');
        option.value = grade;
        option.textContent = grade;
        newGradeSelect.appendChild(option);
    }
    newSubjectDiv.appendChild(newGradeSelect);

    subjectsContainer.appendChild(newSubjectDiv);
}

function calculateCgpa() {
    const credits = document.querySelectorAll('.credit');
    const grades = document.querySelectorAll('.grade');
    
    let totalCredits = 0;
    let totalGradePoints = 0;

    credits.forEach((creditInput, index) => {
        const credit = parseFloat(creditInput.value);
        const grade = grades[index].value;

        if (!isNaN(credit) && gradePoints.hasOwnProperty(grade)) {
            totalCredits += credit;
            totalGradePoints += gradePoints[grade] * credit;
        }
    });

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
