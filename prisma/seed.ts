import { PrismaClient } from '@/lib/db/generated/prisma/client';
import { TodoCreateInput } from '@/lib/db/generated/prisma/models';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const data: TodoCreateInput[] = [
  { title: 'Personal Project SRS' },
  { title: 'Final Exam', status: true },
  { title: 'Personal Project ERD' }
];

async function main() {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({ data });
}

main();
