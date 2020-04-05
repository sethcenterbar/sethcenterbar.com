<script>
  export let currentRoute;
  import Navbar from "./Navbar.svelte";
  import About from "./About.svelte";
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  let options = { gaPageViews: true};
</script>

<style>
  @media (min-width: 600px) {
    .content {
      margin-left: 4rem;
      text-align: center;
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .content {
      margin-left: 0;
      text-align: center;
      max-width: 100%;
    }
  }
</style>

<main>
  <Navbar />
  <div class="content">
    <h2>🛠 [Site in active development 4/5/2020] 🛠</h2>
    <Router {routes}/>
  </div>
</main>
