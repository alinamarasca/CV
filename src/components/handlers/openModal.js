import MessageForm from "../shared/MessageForm";

function openModal() {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", MessageForm());
  {
    console.log(body);
  }
}

export default openModal;
