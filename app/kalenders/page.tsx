import Kalenders from "@/components/Pages/Kalenders";
import { performRequest } from "@/datocms/performRequest";
import { KALENDER_CONTENT_QUERY } from "@/datocms/queries";
import { AllKalenders } from "@/models/allKalenders";

export default async function KalendersPage() {
  const { data: { allKalenders } } = await performRequest<{ data: { allKalenders: AllKalenders[] } }>({ query: KALENDER_CONTENT_QUERY })

  return (
    <Kalenders allKalenders={allKalenders} />
  )
}