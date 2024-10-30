<script>
    import PollStore from '../stores/PollStore';
    import VoteButton from './VoteButton.svelte';
    export let poll;
  
    let { optionA, optionB } = poll;
  
    $: optionAVotes = poll.optionA.votes;
    $: optionBVotes = poll.optionB.votes;
    $: totalVotes = optionAVotes + optionBVotes;
  
    // Ensure no division by zero
    $: percentageA = totalVotes > 0 ? Math.floor((100 / totalVotes) * optionAVotes) : 0;
    $: percentageB = totalVotes > 0 ? Math.floor((100 / totalVotes) * optionBVotes) : 0;
  
    let optionAVoted = false;
    let optionBVoted = false;
  
    const handleVote = (id, option) => {
      if (option === 'a') {
        optionAVoted = !optionAVoted; // Toggle the voted state
        if (optionAVoted) {
          $PollStore[id].optionA.votes += 1; // Increment votes if newly voted
          if (optionBVoted) {
            optionBVoted = false; // Reset option B if option A is voted
            $PollStore[id].optionB.votes -= 1; // Decrement votes for option B
          }
        } else {
          $PollStore[id].optionA.votes -= 1; // Decrement if unvoted
        }
      }
      if (option === 'b') {
        optionBVoted = !optionBVoted; // Toggle the voted state
        if (optionBVoted) {
          $PollStore[id].optionB.votes += 1; // Increment votes if newly voted
          if (optionAVoted) {
            optionAVoted = false; // Reset option A if option B is voted
            $PollStore[id].optionA.votes -= 1; // Decrement votes for option A
          }
        } else {
          $PollStore[id].optionB.votes -= 1; // Decrement if unvoted
        }
      }
    };
  </script>
  
  <div class="flex flex-col gap-8 bg-tertiary3 w-[30rem] h-fit p-5">
    <div class="flex gap-5 items-center h-fit w-full">
      <p class="ml-5 absolute z-20">
        {`${optionA.title} (${optionAVotes} votes)`}
      </p>
      <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
        <div class="flex bg-tertiary h-full" style="width: {percentageA}%"></div>
      </div>
      <VoteButton voted={optionAVoted} on:click={() => handleVote(poll.id, 'a')} />
    </div>
  
    <div class="flex gap-5 items-center h-fit w-full">
      <p class="ml-5 absolute z-20">
        {`${optionB.title} (${optionBVotes} votes)`}
      </p>
      <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
        <div class="flex bg-tertiary1 h-full" style="width: {percentageB}%"></div>
      </div>
      <VoteButton voted={optionBVoted} on:click={() => handleVote(poll.id, 'b')} />
    </div>
  </div>
  