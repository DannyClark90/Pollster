<script>
  import Button from './Button.svelte'
</script>

<div class="absolute z-10 flex w-full flex-col items-center top-[19rem] gap-16">
  <h1 class="font-h1 text-lg-h1 tracking-lg-h1">Add New Poll</h1>
  <form
    action=""
    class="z-10 flex xs:w-full md:w-[75%] lg:w-[60%] flex-col gap-10 px-20"
  >
    <div class="flex flex-col gap-1">
      <label for="question" class="font-h2 text-sm-h2">Poll Question:</label>
      <input
        id="question"
        type="text"
        placeholder="enter question..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="option A" class="font-h2 text-sm-h2">Option A:</label>
      <input
        id="option A"
        type="text"
        placeholder="enter option A..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="option B" class="font-h2 text-sm-h2">Option B:</label>
      <input
        id="option B"
        type="text"
        placeholder="enter option B..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
      />
    </div>
    
    <div class="flex justify-center">
      <Button buttonText={'Submit Poll'} />
    </div>
  </form>
</div>
