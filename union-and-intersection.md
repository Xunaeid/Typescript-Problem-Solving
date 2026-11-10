## Combining Union (|) and Intersection (&) Types in TypeScript

### Introduction

One interesting feature of typescript is that we can combine different types to create more flexible structures
<br>
Two important operators for this are Union (|) and Intersection (&). <br>
They may look similar, but they have different purposes.
A Union type means a value can be one of several types. 

example:<br>
`
type Status = "pending" | "approved" | "rejected"`

`let applicationStatus: Status = "approved"`
<br>

the variable can only accept one of these three values.

<br>

An Intersection type combines multiple types into one.It means an object must contain all required properties
<br>
Example

`type User = {
  name: string
}
`

`
type Employee = {
  employeeId: number
}
`
`type Staff = User & Employee`


<br><br>

Practical Example , Combining Both

Using both operators building a simple employee management system. We need basic employee information, department details  and employment status.

`type BasicInfo = {
  name: string
  email: string}
`

`
type EmployeeRole = {department: string}
`

`type Employee = BasicInfo & EmployeeRole;
`

`type EmployeeStatus = "active" | "inactive"
`

`type EmployeeProfile = Employee & {
  status: EmployeeStatus}
`

`const staff: EmployeeProfile = {
  name: "Junaeid",
  email: "junaeid@example.com",
  department: "IT",
  status: "active"
}`


>In this example, Intersection (&) combines employee information, while Union (|) limits the status to two possible values. So, both operators works together to create a more controlled structure.

<br><br>
### Conclusion

Union and Intersection types are very helpful in real projects. I think using them together makes code more organized and easier to manage.
