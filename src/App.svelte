<script>
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import CurrentPolls from './components/CurrentPolls.svelte'
    import AddPollForm from './components/AddPollForm.svelte'

  let activeTab = 'currentPolls'

  const changeTab = (e) => {
    activeTab = e.detail
  }
</script>

<Header />
<main class="z-0 xxs:bg-center bg-pattern w-lvw h-lvh relative">
  {#if activeTab === 'currentPolls'}
    <CurrentPolls />
  {:else if activeTab === 'addPoll'}
    <AddPollForm/>
  {/if}
</main>
<Footer on:changeTab={changeTab}/>
