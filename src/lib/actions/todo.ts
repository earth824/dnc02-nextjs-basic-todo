'use server';

import prisma from '@/lib/db/prisma';
import { transformTodoFormSchema } from '@/lib/schemas/todo';

export async function createTodo(input: unknown) {
  const parsed = transformTodoFormSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false };
  }

  await prisma.todo.create({ data: parsed.data });
}
