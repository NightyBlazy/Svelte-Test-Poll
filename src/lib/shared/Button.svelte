<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background: rgba(243, 190, 14, 0.733);
    color: white;
  }
  .secondary {
    color: white;
    background: rgba(224, 17, 17, 0.733);
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: rgba(243, 190, 14, 0.733);
    background: white;
    border: 2px solid rgba(243, 190, 14, 0.733);
  }
  .secondary.inverse {
    color: rgba(224, 17, 17, 0.733);
    background: white;
    border: 2px solid rgba(224, 17, 17, 0.733);
  }
</style>
