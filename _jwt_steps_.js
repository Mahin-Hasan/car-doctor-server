/*
1. install jsonwebtoken
2. jwt.sign (payload, secret, {expireIn:})
3. token client
4. require('crypto').randomBytes(64) something

===========
## How to store token in the client side
1. memory - ok
2. local storage - ok 
3. cookies: http only - good


==========
1. set cookies with http only. for developement secure: false
2. cors
        app.use(cors({
            origin: ['http://localhost:5173'],
            credentials: true
        }));


3. client side axios setting
 - in axiox set withCredentials: true

*/