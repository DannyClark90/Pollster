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

  let valid = false;

  const validateForm = () => {
    errors.question = formData.question.trim().length >= 5 ? '' : 'Question must be at least 5 characters long';
    errors.answerA = formData.answerA.trim().length > 0 ? '' : 'Answer A must not be empty';
    errors.answerB = formData.answerB.trim().length > 0 ? '' : 'Answer B must not be empty';
    valid = !Object.values(errors).some(error => error.length > 0);
  };

  const handleSubmit = () => {
    // Check validation before proceeding
    validateForm();

    if (valid) {
      let poll = {
        id: uuidv4(),
        title: formData.question,
        optionA: formData.answerA,
        optionAVotes: 0,
        optionB: formData.answerB,
        optionBVotes: 0,
      };

      PollStore.update((polls) => [...polls, poll]);
      formData = { question: '', answerA: '', answerB: '' }; // Clear form after submission
      validateForm(); // Revalidate to reset error messages
    }
  };

  // Watch for changes in formData and validate
  $: validateForm();
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
