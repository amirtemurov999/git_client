const g = (id) => document.getElementById(id)

let input = g('input')
let btn = g('btn').addEventListener('click', findUser)

window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        findUser()
    }
})

async function findUser() {
    if (input.value !== '') {
        const natija = await (await fetch(`https://api.github.com/users/${input.value}`)).json()
        g("status").innerText = natija.bio
        g("avatar").setAttribute("src", natija.avatar_url)
        g("name").innerText = natija.name
        g("login").innerText = "@" + natija.login
        g("joined").innerText = natija.created_at
        g("repos").innerText = natija.public_repos
        g("wers").innerText = natija.followers
        g("wing").innerText = natija.following
        g("loc").innerText = natija.location
        g("twit").innerText = natija.twitter_username
        g("git").innerText = natija.blog
        g("hub").innerText = natija.company
    }
}