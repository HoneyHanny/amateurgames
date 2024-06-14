import { MemoryStore, TextHill } from '@texthill/core'

const getGames = async () => {
  const res = await fetch('https://www.freetogame.com/api/games')
  if (!res) {
    throw new Error('Failed to fetch games')
  }
  const json = await res.text()
  return JSON.parse(json)
}

const getGamesByName = async (query: string) => {
  const games = await getGames()
  const th = new TextHill(new MemoryStore())

  games.map(async (game: any) => {
    await th.feedDoc(game.title, game)
  })

  return await th.search(query)
}

export { getGames, getGamesByName }