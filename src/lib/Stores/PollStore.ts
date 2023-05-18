import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Do you like K-ON?",
    answerA: "Yes",
    answerB: "No",
    votesA: 15,
    votesB: 9,
  },
]);

export default PollStore;
