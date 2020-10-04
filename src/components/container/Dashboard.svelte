<script lang="javascript">
  import Stories from '../story/Stories.svelte';
  import Users from '../user/Users.svelte';
  import Tasks from '../task/Tasks.svelte';
  import Card from '../common/Card.svelte';
  export let stories;
  export let users;
  export let tasks;
</script>

<div class="dashboard">
  <Card>
    <Stories stories={stories} />
  </Card>
  <Card>
    <Users users={users} />
  </Card>
  <Card>
    <Tasks tasks={tasks} />
  </Card>
</div>

<style type="text/css">
  .dashboard {
    display: flex;
    justify-content: space-between;
  }
</style>
