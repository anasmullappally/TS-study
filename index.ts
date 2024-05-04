// interface
// interface Details {
//   name: string;
//   age: number;
//   salary: number;
// }
// let userDetails: Details = {
//   name: "a",
//   age: 20,
//   salary: 15_000,
// };
// let userDetails2: Details = {
//   name: "b",
//   age: 25,
//   salary: 20_000,
// };

// // console.log(userDetails, userDetails2);
// function getUsername(userDetails: Details) {}
// getUsername(userDetails);

//type
// type StatusType = "pending" | "success" | "failed";

// const currentStatus: StatusType = "success";

// functions
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// add(2, 2);

// function overloading
// // if we want use same function for different purpose
// function add(num1: string, num2: string): string;
// function add(num1: number, num2: number): number;
// function add(num1: number | string, num2: number | string): string;
// function add(num1: any, num2: any): any {
//   return num1 + num2;
// }

// console.log(add(2, 2)); // 4
// console.log(add("2", "2")); // "22"
// console.log(add("2", 2)); // "22"

//GENERICS

// function getAge<T>(age: T): T {
//   return age;
// }

// getAge<number>(20);
// getAge<string>("20");

// enum

// enum StatusType {
//   pending = 1,
//   success,
//   failed,
// }

// const odSts = StatusType.success;

// const enum StatusType {
//   pending = 1,
//   success,
//   failed,
// }

// const odSts = StatusType.success;

// as const = (type casting)
// let Fname = "Anas" as const;
// Fname = "lallu";

// const StatusType = {
//   PENDING: "pending",
//   COMPLETED: "completed",
//   FAILED: "failed",
// } as const;

// function getStatus(orderID: string, status: keyof typeof StatusType) {
//   // StatusType.COMPLETED = "1";
//   console.log(orderID, "==", StatusType[status]);
// }

// getStatus("12345", "FAILED"); // like union type

//utility types
// type User = {
//   readonly name: string;
//   age: number;
// };

// const userDetails: User = {
//   age: 10,
//   name: "Hello",
// };

// userDetails.name = "hai"

// read only for all
// type User = {
//   name: string;
//   age: number;
// };

// const userDetails: Readonly<User> = {
//   age: 10,
//   name: "Hello",
// };
// userDetails.age = 10;
// userDetails.name = "hai"

// optional for all property
// type User = {
//   name: string;
//   age: number;
// };

// const userDetails: Partial<User> = {
//   // all are optional
// };

// required
// type User = {
//   name: string;
//   age?: number; //optional
// };

// const userDetails: Required<User> = {
//   // all are required
//   age: 25,
//   name: "Hello",
// };

//optional picking

type User = {
  name: string;
  age: number;
};

// const userDetails: Pick<User, "name"> = {
//   // picked  are required
//   name: "Hello",
// };

// type User = {
//   name: string;
//   age: number;
//   salary: number;
// };

// const user: Omit<User, "name" | "salary"> = {
//   age: 25,
//   // salary: 1000,
// };

// type StatusType = "pending" | "completed" | "failed";
// const status1: Exclude<StatusType, "pending" | "completed"> = "failed";

// if we do not know properties
// type Food = Record<string, string>;
// const food: Food = {
//   PiZZA: "aaa",
//   salad: "555",
// };

// type Food = {
//   [index: string]: string;
// };
// const food: Food = {
//   PiZZA: "aaa",
//   salad: "555",
// };

