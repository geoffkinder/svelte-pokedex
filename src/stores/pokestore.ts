import { writable } from 'svelte/store'

type pokemonData = {
  name: string
  url: string
}

export type pokeman = {
  name: string
  id: number
  image: string
}

export const pokemon = writable<Array<pokeman>>([])

const fetchPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150'
  const res = await fetch(url)
  const data = await res.json()
  const loadedPokemon: Array<pokeman> = data.results.map(
    (data: pokemonData, index: number) => ({
      name: data.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    })
  )

  pokemon.set(loadedPokemon)
}

fetchPokemon()
