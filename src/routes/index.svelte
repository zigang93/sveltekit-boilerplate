<script lang="ts">
  type TSiteInfo = {
    name: string
  }

  const info: TSiteInfo = {
    name: 'svelte',
  }

  const handleClick = () => {
    info.name = 'new site name'
  }

  $: {
    console.log(`site name: ${info.name}`)
  }
</script>

<h1>Welcome to {info.name}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev </a>to read the documentation
  <button on:click={handleClick}>change site name</button>
</p>
