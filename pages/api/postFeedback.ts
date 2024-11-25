import { NextApiRequest, NextApiResponse } from 'next'
import { buildClient } from '@datocms/cma-client-node'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    const client = buildClient({
      apiToken: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN ?? '',
    })

    const record = await client.items.create({
      item_type: { type: 'item_type', id: 'X-TC4MkLRPO0dvmH_7JmrQ' },
      naam: req.body.naam,
      opmerking: req.body.opmerking,
    })

    res.status(200).json(record)
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error posting feedback to DatoCMS: ${error}` })
  }
}
