export default function CategoryPage() {
    return (
        <>
            <h1>Category page</h1>
        </>
    )
}

export async function getStaticPaths() {
    const {events_categories} = await import ('/data/data.json')
    const allPaths = events_categories.map(event => {
        return {
            params: {
                category: event.id.toString()
            }
        }
    })
    console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {allEvents} = await import ('/data/data.json');
    const id = context?.params.category;    
    const data = allEvents.filter(event => event.city === id)
    console.log(data)
    return {
        props: {
            data
        }
    }
}