import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../lib/redis'

type Data = {
  long?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const { query } = req.query
  const [slug] = query
  const long = await redis.get(slug)
  if (!long) {
    res.status(404).json({
      error: 'This page could not be found',
    })
  } else {
    res.status(200).json({ long })
  }
}
