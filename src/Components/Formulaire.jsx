import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateForm } from '../actions';

const Form = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <section>
      <form onSubmit={e => {
        e.preventDefault();
        dispatchEvent(updateForm({ name, firstName, address }));
        setName("");
        setFirstName("");
        setAddress("");
      }}>
        <span>
          <label>Nom</label>
          <input type="text" onInput={e => {
            setName(e.target.value)
          }} />
        </span>
        <span>
          <label>Prénom</label>
          <input type="text" onInput={e => {
            setFirstName(e.target.value)
          }} />
        </span>
        <span>
          <label>Addresse</label>
          <input type="text" onInput={e => {
            setAddress(e.target.value)
          }} />
        </span>
        <button>Valider</button>
      </form>
    </section >
  )
}

export default connect()(Form);