import { buildClient } from '@datocms/cma-client-node'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  try {
    const client = buildClient({
      apiToken: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN ?? '',
    })

    const record = await client.items.update(req.body.id, {
      likes: req.body.likes,
    })

    res.status(200).json(record)
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error posting feedback to DatoCMS: ${error}` })
  }
}
