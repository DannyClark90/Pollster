<script>
  import LikeIcon from '../assets/Like.svg'
  import DislikeIcon from '../assets/Dislike.svg'

  export let voted
</script>

<button
  class="bg-secondary drop-shadow-md px-4 py-2 rounded-xl hover:-translate-y-1 active:translate-y-[0.5px] active:shadow-inner w-fit h-fit"
  on:click
>
  <img
  class="h-[2.4rem]"
    src={voted ? DislikeIcon : LikeIcon}
    alt={voted ? 'Thumbs down' : 'Thumbs up'}
  />
</button>
