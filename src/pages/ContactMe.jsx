import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function ContactMe() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "senderName":
        setSenderName(value);
        break;
      case "senderEmail":
        setSenderEmail(value);
        break;
      case "senderMessage":
        setSenderMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(senderEmail)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!senderName.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!senderMessage.trim()) {
      setErrorMessage("Please enter a message");
      return;
    }
    const mailtoLink = `mailto:mauryhughesiv@gmail.com?subject=Message from ${senderName}&body=Sender's Email: ${senderEmail} \nMessage: ${senderMessage}`;
    window.location.href = encodeURI(mailtoLink);
    setErrorMessage("");
    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
  };

  return (
    <div>
      <form className="form m-2" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="senderName" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            value={senderName}
            name="senderName"
            onChange={handleInputChange}
            type="text"
            placeholder="Please enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            value={senderEmail}
            name="senderEmail"
            onChange={handleInputChange}
            type="text"
            placeholder="Please enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            value={senderMessage}
            name="senderMessage"
            onChange={handleInputChange}
            rows="4"
            placeholder="Feel free to write me a message, I'll respond shortly!"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="m-2 error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
