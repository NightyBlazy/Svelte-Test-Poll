<script>
  import { slide, scale, fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "./Stores/PollStore";
  import PollDetail from "./PollDetail.svelte";

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    console.log("Component has been mounted");
  });

  onDestroy(() => {
    console.log("Component has been destroyed");
  });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetail {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
