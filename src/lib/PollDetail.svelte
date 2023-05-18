<script>
  import Card from "./shared/Card.svelte";
  import Button from "./shared/Button.svelte";
  import PollStore from "./Stores/PollStore";
  import { tweened } from "svelte/motion";

  export let poll;

  //Reactive Values
  $: totalvote = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalvote) * poll.votesA) || 0;
  $: percentB = Math.floor((100 / totalvote) * poll.votesB) || 0;

  //Percentages

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (option, id) => {
    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];
      let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

      if (option === "a") {
        upvotedPoll.votesA++;
      }

      if (option === "b") {
        upvotedPoll.votesB++;
      }

      return currentPolls;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>

    <p>Total votes: {totalvote}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="answer"
      on:click={() => handleVote("a", poll.id)}
      style="width: {$tweenedA}%"
    >
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="answer"
      on:click={() => handleVote("b", poll.id)}
      style="width: {$tweenedB}%"
    >
      <div class="percent percent-b" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button
        flat={true}
        type="secondary"
        on:click={() => handleDelete(poll.id)}>Delete</Button
      >
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #888888;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #9b8c8c;
    margin-bottom: 30px;
  }

  .answer {
    background: #757575;
    cursor: pointer;
    margin: 10px;
    position: relative;
  }
  .answer:hover {
    opacity: 0.8;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid rgba(217, 27, 66, 1);
  }
  .percent-b {
    border-left: 4px solid rgba(69, 196, 150, 1);
  }

  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
