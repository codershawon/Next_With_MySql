import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const GET = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Database connected successfully');

    // Fetch data for the Get model
    const gets = await prisma.post.findMany();

    return NextResponse.json({ data: gets });
  } catch (error: any) {
    console.error('Error fetching Gets:', error);

    return NextResponse.json(
      {
        error: 'Failed to fetch Gets',
        details: error?.message || 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
};
