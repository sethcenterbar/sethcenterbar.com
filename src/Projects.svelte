<script>
  import { onMount } from "svelte";
  import GithubCard from "./GithubCard.svelte";
  let allRepos;
  let repos;

  onMount(async () => {
    fetch(`https://api.github.com/users/sethcenterbar/repos`)
      .then(r => r.json())
      .then(data => {
        repos = data.filter(e => {
          return e.fork === false;
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
</script>

<style>
  main {
    margin: 0 auto;
  }
</style>

<main>
  {#if repos}
    {#each repos as repo}
      <li>{repo.name} -> {repo.description}</li>
      <GithubCard
        repo={repo.name}
        description={repo.description}
        link={repo.html_url} />
    {/each}
  {:else}
    <p>loading...</p>
  {/if}
  <p />

</main>
