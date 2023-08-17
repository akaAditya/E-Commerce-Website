import React from "react";
import ContactForm from "./ContactForm";

function ContactUs() {
  const contactUsSubmitFormHandler = async (contact) => {
    await fetch(
      "https://react-e-commerce-4d848-default-rtdb.firebaseio.com/contact-us.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="container mt-5">
      <ContactForm onSaveDetails={contactUsSubmitFormHandler} />
    </div>
  );
}

export default ContactUs;
