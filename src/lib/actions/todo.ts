'use server';

import prisma from '@/lib/db/prisma';
import { transformTodoFormSchema } from '@/lib/schemas/todo';
import { refresh, revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTodo(input: unknown) {
  const parsed = transformTodoFormSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false };
  }

  await prisma.todo.create({ data: parsed.data });
  // return { success: true };
  redirect('/todo');
}

export async function updateTodo(id: number, input: unknown) {
  const parsed = transformTodoFormSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false };
  }

  await prisma.todo.update({ data: parsed.data, where: { id } });
  // return { success: true };
  redirect('/todo');
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({ where: { id } });
  // refresh();
  revalidatePath('/todo');
}
