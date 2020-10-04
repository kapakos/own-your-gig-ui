<script>
  import User from './User.svelte';
  export let users;
</script>
<h2>Users</h2>
<div>
  {#each users as user}
    <User user={user}/>
  {/each}
</div>
