<script>
  import PollStore from './stores/PollStore'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import PollCard from './components/PollCard.svelte'
</script>

<Header />
<main class="z-0 xxs:bg-center bg-pattern w-lvw h-lvh relative">
  <div
    class="absolute z-10 flex w-full flex-col items-center top-[18rem] gap-10"
  >
    <h1 class="font-h1 text-sm-h1 tracking-lg-h1">Current Polls</h1>
    {#each $PollStore as poll, index (index)}
      <PollCard {poll} id={index} />
    {/each}
  </div>
</main>
<Footer />
