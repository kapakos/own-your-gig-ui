<script>
  let password;
  let email;
  let error;

  const handleLogin = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password })
    })
  }
</script>

<form on:submit|preventDefault='{handleLogin}' method='post'>
  <label>
    Email: 
    <input type="email" bind:value="{email}" required/>
  </label>
  <label>
    Password: 
    <input type="password" bind:value="{password}" required/>
  </label>
  <button type="submit">Login</button>
</form>
