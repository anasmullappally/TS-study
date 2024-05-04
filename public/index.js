"use strict";
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
// any/unknown/never/void/null
// let username: any = "Abc";
// username.push(); // can't use
// let username: unknown = "Abc";
// const newValue = username as string; // typecasting
// newValue.
// never
// function throwError(message: string): never {
//   // its not returning anything
//   throw new Error(message);
// }
//void
// function throwError(message: string): void {
//   // its not returning anything
//   console.log(message);
// }
// type UserData = {
//   name: string;
//   age: number;
//   getUsername: () => string;
//   getAge(): number;
// };
// const currentUser: UserData = {
//   name: "Anas",
//   age: 25,
//   getAge() {
//     return this.age;
//   },
//   getUsername() {
//     return this.name;
//   },
// };
// console.log(currentUser.getUsername());
// let username: string | null = null;
// if (username) {
//   username = "A";
// } else if (username === null) {
//   username = "B";
// }
