<script lang="ts">
  import Button from '@/components/Button.svelte'

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

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="wrapper">
  <h1>Welcome to {info.name}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev </a>to read the documentation
  </p>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => handleClick()}>change site name</button
  >
  <Button title="change back title" onClick={() => handleClick('svelte')} />
</div>

<style lang="scss">
  .wrapper {
    h1 {
      color: salmon;
    }
  }
</style>
