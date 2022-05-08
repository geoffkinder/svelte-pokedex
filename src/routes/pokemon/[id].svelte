<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  type Params = {
    id: string
  }

  export const load: Load<Params> = async ({ params }) => {
    const id = params.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokeman = await res.json()

    return { props: { pokeman } }
  }
</script>

<script lang="ts">
  type pokeman = {
    name: string
    types: Array<{ type: any }>
    height: string
    weight: string
    sprites: any
  }

  export let pokeman: pokeman

  const type = pokeman.types[0].type.name
</script>

<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
  <p>
    Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> |
    Weight: <strong>{pokeman.weight}</strong>
  </p>
  <img
    class="card-image"
    src={pokeman.sprites['front_default']}
    alt={pokeman.name}
  />
</div>
