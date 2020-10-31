<script>
  import Task from './Task.svelte';
  export let tasks;
</script>

<h2>Tasks</h2>
<div>
  {#each tasks as task}
    <Task task={task} />
  {/each}
</div>
