import generateId from "../utils/generateId.js";

const messageData = [
  {
    id: generateId(),
    text: "Hi there!",
    user: "Seth",
    added: new Date("2024-03-06T17:56:34Z").toLocaleString(),
  },
  {
    id: generateId(),
    text: "Hello World!",
    user: "AJ",
    added: new Date("2024-09-24T09:04:45Z").toLocaleString(),
  },
  {
    id: generateId(),
    text: "Howdy!!",
    user: "Jimmy",
    added: new Date("2025-01-11T13:01:11Z").toLocaleString(),
  },
];

export default messageData;
