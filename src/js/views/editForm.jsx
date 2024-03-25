import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("ejemplo");
  const [email, setEmail] = useState("ejemplo@hotmail.com");
  const [address, setAddress] = useState("ejemplo");
  const [phone, setPhone] = useState("123456");
  const { id } = useParams();

  useEffect(() => {
    actions.getSingleContact(id);
  }, []);

  useEffect(() => {
    setName(store.contact.full_name);
    setEmail(store.contact.email);
    setAddress(store.contact.address);
    setPhone(store.contact.phone);
  }, [store.contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.editContact(name, email, address, phone, id);
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Address{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {" "}
          Submit{" "}
        </button>

        <Link to="/">
        <button type="button" style={{marginLeft:'10px'}} class="btn btn-outline-secondary">Back home</button>
        </Link>
      </form>
    </div>
  );
};
