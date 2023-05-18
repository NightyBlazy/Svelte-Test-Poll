<script>
  import PollStore from "./Stores/PollStore";
  import Button from "./shared/Button.svelte";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const handleSubmit = () => {
    valid = true;
    // Validate Question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 character long";
    } else {
      errors.question = "";
    }
    // Validate Answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer cannot be empty";
    } else {
      errors.answerA = "";
    }
    // Validate Answer B
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer cannot be empty";
    } else {
      errors.answerB = "";
    }

    //Add the New Poll
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
      console.log("valid", fields);
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question"> Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a"> Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b"> Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="primary" flat={false} inverse={false}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
    height: 2rem;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d40707;
  }
</style>
