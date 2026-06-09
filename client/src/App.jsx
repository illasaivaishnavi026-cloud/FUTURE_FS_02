 import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");

  const [leads, setLeads] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLead = {
      name,
      email,
      source,
      status: "New",
      notes: "",
    };

    setLeads([...leads, newLead]);

    setName("");
    setEmail("");
    setSource("");
  };

  const deleteLead = (index) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini CRM</h1>

      <h2>Add New Lead</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Lead</button>
      </form>

      <hr />

      <h2>Lead List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.source}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) => {
                    const updatedLeads = [...leads];
                    updatedLeads[index].status = e.target.value;
                    setLeads(updatedLeads);
                  }}
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Converted</option>
                </select>
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Add notes"
                  value={lead.notes}
                  onChange={(e) => {
                    const updatedLeads = [...leads];
                    updatedLeads[index].notes = e.target.value;
                    setLeads(updatedLeads);
                  }}
                />
              </td>

              <td>
                <button onClick={() => deleteLead(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;