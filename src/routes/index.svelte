<script lang="ts">
  type TSiteInfo = {
    name: string
  }

  const info: TSiteInfo = {
    name: 'svelte',
  }
</script>

<h1>Welcome to {info.name}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev </a>to read the documentation
</p>
