const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.client({secret: process.env.FAUNA})

async function run() {
    const results = await client.query(
        q.Create(q.Collection("todos"),{
            data:{
                text:"Whatever",
                done: false,
                owner: "user-test"
            }
        }
        )
    )
    console.log(results)
}

run()