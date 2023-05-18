<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Tabs from "./lib/shared/Tabs.svelte";
  import CreatePollForm from "./lib/CreatePollForm.svelte";
  import PollList from "./lib/PollList.svelte";

  //Tabs
  let items: string[] = ["Current Polls", "Add New Poll"];
  let activeItem: string = "Current Polls";
  const tabClick = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabClick={tabClick} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
