import Image from 'next/image'

export default function EventsPage({data}) {
    return(
        <div>
        <h1>Events</h1>
        {
          data.map((event) => (
            <>
            <a key={event.id} href={`/events/${event.id}`}>
            <Image width={200} height={200} alt={event.title} src={event.image} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            </a>
            </>
          ))
          } 
        </div>
    )
}

export async function getStaticProps() {
  const { events_categories } = await import ('/data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
}