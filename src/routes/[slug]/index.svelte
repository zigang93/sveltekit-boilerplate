<script lang="ts">
  import { page } from '$app/stores'
  // depand on folder name ==> [slug]
  const { slug } = $page.params
  const { searchParams } = $page.url
</script>

<h1>hello, dynamic page with params: {slug}, query: {searchParams.toString()}</h1>
