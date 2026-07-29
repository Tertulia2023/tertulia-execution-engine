export interface ExecutionReference {
  readonly id: string;
}

export interface AssertionReference {
  readonly id: string;
}

export interface ExecutionEvent {
  readonly id: string;
  readonly execution: ExecutionReference;
  readonly occurredAt: string;
  readonly assertions: readonly AssertionReference[];
}

export interface CreateExecutionEventInput {
  readonly id: string;
  readonly execution: ExecutionReference;
  readonly occurredAt: string;
  readonly assertions?: readonly AssertionReference[];
}

function requireNonBlank(value: string, field: string): string {
  if (value.trim().length === 0) {
    throw new Error(`${field} must not be blank.`);
  }
  return value;
}

export function createExecutionEvent(
  input: CreateExecutionEventInput,
): ExecutionEvent {
  requireNonBlank(input.id, "ExecutionEvent.id");
  requireNonBlank(input.execution.id, "ExecutionEvent.execution.id");
  requireNonBlank(input.occurredAt, "ExecutionEvent.occurredAt");

  const assertions = input.assertions ?? [];
  for (const assertion of assertions) {
    requireNonBlank(assertion.id, "AssertionReference.id");
  }

  return Object.freeze({
    id: input.id,
    execution: Object.freeze({ id: input.execution.id }),
    occurredAt: input.occurredAt,
    assertions: Object.freeze(
      assertions.map((assertion) => Object.freeze({ id: assertion.id })),
    ),
  });
}
