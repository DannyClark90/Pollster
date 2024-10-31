<script>
  import PollsIcon from '../assets/polls_icon.svg'
  import AddPollIcon from '../assets/add_poll_icon.svg'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<footer
  class="fixed bottom-0 left-0 flex items-center justify-center z-10 w-full xxs:h-[14%] xs:h-[15%] md:h-[14%]"
>
  <svg
    class="absolute w-full h-full"
    viewBox="0 0 393 85"
    preserveAspectRatio="none"
  >
    <path
      d="M376.625 12.7254L393 11.9228V51.5V85H0L1.71661e-05 2.29195L16.375 1.48938C32.75 0.686806 65.5 -0.91834 98.25 0.686806C131 2.29195 163.75 7.10739 196.5 10.3177C229.25 13.528 262 15.1331 294.75 15.1331C327.5 15.1331 360.25 13.528 376.625 12.7254Z"
      fill="#7A8D65"
    />
  </svg>

  <div
    class="xxs:w-[60%] lg:w-[30%] h-[70%] flex items-center justify-between z-10"
  >
    <div
      class="h-full w-[40%] flex flex-col justify-center gap-4 cursor-pointer"
      on:click={() => dispatch('changeTab', 'currentPolls')}
    >
      <img src={PollsIcon} alt="White polls icon." class="h-14" />
      <h2 class="font-h2 text-sm-h2 tracking-sm-h2 text-center">Polls</h2>
    </div>
    <div
      class="h-full w-[40%] flex flex-col justify-center gap-4 cursor-pointer"
      on:click={() => dispatch('changeTab', 'addPoll')}
    >
      <img src={AddPollIcon} alt="White add poll icon." class="h-14" />
      <h2 class="font-h2 text-sm-h2 tracking-sm-h2 text-center">Add Poll</h2>
    </div>
  </div>
</footer>
