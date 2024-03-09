'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../utils/prisma';

export async function create(formData: FormData) {
  const input = formData.get('input') as string;
  if (!input.trim()) return;
  try {
    await prisma.todo.create({
      data: {
        title: input,
      },
    });
  } catch (e) {
    console.log(e);
  }
  revalidatePath('/');
}

export async function changeStatus(formData: FormData) {
  try {
    const inputId = formData.get('inputId') as string;
    const todo = await prisma.todo.findUnique({
      where: {
        id: inputId,
      },
    });
    if (!todo) return;

    const updateStatus = !todo?.isCompleted;

    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        isCompleted: updateStatus,
      },
    });
    revalidatePath('/');
    return updateStatus;
  } catch (e) {
    console.log(e);
  }
}

export async function edit(formData: FormData) {
  const input = formData.get('newTitle') as string;
  const inputId = formData.get('inputId') as string;
  try {
    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        title: input,
      },
    });
  } catch (e) {
    console.log(e);
  }
  revalidatePath('/');
}

export async function deletTodo(formData: FormData) {
  const inputId = formData.get('inputId') as string;
  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath('/');
}
