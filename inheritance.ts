class Shape{
    shape():void{
        console.log("Shape ::")
    }
}
class Circle extends Shape{
    circle():void{
        console.log("Circle :")
    }
}
class Area extends Circle{
    display():void{
        console.log("Area :200")
    }
}
let obj = new Area();
obj.shape();
obj.circle();
obj.display();