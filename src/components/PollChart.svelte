<script>
  export let poll
  import VoteButton from './VoteButton.svelte'
  const { optionA, optionB } = poll

  let optionAVoted = false
  let optionBVoted = false

  const handleVote = (option) => {
    if(option === 'a'){
        optionAVoted = !optionAVoted
        optionA.votes += optionAVoted ? 1 : -1;
        console.log(optionA.votes);
        
    }
    if(option === 'b'){
        optionBVoted = !optionBVoted
        optionB.votes += optionBVoted ? 1 : -1;
        console.log(optionB.votes);
        
    }
  }
</script>

<div class="flex flex-col gap-8 bg-tertiary3 w-[30rem] h-fit p-5">
  
    <div class="flex gap-5 items-center h-fit w-full">
    <p class="ml-5 absolute z-20">
      {`${optionA.title} (${optionA.votes} votes)`}
    </p>
    <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
      <div class="flex bg-tertiary h-10"></div>
    </div>
    <VoteButton voted={optionAVoted} on:click={() => handleVote('a')}/>
  </div>

  <div class="flex gap-5 items-center h-fit w-full">
    <p class="ml-5 absolute z-20">
      {`${optionB.title} (${optionB.votes} votes)`}
    </p>
    <div class="z-10 flex items-center bg-tertiary2 h-[3.2rem] w-[80%]">
      <div class="flex bg-tertiary h-10"></div>
    </div>
    <VoteButton voted={optionBVoted} on:Click={() => handleVote('b')}/>
  </div>

</div>
