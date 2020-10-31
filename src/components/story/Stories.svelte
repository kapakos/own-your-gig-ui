<script>
  import Story from './Story.svelte';
  export let stories;
</script>

<h2>Stories</h2>
<div>
  {#each stories as story}
    <Story story={story}/>
  {/each}
</div>

