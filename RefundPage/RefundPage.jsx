import React, { useState } from "react";
import "./RefundPage.css";

const RefundPage = () => {
  const [product, setProduct] = useState("SignalCheck");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="refund-container">
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/dc/45/fe/dc45fe3b-1172-60fa-241c-19a873684383/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/1200x600wa.png"
        alt="Perfect Pay Logo"
        className="refund-logo"
      />
      <h1 className="refund-title">Request a Refund</h1>
      {success ? (
        <div className="refund-success">Your refund request has been sent!</div>
      ) : (
        <form className="refund-form" onSubmit={handleSubmit}>
          <label className="refund-label">
            Select product
            <select
              className="refund-input"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="SignalCheck">SignalCheck</option>
            </select>
          </label>
          <label className="refund-label">
            Your email
            <input
              className="refund-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="refund-label">
            Note
            <textarea
              className="refund-input"
              placeholder="Add a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            />
          </label>
          <button className="refund-button" type="submit">
            Request Refund
          </button>
        </form>
      )}
    </div>
  );
};

export default RefundPage;