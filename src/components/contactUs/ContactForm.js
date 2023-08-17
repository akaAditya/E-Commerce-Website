import React, { useRef, useState } from "react";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const TextArea = useRef('')

  const fullName = (event) => {
    setName(event.target.value);
  };
  const Email = (event) => {
    setEmail(event.target.value);
  };
  const Phone = (event) => {
    setPhone(event.target.value);
  };
  const submitFormHandler = () => {
    const formDetails = {
      name: name,
      email: email,
      phone: phone,
      text: TextArea.current.value 
    };
    props.onSaveDetails(formDetails);
    setName("");
    setEmail("");
    setPhone("");
    alert("Thank you for your feedback")
  };

  return (
    <div>
      <div className="mx-auto col-10 col-md-8 col-lg-6  ">
        <form onSubmit={submitFormHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={fullName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={Email}
            />
            <div id="emailHelp" className="form-text">
              Don't worry your details are gem for us.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={Phone}
            />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              ref={TextArea}
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
