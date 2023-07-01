type Game = {
  id: number
  background_image: string
  rating: number
  number: string
}

const getGames = async () => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`)
  if (!res.ok) {
    throw new Error("failed to fetch")
  }
  const data = await res.json()
  return data.results
}

export default async function Home() {
  const games = await getGames()
  console.log(games)
  return (
    <main>
      <h1>hello</h1>
    </main>
  )
}
