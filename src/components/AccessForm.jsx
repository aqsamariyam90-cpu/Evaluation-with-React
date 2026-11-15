function AccessForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your Compute Grant Request has been submitted!");
  }
  return (
    <div className="page">
      <div className="form-container">
        <div className="top-line"></div>
        <div className="form-content">
          <span className="tag">
            Academic & Research Access
          </span>
          <h1>Compute Grant & API Weight Access Request</h1>
          <p className="description">
            Submit your laboratory credentials to receive private
            Hugging Face checkpoint access, quantized weights
            for edge silicon, or dedicated H100 cluster allocations.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Investigator Credentials */}
              <div className="left-section">
                <h2>
                  <span className="number">1</span>
                  Investigator Credentials
                </h2>
                <label>Principal Investigator Name</label>
                <input
                  type="text"
                  placeholder="Dr. Evelyn Vance, Ph.D."
                  required
                />
                <label>Academic or Enterprise Email</label>
                <input
                  type="email"
                  placeholder="e.vance@mit.edu"
                  required
                />
                <label>Compute Infrastructure Tier</label>
                <select required>
                  <option value="">Select Infrastructure Tier</option>
                  <option>
                    Tier 1: Research Weights Download (Hugging Face Private Access)
                  </option>
                  <option>
                    Tier 2: Quantized Weights Access
                  </option>
                  <option>
                    Tier 3: Dedicated H100 Cluster
                  </option>
                </select>
                <label>Primary Research Domain</label>
                <div className="radio-box">
                  <label>
                    <input
                      type="radio"
                      name="domain"
                      defaultChecked
                    />
                    Embodied Robotics & Direct Actuation
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="domain"
                    />
                    Aerospace & Autonomous Planetary Navigation
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="domain"
                    />
                    Mechanistic Safety & Formal Circuit Verification
                  </label>
                </div>
              </div>
              {/* Deployment Specs */}
              <div className="right-section">
                <h2>
                  <span className="number">2</span>
                  Deployment Specs & Safeguards
                </h2>
                <label>Target Constraints & Mandates</label>
                <div className="checkbox-box">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Hard real-time requirement: Sub-20ms deterministic control loop
                  </label>
                  <label>
                    <input type="checkbox" />
                    Air-gapped zero-WAN deployment architecture required
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked />
                    Agreement to publish benchmarking results under Open Weights Agreement
                  </label>
                </div>
                <label>
                  Research Abstract & Proposed Compute Use
                </label>
                <textarea
                  rows="5"
                  placeholder="Briefly describe your experimental validation plan, intended hardware target, and benchmark methodology..."
                  required
                ></textarea>
                <div className="buttons">
                  <button
                    type="reset"
                    className="reset-btn"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Apply for Compute Grant ➤
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AccessForm;