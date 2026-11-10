## Combining Union (|) and Intersection (&) Types in TypeScript

------   Introduction

One interesting feature of typescript is that we can combine different types to create more flexible structures

Two important operators for this are Union (|) and Intersection (&). 
They may look similar, but they have different purposes.

A Union type means a value can be one of several types. 

example:
type Status = "pending" | "approved" | "rejected"

let applicationStatus: Status = "approved"


the variable can only accept one of these three values.

An Intersection type combines multiple types into one.It means an object must contain all required properties

Example......

type User = {
  name: string
}

type Employee = {
  employeeId: number
}

type Staff = User & Employee


Practical Example , Combining Both

using both operators in a simple employee management example.

type BasicInfo = {
  name: string
  email: string}

type EmployeeRole = {department: string}

type Employee = BasicInfo & EmployeeRole;

type EmployeeStatus = "active" | "inactive"

type EmployeeProfile = Employee & {
  status: EmployeeStatus}

const staff: EmployeeProfile = {

  name: "Junaeid",
  email: "junaeid@example.com",
  department: "IT",
  status: "active"

}
Intersection (&) combines employee information, while Union (|) limits the status to two possible values.


_______Conclusion

Union and Intersection types are very helpful in real projects. I think using them together makes code more organized and easier to manage.