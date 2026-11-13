import { useState } from "react";
function AccessForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        interest: ""
    });
    const [submitted, setSubmitted] = useState(false);
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setSubmitted(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            company: "",
            interest: ""
        });
    }
    return (
        <section className="access-section" id="access">
            <div className="access-info">
                <p>GET STARTED</p>
                <h2>Compute Grant And API Weight Access Request</h2>
                <span>
                    Be among the first to experience
                    our next generation AI technology.
                    Contact us to learn more about our solutions.
                </span>
                <div className="access-benefits">
                    <p>✓ Early product access</p>
                    <p>✓ Technical documentation</p>
                    <p>✓ Expert support</p>
                </div>
            </div>
            <div className="access-form-container">
                <h3>Request Access</h3>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                    />
                    <label>Area of Interest</label>
                    <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="Robotics">Robotics</option>
                        <option value="AI Models">AI Models</option>
                        <option value="Automation">Automation</option>
                    </select>
                    <button type="submit">
                        Submit Request
                    </button>
                    {submitted && (
                        <p className="success-message">
                            Your request has been submitted successfully!
                        </p>
                    )}
                </form>
            </div>

        </section>
    );
}
export default AccessForm;