class Student {  
    public id: number;  
    private studName: string;  
    constructor(id: number, name: string){  
    this.id = id;  
    this.studName = name;  
    }  
    public display() {  
    return (`My ID: ${this.id}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student: Student = new Student(1, "Reshmy");  
    console.log(student.display());  