import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id:0,
    title: 'Favorite Fruit',
    optionA: { title: 'Apple', votes: 40 },
    optionB: { title: 'Banana', votes: 25 },
    totalVotes() {return this.optionA.votes + this.optionB.votes}
  },
])

export default PollStore
