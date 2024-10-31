<script>
  import PollStore from '../stores/PollStore'
  import PollCard from './PollCard.svelte'
</script>

<div class="absolute z-10 flex w-full max-h-lvh flex-col items-center xxs:pt-[14rem] xs:pt-[16rem] md:pt-[19rem] gap-10 xxs:pb-20 md:pb-72 lg:pb-96">
  <h1 class="font-h1 text-sm-h1 tracking-lg-h1">Current Polls</h1>
  {#if $PollStore.length}
  {#each $PollStore as poll, index (index)}
    <PollCard {poll} id={index} />
  {/each}
  {:else}
  <div class="flex xxs:w-[80%] flex-col gap-6 justify-center items-center">
    <h2 class="font-h2 text-sm-h2 ">There are currently no polls...</h2>
    <p class="">Click 'Add Poll' below to add some!</p>

  </div>
  {/if}
</div>
