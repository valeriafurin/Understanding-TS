/* const person: { // this is sub-optimal. Better to let TS refer the types on its own.
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number] // Tuple
} = {
  name: "Valeria",
  age: 24,
};
*/
enum Role { ADMIN, READ_ONLY, AUTHOR}; // ENUM && custom type. Indeces are by default ike in arrays

const person = {
  name: "Valeria",
  age: 24,
  hobbies: ["Sports", "Sewing"],
  role: Role.ADMIN 
};