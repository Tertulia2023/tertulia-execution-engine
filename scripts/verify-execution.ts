 import { execution } from "../src/domain/execution.example.js";

if (execution.id !== "execution-210v") {
  throw new Error("Execution id is invalid.");
}

if (execution.title !== "Projeto Ação 210V") {
  throw new Error("Execution title is invalid.");
}

console.log("EXECUTION TEST SUCCESS");