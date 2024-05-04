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
