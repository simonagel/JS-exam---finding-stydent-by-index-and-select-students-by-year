// Don't change anything in this class

function Student(firstName, lastName, currentStudyYear, index) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.currentStudyYear = currentStudyYear;
  this.grades = [];
  this.index = index;

  this.populateGrades = () => {
    const numberOfGrades = getRandomNumber(15, 20);
    for (let index = 0; index < numberOfGrades; index++) {
      const randomGrade = getRandomNumber(5, 10);
      this.grades.push(randomGrade);
    }
  };

  this.populateGrades();
}

// Don't change anything in this class
