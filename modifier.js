var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.studName = name;
    }
    Student.prototype.display = function () {
        return ("My unique code: " + this.id + ", my name: " + this.studName + ".");
    };
    return Student;
}());
var student = new Student(1, "Reshmy");
console.log(student.display());
