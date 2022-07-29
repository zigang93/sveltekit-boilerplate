<script>
  export let title: string
  export let onClick: () => void
</script>

<button class="btn btn-blue" on:click={onClick}>{title}</button>

<style lang="scss">
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  // $font-stack: Helvetica, sans-serif;
  // $primary-color: #333;

  // body {
  //   font: 100% $font-stack;
  //   color: $primary-color;
  // }
</style>
