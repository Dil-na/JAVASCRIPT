let students = [
    {
        id: 1,
        name: "Rahul",
        age: 22,
        course: "python"
    },
    {
        id: 1,
        name: "Anu",
        age: 21,
        course: "AI"
    }
];
function viewStudents(){
    let result =""
    students.forEach(function(student){
        result +=
        "ID: "+student.id +
        "\nName: "+student.name +
        "\nAge: "+student.age +
        "\nCourse: "+student.course +
        "\n---------------------\n";
    });
    alert(result);
}
function addStudent(){
    let id = Number(prompt("Enter Student ID:"));
    let name =prompt("Enter Student Name:");
    let age = Number(prompt("Enter Student Age:"));
    let course =prompt("Enter Student Course:");
    let student = {
        id:id,
        name:name,
        age:age,
        course:course
    };
    students.push(student);
    alert("Student Added Successfully!");
    console.log(students);
}

function updatesStudent(){
    let id = Number(prompt("Enter Student ID:"));

    let student = students.find(function(student) {
        return student.id ===id;
    });
    if (student) {
        student.name = prompt ("Enter New Name:", student.name);
        student.name = prompt ("Enter New Name:", student.name);
        student.name = prompt ("Enter New Name:", student.name);

    }
}