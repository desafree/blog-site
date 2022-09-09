// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  result?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const newsletterObj = {
      email: email,
      date: new Date(),
    };
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    await db.collection('newsletter').insertOne(newsletterObj);
    client.close();
    res.status(200).json({ result: 'Success' });
  }
}
