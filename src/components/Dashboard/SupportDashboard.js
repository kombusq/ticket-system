
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase-config';
import '../../styles/main.css';

export default function SupportDashboard () {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('tickets').onSnapshot((snapshot) => {
      const ticketsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTickets(ticketsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Support Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
              <td>{ticket.createdBy}</td>
              <td>{ticket.assignedTo}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


    