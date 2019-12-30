function main() {

  let students = getPopulatedListOfStudents();
  console.log(students);

  // Your solution starts here...
  body = $("body");
  let divSrch = $("<div>").attr({ "id": "divSrch", "class": "divSrch" })
  body.append(divSrch);
  let srchIndex = $("<input/>").attr({ "placeholder": "Search idex", "type": "text", "id": "srchIndex", "class": "srchIndex" });
  body.append(srchIndex);
  let btnSrch = $("<button>").attr({ "id": "btnSrch", "class": "btnSrch" });
  btnSrch.text("Find student");
  divSrch.append(srchIndex);
  divSrch.append(btnSrch);
  divSrch.append("<br>");

  createButtons();

  let indexList = [];
  let divStudent = $("<div>").attr("id", "students");
  body.append(divStudent);
  showStudents(students);

  $(".btnYear").on("click", event => {
    let year = parseInt(event.target.id, 10);
    showByYear(year);
  });

  function createButtons() {
    let btn1 = $("<button>").attr({ "id": "1", "class": "btnYear" });
    btn1.text("Year 1");
    let btn2 = $("<button>").attr({ "id": "2", "class": "btnYear" });
    btn2.text("Year 2");
    let btn3 = $("<button>").attr({ "id": "3", "class": "btnYear" });
    btn3.text("Year 3");
    let btn4 = $("<button>").attr({ "id": "4", "class": "btnYear" });
    btn4.text("Year 4");
    divSrch.append(btn1);
    divSrch.append(btn2);
    divSrch.append(btn3);
    divSrch.append(btn4);
  }

  function showStudents(relevantStudent) {
    let divStudent = $("#students");
    divStudent.empty();
    for (var i = 0; i < relevantStudent.length; i++) {
      let studentInfo = relevantStudent[i].lastName + "-" + relevantStudent[i].firstName + "-" + relevantStudent[i].index;
      let spanStudent = $("<span>").attr({ "id": relevantStudent[i].lastName, "class": "sinfo" })
      spanStudent.text(studentInfo);
      divStudent.append(spanStudent);
      divStudent.append("<br>");
      indexList.push(relevantStudent[i].index);
    }

    $(".sinfo").on("click", event => {
      let index = event.target.id - 1;
      let clickStudent = students[index];
      showDetails(clickStudent);
    });
  }

  function showByYear(year) {
    let selectedStudents = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].currentStudyYear == year) {
        selectedStudents.push(students[i]);
      }
    }
    showStudents(selectedStudents);
  }

  function showDetails(clickStudent) {
    body.empty();
    let studentTitle = clickStudent.lastName + "-" + clickStudent.firstName + "-" + clickStudent.index;
    let spanTitle = $("<span>").attr("id", "spanTitle");
    spanTitle.text(studentTitle);
    body.append(spanTitle);
    body.append("<br>");
    body.append($("<span>").text("All grades:"));
    gradesList = clickStudent.grades;

    var total = 0;
    for (var i = 0; i < gradesList.length; i++) {
      body.append($("<span>").text(gradesList[i]));
      body.append("<br>");
      total += gradesList[i];
    }

    let avg = total / gradesList.length;
    body.append($("<span>").text("Average grade: " + avg));
  }

  $("#btnSrch").bind('click', { param: 'indexList' }, add_event);
  function add_event(event) {
    let indexStudent = parseInt(srchIndex.val(), 10);
    if (indexList.includes(indexStudent)) {
      let position = indexList.indexOf(indexStudent);
      let foundStudent = students[position];
      showDetails(foundStudent);
    }
    else {
      alert("Не постои студент со тој број на индекс");
    }


  };
}

main();
