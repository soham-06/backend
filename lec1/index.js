
require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

const githubData = {
  "login": "soham-06",
  "id": 137515824,
  "node_id": "U_kgDOCDJTMA",
  "avatar_url": "https://avatars.githubusercontent.com/u/137515824?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/soham-06",
  "html_url": "https://github.com/soham-06",
  "followers_url": "https://api.github.com/users/soham-06/followers",
  "following_url": "https://api.github.com/users/soham-06/following{/other_user}",
  "gists_url": "https://api.github.com/users/soham-06/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/soham-06/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/soham-06/subscriptions",
  "organizations_url": "https://api.github.com/users/soham-06/orgs",
  "repos_url": "https://api.github.com/users/soham-06/repos",
  "events_url": "https://api.github.com/users/soham-06/events{/privacy}",
  "received_events_url": "https://api.github.com/users/soham-06/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-06-23T13:36:05Z",
  "updated_at": "2025-06-21T19:26:59Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('soham24feb')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
