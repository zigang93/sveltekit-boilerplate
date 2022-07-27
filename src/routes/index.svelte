<script lang="ts">
  type TSiteInfo = {
    name: string
  }

  const info: TSiteInfo = {
    name: 'svelte',
  }

  const handleClick = (name = 'new site name') => {
    info.name = name
  }

  $: {
    console.log(`site name: ${info.name}`)
  }
</script>

<div class="wrapper">
  <h1>Welcome to {info.name}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev </a>to read the documentation
  </p>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => handleClick()}>change site name</button
  >
  <button class="btn btn-blue" on:click={() => handleClick('svelte')}>change back name</button>
</div>

<style lang="scss">
  .wrapper {
    h1 {
      color: salmon;
    }
  }

  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
