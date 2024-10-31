<script>
  import Button from './Button.svelte'
  import PollStore from '../stores/PollStore'
  import { v4 as uuidv4 } from 'uuid'

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

    if (formData.question.trim().length < 5) {
      valid = false
      errors.question = 'Question must be at least 5 characters long'
    } else {
      errors.question = ''
    }

    if (formData.answerA.trim().length < 1) {
      valid = false
      errors.answerA = 'Answer A must not be empty'
    } else {
      errors.answerA = ''
    }
    
    if(formData.answerB.trim().length < 1 ){
      valid = false
      errors.answerB = 'Answer B must not be empty'
    }else {
      errors.answerB = ''
    }

    if (valid) {
      let poll = {
        id: uuidv4(),
        title: formData.question,
        optionA: formData.answerA,
        optionAVotes: 0,
        optionB: formData.answerB,
        optionBVotes: 0,
      }

      PollStore.update((polls) => [...polls, poll])
      formData = { question: '', answerA: '', answerB: '' } // Clear form after submission
    }
  }
</script>

<!-- UI Layout with form validation feedback on input change -->
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
        placeholder="Enter question..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.question}
      />
      <p class="text-red-800">{errors.question}</p>
    </div>

    <div class="flex flex-col gap-1">
      <label for="optionA" class="font-h2 text-sm-h2">Option A:</label>
      <input
        id="optionA"
        type="text"
        placeholder="Enter option A..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerA}
      />
      <p class="text-red-800">{errors.answerA}</p>
    </div>

    <div class="flex flex-col gap-1">
      <label for="optionB" class="font-h2 text-sm-h2">Option B:</label>
      <input
        id="optionB"
        type="text"
        placeholder="Enter option B..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerB}
      />
      <p class="text-red-800">{errors.answerB}</p>
    </div>

    <div class="flex justify-center">
      <Button buttonText={'Submit Poll'} />
    </div>
  </form>
</div>
