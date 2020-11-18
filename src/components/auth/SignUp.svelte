<script>
  export let authUrl;
  export let login;
  export let secret;
  export let email;
</script>

<form action={authUrl} method="post">
  <div class="auth_container">
    <label for="auth_username">Username</label>
    <input type="text" placeholder="Enter Username" name="auth_username" value={login} required>
      
    <label for="auth_email">Email</label>
    <input type="email" placeholder="Enter Email" name="auth_email" value={email} required>

    <label for="auth_secret">Password</label>
    <input type="password" placeholder="Enter Password" name="auth_secret" value={secret} required>
  </div>

  <div class="auth_submit">
    <button class="auth_submit-button" type="submit">Login</button>
  </div>
</form>
