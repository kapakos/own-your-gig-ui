<script>
  export let story;
  const {  
    title, 
    design_url, 
    pr_status, 
    story_ticket_url,  
    documentation_url, 
    created_at, 
    story_status,  
    updated_at, 
    description 
  } = story;
</script>

<div class='stories__story'>
  <div>{title}</div>
  <div>{design_url}</div>
  <div>{pr_status}</div>
  <div>{story_ticket_url}</div>
  <div>{documentation_url}</div>
  <div>{created_at}</div>
  <div>{story_status}</div>
  <div>{updated_at}</div>
  <div>{description}</div>
</div>

<style>
  .stories__story {
    margin-bottom: 30px;
  }
</style>
