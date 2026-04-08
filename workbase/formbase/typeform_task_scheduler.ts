import type { TaskFormInput } from "./taskFormSchemas"
import { TaskFormSchema } from "./taskFormSchemas"
import { v4 as uuidv4 } from "uuid"

/**
 * Processes a Typeform webhook payload to schedule a new task.
 */
export async function handleTypeformSubmission(
  raw: unknown
): Promise<{ success: boolean; message: string; task?: TaskFormInput & { id: string } }> {
  const parsed = TaskFormSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      success: false,
      message: `Validation error: ${parsed.error.issues
        .map((i) => i.message)
        .join("; ")}`,
    }
  }

  const { taskName, taskType, parameters, scheduleCron } = parsed.data

  // Assign unique ID to the task
  const id = uuidv4()
  const task: TaskFormInput & { id: string } = {
    id,
    taskName,
    taskType,
    parameters,
    scheduleCron,
  }

  // Simulated scheduling logic (could be replaced with actual persistence / queue)
  console.log(`Scheduled task: ${JSON.stringify(task, null, 2)}`)

  return {
    success: true,
    message: `Task "${taskName}" scheduled with ID ${id}`,
    task,
  }
}

/**
 * Helper to validate without scheduling.
 */
export function validateTypeformPayload(raw: unknown): {
  valid: boolean
  errors?: string[]
} {
  const parsed = TaskFormSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      valid: false,
      errors: parsed.error.issues.map((i) => i.message),
    }
  }
  return { valid: true }
}
