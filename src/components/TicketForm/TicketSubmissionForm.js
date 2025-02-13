
import React, { useState } from 'react';
import { db } from '../../firebase/firebase-config';
import '../../styles/main.css';

const TicketSubmissionForm = () => {
  const [ticket, setTicket] = useState({
    title: '',
    description: '',
    priority: '',
    category: '',
    attachment: null,
    email: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('tickets').add(ticket);
    setTicket({
      title: '',
      description: '',
      priority: '',
      category: '',
      attachment: null,
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        placeholder="Title"
        value={ticket.title}
        onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={ticket.description}
        onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
      />
      <select
        value={ticket.priority}
        onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
      >
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="text"
        placeholder="Category"
        value={ticket.category}
        onChange={(e) => setTicket({ ...ticket, category: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setTicket({ ...ticket, attachment: e.target.files[0] })}
      />
      <input
        type="email"
        placeholder="Email"
        value={ticket.email}
        onChange={(e) => setTicket({ ...ticket, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={ticket.phone}
        onChange={(e) => setTicket({ ...ticket, phone: e.target.value })}
      />
      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default TicketSubmissionForm;
    