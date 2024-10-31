<script>
    import PollStore from '../stores/PollStore';
    import VoteButton from './VoteButton.svelte';
    export let id
  
    $: totalVotes =  $PollStore[id].optionAVotes +  $PollStore[id].optionBVotes;
  
    // Ensure no division by zero
    $: percentageA = totalVotes > 0 ? Math.floor((100 / totalVotes) * $PollStore[id].optionAVotes) : 0;
    $: percentageB = totalVotes > 0 ? Math.floor((100 / totalVotes) * $PollStore[id].optionBVotes) : 0;
  
    let optionAVoted = false;
    let optionBVoted = false;
  
    const handleVote = (option) => {
      if (option === 'a') {
        optionAVoted = true; // Toggle the voted state
        $PollStore[id].optionAVotes += 1; // Increment votes if newly voted
      }
      if (option === 'b') {
        optionBVoted = true // Toggle the voted state
          $PollStore[id].optionBVotes += 1; // Increment votes if newly voted
      }
    };
  </script>
  
  <div class="flex flex-col gap-8 bg-tertiary3 w-[30rem] h-fit p-5">
    <div class="flex gap-5 items-center h-fit w-full">
      <p class="ml-5 absolute z-20">
        {`${ $PollStore[id].optionA} (${$PollStore[id].optionAVotes} votes)`}
      </p>
      <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
        <div class="flex bg-tertiary h-full" style="width: {percentageA}%"></div>
      </div>
      <VoteButton voted={optionAVoted} on:click={() => handleVote('a')} />
    </div>
  
    <div class="flex gap-5 items-center h-fit w-full">
      <p class="ml-5 absolute z-20">
        {`${ $PollStore[id].optionB} (${$PollStore[id].optionBVotes} votes)`}
      </p>
      <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
        <div class="flex bg-tertiary1 h-full" style="width: {percentageB}%"></div>
      </div>
      <VoteButton voted={optionBVoted} on:click={() => handleVote('b')} />
    </div>
  </div>
  