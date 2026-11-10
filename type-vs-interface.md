
## Type Aliases vs Interfaces in TypeScript: What's the Difference

------------Introduction============
Typescript gives developer 2 useful ways of defining custom types: type aliases and interface. they may look almost the same. 
Both help us describe the structure of an object and make code easier to understand. 
But there are some important differences between them.

An interface is mainly used to describe the structure of an object. It can also be extended by another interface.

 <!-- Example -->
interface User {
  name: string,
  age: number
}

interface Manager extends User {
  role: string
}


A type alias can define objects, unions, intersections, and even basic types

type User = {
  name: string
  age: number
}

type Status = "active" | "inactive"


One big difference is that interfaces support declaration merging. 
It means we can declare the same interface more than once, and TypeScript will combine them. 
Type aliases does not support this feature.

===== When Should You Choose One?

Choose interfaces when working with object structures, especially when building reusable component or class structure. 

On the other hand, type aliases are more flexible when working with union types, primitive types, or complex combinations.

==== Conclusion

Both are useful, and there is no need to choose only one. It depends on the situation and the project type