import { useState } from "react";
import { data } from "./data";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [persons, setPersons] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;
    const newId = Date.now();
    console.log(newId);
    const newName = { id: newId, name };
    const newPersons = [newName, ...persons];
    setPersons(newPersons);
    setName("");
  };

  const removePerson = (id) => {
    const users = persons.filter((person) => person.id != id);
    setPersons(users);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-input"
            id="name"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div>
        <h2>Users</h2>
        {persons.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.name}</h4>
              <button
                className="btn btn-primary mb-3"
                onClick={() => {
                  removePerson(person.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <button
          className="btn btn-primary my-3"
          onClick={() => {
            setPersons([]);
          }}
        >
          Remove all
        </button>
      </div>
    </div>
  );
};
export default ControlledInputs;
