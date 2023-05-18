<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items: string[];
  export let activeItem: string;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => dispatch("tabClick", item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d40707;
    border-bottom: 2px solid #d40707;
    padding-bottom: 8px;
  }
</style>
