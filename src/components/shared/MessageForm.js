import React from "react";

function MessageForm() {
  return (
    <div>
      <form
        id="contact-form"
        action="https://formsubmit.co/alinamarasca@gmail.com"
        method="POST"
      >
        <div className="input-control">
          <input
            type="hidden"
            name="_next"
            value="https://alinamarasca.github.io/CV"
          />
          <label>Email:</label>
          <input required id="email" type="email" name="email" />
        </div>
        <div className="input-control">
          <input
            type="hidden"
            name="_next"
            value="https://alinamarasca.github.io/CV"
          />{" "}
          <label>Name:</label>
          <input required id="name" type="name" name="name" />
        </div>
        <div className="input-control">
          <input
            type="hidden"
            name="_next"
            value="https://alinamarasca.github.io/CV"
          />{" "}
          <label>Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" id="submit" form="contact-form">
          Send
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
