
function multiplyValue(value:number, multiplier?:number) {
    if (multiplier === undefined) {
        return value * 2
    } 
    return value*multiplier 
}


function processInput(value: string | number | boolean) {
    if (typeof(value)=== "string") {
        return value.trim().toLowerCase();
    }
    
    if(typeof(value)=== "number"){
        return value*10
    }
    
    if(typeof(value)=== "boolean"){    
        if (value) {
            return "Active"
        } else {
            return "Inactive"
        }
    }

    
}



function formatCoordinate( value : readonly [number,number,string]) : string {
    const [latitude, longitude, locationName] = value
     
 return  `"Location: ${locationName} (${latitude}, ${longitude})"`
}



function concatenateArrays <T>(...arrays : T[][]) : T[] {
    const newArray:T[]= []
    for(const items of arrays){
        for(const item of items){
            newArray.push(item)
        }
    }
    return newArray
}



interface Course  {
    title : string,
    students : number,   
    isPublished : boolean
}

function getPopularCourses(courses : Course [] , minStudents : number) {

    const newArray = []
    for(const item of courses){

        if (item.isPublished && item.students >= minStudents) {
            newArray.push(item)
        }
    }
    return newArray
}
    


function pluckValues <T, K extends keyof T> (items: T[], key: K) :T[K][] {
    const newArray = []
    for (let index = 0; index < items.length; index++) {
        newArray.push(items[index][key])
        
    }
    return newArray
}

class Employee {
    protected name: string;
    private baseSalary: number
    
    constructor(name:string, baseSalary:number ){
        this.name = name
        this.baseSalary = baseSalary
    }

    getDetails() {return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
}
}

class Manager extends Employee{
    private  department : string

    constructor(
        name: string,
        baseSalary: number,
        department: string
    ){
        super(name, baseSalary)
        this.department = department

    }

    getRoleInfo() {return `Manager of ${this.department}: ${this.name}`}
}


async function validateAgeAsync(age:number) : Promise<string> {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
        
    }
     return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);
     })
}

