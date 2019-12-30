// Don't change anything in this class

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPopulatedListOfStudents() {
  let students = [];
  const numberOfStudents = getRandomNumber(30, 60);
  for (let index = 0; index < numberOfStudents; index++) {
    const currentStudyYear = getRandomNumber(1, 4);

    let randomUniqueIndex = findUniqueIndex(students);

    students.push(
      new Student("Student", index + 1, currentStudyYear, randomUniqueIndex)
    );
  }

  return students;
}

function checkIfGivenIndexAlreadyExists(index, students) {
  return students.find(x => x.index === index) !== undefined;
}

function findUniqueIndex(students) {
  while (true) {
    let randomIndex = getRandomNumber(101, 199);
    if (!checkIfGivenIndexAlreadyExists(randomIndex, students)) {
      return randomIndex;
    }
  }
}

// Don't change anything in this class
