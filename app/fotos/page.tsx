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
          className="mt-auto flex flex-col justify-center mb-4 lg:pl-40 pl-10 lg:pr-40 pr-10 pt-8 md:pt-4"
          key={eventFotos.id}
        >
          <h1 className="lg:text-4xl text-2xl md:mb-10 mb-6 text-black lg:pt-8">
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
