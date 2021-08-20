import type { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'
import redis from '../../lib/redis'

type Data = {
  short?: string
  error?: string
}

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const { long } = req.body
  if (!long) {
    res.status(400).json({
      error: 'Long URL can not be empty',
    })
  } else {
    const short = nanoid(5)
    await redis.set(short, long)
    res.status(200).json({ short })
  }
}
