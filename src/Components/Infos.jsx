import React from "react";
import { connect } from 'react-redux';

const Infos = (form) => {
  return (
    <div>
      <h1>Name: {form.name}</h1>
      <h1>FirstName: {form.firstName}</h1>
      <h1>Address: {form.address}</h1>
    </div>
  )
}

const mapDispatchToProps = state => ({
  form: state.form
})

export default connect(mapDispatchToProps)(Infos);