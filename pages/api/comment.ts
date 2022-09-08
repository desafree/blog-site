// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  result: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email;
  const username = req.body.username;
  const comment = req.body.comment;
  const postSlug = req.body.postSlug;
  const date = req.body.date;
  const commentObj = {
    email: email,
    username: username,
    comment: comment,
    postSlug: postSlug,
    date: date,
  };
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bcs0k91.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  await db.collection('comments').insertOne(commentObj);
  client.close();
  res.status(200).json({ result: 'Success' });
}
