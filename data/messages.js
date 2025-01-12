import generateId from "../utils/generateId.js";

const messageData = [
  {
    id: generateId(),
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    id: generateId(),
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

export default messageData;
