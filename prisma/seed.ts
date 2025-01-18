import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert multiple features
  const user = await prisma.user.createMany({
    data: [
      {
        name: 'Shawon Barua',
        email: 'shawonBarua@gmail.com',
        password: 'password',
        createdAt: "2021-10-10T14:48:00.000Z",
        updatedAt: "2021-10-10T14:48:00.000Z",
      },
    ],
  });

  console.log(`Inserted ${user.count} features into the table.`);
}

main()
  .catch((e) => {
    console.error('Error injecting data:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
