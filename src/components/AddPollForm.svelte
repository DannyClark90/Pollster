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

  const validateField = (field) => {
    if (field === 'question') {
      errors.question = formData.question.trim().length >= 5 ? '' : 'Question must be at least 5 characters long'
    } else if (field === 'answerA') {
      errors.answerA = formData.answerA.trim().length > 0 ? '' : 'Answer A must not be empty'
    } else if (field === 'answerB') {
      errors.answerB = formData.answerB.trim().length > 0 ? '' : 'Answer B must not be empty'
    }
  }

  const handleSubmit = () => {
    // Re-validate all fields
    validateField('question')
    validateField('answerA')
    validateField('answerB')

    // Check if there are any errors
    valid = !Object.values(errors).some(error => error.length > 0)

    if (valid) {
      let poll = {
        id: uuidv4(),
        title: formData.question,
        optionA: { title: formData.answerA, votes: 0 },
        optionB: { title: formData.answerB, votes: 0 },
        totalVotes() {
          return this.optionA.votes + this.optionB.votes
        },
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
        placeholder="enter question..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.question}
        on:input={() => validateField('question')}
      />
      <p class="text-red-800">{errors.question}</p>
    </div>

    <div class="flex flex-col gap-1">
      <label for="optionA" class="font-h2 text-sm-h2">Option A:</label>
      <input
        id="optionA"
        type="text"
        placeholder="enter option A..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerA}
        on:input={() => validateField('answerA')}
      />
      <p class="text-red-800">{errors.answerA}</p>
    </div>

    <div class="flex flex-col gap-1">
      <label for="optionB" class="font-h2 text-sm-h2">Option B:</label>
      <input
        id="optionB"
        type="text"
        placeholder="enter option B..."
        class="rounded-lg drop-shadow-md h-16 pl-5"
        bind:value={formData.answerB}
        on:input={() => validateField('answerB')}
      />
      <p class="text-red-800">{errors.answerB}</p>
    </div>

    <div class="flex justify-center">
      <Button buttonText={'Submit Poll'} />
    </div>
  </form>
</div>
