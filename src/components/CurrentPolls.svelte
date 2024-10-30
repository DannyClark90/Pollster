<script>
  import PollStore from '../stores/PollStore'
  import PollCard from './PollCard.svelte'
</script>

<div class="absolute z-10 flex w-full flex-col items-center top-[19rem] gap-10">
  <h1 class="font-h1 text-sm-h1 tracking-lg-h1">Current Polls</h1>
  {#each $PollStore as poll, index (index)}
    <PollCard {poll} id={index} />
  {/each}
</div>
