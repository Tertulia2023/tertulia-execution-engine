import type { ExecutionEvent } from "./ExecutionEvent.js";

export interface Execution {
  readonly id: string;
  readonly title: string;
  readonly events: readonly ExecutionEvent[];
}

export interface CreateExecutionInput {
  readonly id: string;
  readonly title: string;
  readonly events?: readonly ExecutionEvent[];
}

function requireNonBlank(value: string, field: string): string {
  if (value.trim().length === 0) {
    throw new Error(`${field} must not be blank.`);
  }
  return value;
}

export function createExecution(input: CreateExecutionInput): Execution {
  requireNonBlank(input.id, "Execution.id");
  requireNonBlank(input.title, "Execution.title");

  const events = input.events ?? [];
  for (const event of events) {
    if (event.execution.id !== input.id) {
      throw new Error(
        `ExecutionEvent ${event.id} belongs to ${event.execution.id}, not ${input.id}.`,
      );
    }
  }

  return Object.freeze({
    id: input.id,
    title: input.title,
    events: Object.freeze([...events]),
  });
}
