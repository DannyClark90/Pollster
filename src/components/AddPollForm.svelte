<script>
  import Button from './Button.svelte'

  let formData = {
    question: '',
    answerA: '',
    answerB: '',
  }

  let errors = {
    question: '',
    answerA: '',
    answerB: '',
  }

  let valid = false

  const handleSubmit = () => {
    valid = true

    // Check question validity
    if (formData.question.trim().length < 5) {
      valid = false
      errors.question = 'Question must be at least 5 characters long'
    } else {
      errors.question = ''
    }
    // Check answer A validity
    if (formData.answerA.trim().length < 1) {
      valid = false
      errors.answerA = 'Answer A must not be empty'
    } else {
      errors.answerA = ''
    }

    // Check answer B validity
    if (formData.answerB.trim().length < 1) {
      valid = false
      errors.answerB = 'Answer B must not be empty'
    } else {
      errors.answerB = ''
    }

    // Add new poll
    if(valid){
      console.log('valid', formData);
    }

    if(!valid){
      console.log('invalid', errors);
    }
  }
</script>

<div class="absolute z-10 flex w-full flex-col items-center top-[19rem] gap-16">
  <h1 class="font-h1 text-sm-h1 tracking-lg-h1">Add New Poll</h1>
  <form
    class="z-10 flex xs:w-full md:w-[75%] lg:w-[60%] flex-col gap-10 px-20"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="flex flex-col gap-1">
      <label for="question" class="font-h2 text-sm-h2">Poll Question:</label>
      <input
        id="question"
        type="text"
        placeholder="enter question..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.question}
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="option A" class="font-h2 text-sm-h2">Option A:</label>
      <input
        id="option A"
        type="text"
        placeholder="enter option A..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerA}
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="option B" class="font-h2 text-sm-h2">Option B:</label>
      <input
        id="option B"
        type="text"
        placeholder="enter option B..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerB}
      />
    </div>

    <div class="flex justify-center">
      <Button buttonText={'Submit Poll'} />
    </div>
  </form>
</div>
