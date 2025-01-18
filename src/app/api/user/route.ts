import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();
    const createdAt = new Date();
    const updatedAt = new Date();
    const newFeature = await prisma.user.create({
      data: { email, name, password, createdAt, updatedAt },
    });

    return new Response(JSON.stringify(newFeature), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create feature' }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const user = await prisma.user.findMany();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch features' }), {
      status: 500,
    });
  }
}
