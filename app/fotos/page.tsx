import Fotos from '@/components/Pages/Fotos'
import { performRequest } from '@/datocms/performRequest'
import { EVENT_FOTOS_CONTENT_QUERY } from '@/datocms/queries'
import { EventFotosPagina } from '@/models/eventFotosPagina'

export default async function FotosPage() {
  const {
    data: { allEventFotos },
  } = await performRequest<{ data: { allEventFotos: EventFotosPagina[] } }>({
    query: EVENT_FOTOS_CONTENT_QUERY,
  })

  return (
    <>
      {allEventFotos.map(eventFotos => (
        <section
          className="min-h-screen bg-white pt-28 md:pl-40 pl-10 md:pr-40 pr-10 pb-28"
          key={eventFotos.id}
        >
          <h1 className="lg:text-4xl text-2xl md:mb-10 mb-6 text-black">
            {eventFotos.eventTitel}
          </h1>

          <Fotos
            fotos={eventFotos.fotos}
            instagramLink={eventFotos.instagramLink}
          />
        </section>
      ))}
    </>
  )
}
