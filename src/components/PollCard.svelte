<script>
// @ts-nocheck

    import PollChart from "./PollChart.svelte";
    import Button from "./Button.svelte"
    export let poll;
    const {optionA, optionB} = poll
</script>

<article class="flex flex-col items-start bg-tertiary4 drop-shadow-md px-10 py-8 gap-3 rounded-2xl">
    <div class="flex flex-col items-start">
        <h2 class="font-h2 text-sm-h2 tracking-sm-h2">{poll.title}</h2>
        <p>{`Total Votes: ${poll.totalVotes}`}</p>
    </div>

    <PollChart {poll}/>

    <div class="flex justify-center w-full">
        <Button buttonText="Delete"/>
    </div>
</article>