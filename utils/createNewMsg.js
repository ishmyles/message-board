import generateId from "../utils/generateId.js";

const createNewMsg = (msgText, msgAuthor) => ({
  id: generateId(),
  text: msgText,
  user: msgAuthor,
  added: new Date().toLocaleString(),
});

export default createNewMsg;
