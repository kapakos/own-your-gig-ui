<script>
  export let user;
  const {
    username,
    email,
    firstname,
    lastname,
    userrole,
  } = user;
</script>

<div class='users__user'>
  <div>{username}</div>
  <div>{email}</div>
  <div>{firstname}</div>
  <div>{lastname}</div>
  <div>{userrole}</div>
</div>

<style>
  .users__user {
    margin-bottom: 20px;
  }
</style>
