<script>
  import { onMount } from "svelte";
  let repos;

  onMount(async () => {
    await fetch(`https://api.github.com/users/sethcenterbar/repos`)
      .then(r => r.json())
      .then(data => {
        repos = data;
      });
      console.log(typeof repos);
  });
</script>

<style>

</style>

<main>
<p>test</p>
{#if repos}
    {#each repos as repo}
        <li>{repo.name}</li>
    {/each}
{:else}
    <p>loading...</p>
{/if}
<p></p>

</main>
