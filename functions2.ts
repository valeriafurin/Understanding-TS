let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Anna";
// userInput needs to be checkecd before it can be assigned to a specific type unknown -> string
if (typeof userInput === "string") {
  userName = userInput;
}

// never type -> never returns anything like an infinte loop
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured: ", 500);
