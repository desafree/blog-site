// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  comments?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const slug = req.query.slug;
    const comments = await db
      .collection('comments')
      .find()
      .sort({ date: -1 })
      .toArray();
    const postComments = comments.filter((comment) => {
      if (comment.postSlug === slug) return true;
    });
    client.close();
    res.status(200).json({ comments: JSON.stringify(postComments) });
  }
}
