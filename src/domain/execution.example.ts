import { createExecution } from "./Execution.js";
import { createExecutionEvent } from "./ExecutionEvent.js";

const executionReference = Object.freeze({ id: "execution-210v" });

export const executionEvent = createExecutionEvent({
  id: "event-210v-001",
  execution: executionReference,
  occurredAt: "2026-07-15T09:00:00-03:00",
  assertions: [],
});

export const execution = createExecution({
  id: executionReference.id,
  title: "Projeto Ação 210V",
  events: [executionEvent],
});
