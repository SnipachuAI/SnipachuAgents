/**
 * Simple task executor: registers and runs tasks by name.
 */
type Handler = (params: any) => Promise<any>

interface Task {
  id: string
  type: string
  params: any
  retries?: number
}

export class ExecutionEngine {
  private handlers: Record<string, Handler> = {}
  private queue: Task[] = []

  register(type: string, handler: Handler): void {
    if (this.handlers[type]) {
      throw new Error(`Handler already registered for type: ${type}`)
    }
    this.handlers[type] = handler
  }

  unregister(type: string): void {
    delete this.handlers[type]
  }

  enqueue(id: string, type: string, params: any, retries: number = 0): void {
    if (!this.handlers[type]) throw new Error(`No handler for ${type}`)
    this.queue.push({ id, type, params, retries })
  }

  async runAll(): Promise<Array<{ id: string; result?: any; error?: string }>> {
    const results: Array<{ id: string; result?: any; error?: string }> = []
    while (this.queue.length) {
      const task = this.queue.shift()!
      let attempts = 0
      while (attempts <= (task.retries ?? 0)) {
        try {
          const data = await this.handlers[task.type](task.params)
          results.push({ id: task.id, result: data })
          break
        } catch (err: any) {
          attempts++
          if (attempts > (task.retries ?? 0)) {
            results.push({ id: task.id, error: err.message })
          }
        }
      }
    }
    return results
  }

  getPendingTasks(): Task[] {
    return [...this.queue]
  }

  clear(): void {
    this.queue = []
  }
}
