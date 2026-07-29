import { createExecution } from "../src/domain/Execution.js";
import { createExecutionEvent } from "../src/domain/ExecutionEvent.js";
import {
  execution,
  executionEvent,
} from "../src/domain/execution.example.js";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function assertThrows(action: () => unknown, description: string): void {
  let thrown = false;

  try {
    action();
  } catch {
    thrown = true;
  }

  if (!thrown) {
    throw new Error(`Expected rejection: ${description}`);
  }
}

assert(execution.id === "execution-210v", "Execution id is invalid.");
assert(execution.title === "Projeto Ação 210V", "Execution title is invalid.");
assert(
  execution.events.length === 1,
  "Execution must expose its event collection.",
);
assert(
  execution.events[0] === executionEvent,
  "Execution must preserve its event reference.",
);
assert(
  executionEvent.execution.id === execution.id,
  "ExecutionEvent must belong to its Execution.",
);
assert(
  executionEvent.assertions.length === 0,
  "ExecutionEvent may exist without Assertions.",
);

const emptyExecution = createExecution({
  id: "execution-empty",
  title: "Execution without events",
});
assert(
  emptyExecution.events.length === 0,
  "Execution without events must be valid.",
);

const eventWithAssertions = createExecutionEvent({
  id: "event-with-assertions",
  execution: { id: "execution-with-assertions" },
  occurredAt: "2026-07-15",
  assertions: [{ id: "assertion-001" }, { id: "assertion-002" }],
});
assert(
  eventWithAssertions.assertions.length === 2,
  "ExecutionEvent must preserve multiple Assertion references.",
);

assertThrows(
  () => createExecution({ id: "   ", title: "Invalid", events: [] }),
  "blank Execution.id",
);
assertThrows(
  () =>
    createExecution({
      id: "execution-valid",
      title: "   ",
      events: [],
    }),
  "blank Execution.title",
);
assertThrows(
  () =>
    createExecutionEvent({
      id: "   ",
      execution: { id: "execution-valid" },
      occurredAt: "2026-07-15",
    }),
  "blank ExecutionEvent.id",
);
assertThrows(
  () =>
    createExecutionEvent({
      id: "event-valid",
      execution: { id: "   " },
      occurredAt: "2026-07-15",
    }),
  "blank ExecutionEvent.execution.id",
);
assertThrows(
  () =>
    createExecutionEvent({
      id: "event-valid",
      execution: { id: "execution-valid" },
      occurredAt: "   ",
    }),
  "blank ExecutionEvent.occurredAt",
);
assertThrows(
  () =>
    createExecution({
      id: "execution-a",
      title: "Execution A",
      events: [
        createExecutionEvent({
          id: "event-b",
          execution: { id: "execution-b" },
          occurredAt: "2026-07-15",
        }),
      ],
    }),
  "event ownership mismatch",
);
assertThrows(
  () =>
    createExecutionEvent({
      id: "event-valid",
      execution: { id: "execution-valid" },
      occurredAt: "2026-07-15",
      assertions: [{ id: "   " }],
    }),
  "blank Assertion reference id",
);

console.log("EXECUTION TEST SUCCESS");
