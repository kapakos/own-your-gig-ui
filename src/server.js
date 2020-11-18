import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import session from 'express-session';
import redis from 'redis';
let redisStore = require('connect-redis')(session);
let redisClient = redis.createClient();
dotenv.config();

const { 
  PORT, 
  NODE_ENV, 
  API_URL, 
  AUTH_URL, 
  SESSION_SECRET,
  REDIS_HOST, 
  REDIS_PORT, 
  REDIS_TTL 
} = process.env;
const dev = NODE_ENV === 'development';

redisClient.on('error', (err) => {
  console.log('Redis error: ', err)
});

polka() // You can also use Express
	.use(
    json(),
    session({
      secret:SESSION_SECRET,
      name: '_own_your_gig',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 31536000 }, 
      store: new redisStore({ 
        host: REDIS_HOST, 
        port: REDIS_PORT, 
        client: redisClient, 
        ttl: REDIS_TTL 
      }),
    }),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => ({
        API_URL,
        AUTH_URL,
        token: req.session.token,
      })
    })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
