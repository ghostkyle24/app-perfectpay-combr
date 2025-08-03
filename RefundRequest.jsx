import React, { useState } from 'react';

export default function RefundRequest() {
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('SignalCheck');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Aqui você pode adicionar lógica para enviar para backend/email
  }

  return (
    <div style={{
      maxWidth: 420,
      margin: '3rem auto',
      padding: '2.5rem 1.5rem',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px 0 #0002',
      color: '#222',
      textAlign: 'center',
      fontFamily: 'Inter, Arial, sans-serif',
      border: '1.5px solid #e5e5e5'
    }}>
      <img
        src="/suporte.jpg"
        alt="Perfect Pay Logo"
        style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 18, boxShadow: '0 2px 8px #0002' }}
      />
      <h2 style={{ color: '#1a73e8', fontWeight: 800, fontSize: 26, marginBottom: 18 }}>
        Request a refund
      </h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: 18 }}>
        <label style={{ color: '#222', fontWeight: 600, fontSize: 15 }}>Select product</label>
        <select
          value={product}
          onChange={e => setProduct(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 8,
            border: '1px solid #b0b0b0',
            marginBottom: 16,
            fontSize: 16,
            background: '#f5f6fa',
            color: '#222'
          }}
        >
          <option value="SignalCheck">SignalCheck</option>
        </select>
        <label style={{ color: '#222', fontWeight: 600, fontSize: 15 }}>Your email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 8,
            border: '1px solid #b0b0b0',
            marginBottom: 16,
            fontSize: 16,
            background: '#f5f6fa',
            color: '#222'
          }}
        />
        <label style={{ color: '#222', fontWeight: 600, fontSize: 15 }}>Note</label>
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Add any additional information (optional)"
          rows={4}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 8,
            border: '1px solid #b0b0b0',
            marginBottom: 20,
            fontSize: 16,
            background: '#f5f6fa',
            color: '#222',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#1a73e8',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 1.7rem',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            width: '100%',
            marginBottom: 10,
            boxShadow: '0 2px 8px #1a73e822'
          }}
        >
          Request refund
        </button>
      </form>
      {sent && (
        <div style={{ color: '#1a73e8', marginTop: 18, fontWeight: 600, fontSize: 17 }}>
          Refund request sent! Our team will contact you soon.
        </div>
      )}
    </div>
  );
}