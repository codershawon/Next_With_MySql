import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Static data
  const posts = [
    { title: "First Post", content: "This is the first post content." },
    { title: "Second Post", content: "Here comes the second post content." },
    { title: "Third Post", content: "Static data makes seeding easy!" },
  ];

  // Insert data into the Post table
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }

  console.log("Static data has been seeded successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Error seeding data:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
