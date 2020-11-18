import fetch from 'node-fetch';

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res){
  const email = req.body.email;
  const password = req.body.password;
  res.end(`Logged In! ${email} - ${password}`)
}
