<script context="module">
  export async function preload(page, session) {
    try {
      const api_url = session.API_URL;
      const storyRes = await this.fetch(`${api_url}/api/story`);
      const userRes =  await this.fetch(`${api_url}/api/user`)
      const taskRes =  await this.fetch(`${api_url}/api/task`)
      const stories = await storyRes.json();
      const users = await userRes.json();
      const tasks = await taskRes.json();

      return { stories, users, tasks }
    } catch(err){
      console.log(err)
    }
  }
</script>

<script>
  export let stories;
  export let users;
  export let tasks;
  import Dashboard from '../components/container/Dashboard.svelte';
</script>

<svelte:head>
	<title>Own your gig</title>
</svelte:head>

<h1>Own your gig!</h1>
{#if (stories && users && tasks)}
<Dashboard  stories={stories} users={users} tasks={tasks} />
{:else}
  <p>...Loading</p>
{/if}

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

