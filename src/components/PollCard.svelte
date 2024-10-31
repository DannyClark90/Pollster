<script>
  // @ts-nocheck
  import PollChart from './PollChart.svelte'
  import PollStore from '../stores/PollStore'
  import Button from './Button.svelte'
  export let id
  export let poll

  const deletePoll = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id !== id)
    })
  }
</script>

<article
  class="flex flex-col items-start bg-tertiary4 drop-shadow-md px-10 py-8 gap-3 rounded-2xl"
  {id}
>
  <div class="flex flex-col items-start">
    <h2 class="font-h2 text-sm-h2 tracking-sm-h2">{poll.title}</h2>
    <p>
      {`Total Votes: ${$PollStore[id].optionAVotes + $PollStore[id].optionBVotes}`}
    </p>
  </div>

  <PollChart {id} />

  <div class="flex justify-center w-full">
    <Button buttonText="Delete" on:click={() => deletePoll(poll.id)} />
  </div>
</article>
