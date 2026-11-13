function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-content">
                <p className="hero-tag">
                    AI POWERED TECHNOLOGY
                </p>
                <h1>
                    Foundational Neural Models for
                    <span> Autonomous Systems</span>
                </h1>
                <p className="hero-description">
                    Synthesizing dynamic structures with
                    unprecedented accuracy and efficiency.
                    Experience the future of intelligent
                    autonomous systems.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">
                        Access Research Weights
                    </button>
                    <button className="secondary-btn">
                        Read Whitepaper
                    </button>
                </div>
                <div className="hero-stats">
                    <div>
                        <h3>420M+</h3>
                        <p>Model Parameters</p>
                    </div>
                    <div>
                        <h3>0.12ms</h3>
                        <p>Processing Time</p>
                    </div>
                    <div>
                        <h3>99.8%</h3>
                        <p>Accuracy</p>
                    </div>
                </div>
            </div>
            <div className="hero-dashboard">
                <div className="dashboard-header">
                    <h3>AI Performance</h3>
                    <span>Live Status</span>
                </div>
                <div className="dashboard-chart">
                    <div className="chart-line">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="dashboard-info">
                    <div>
                        <p>Model Accuracy</p>
                        <h2>98.6%</h2>
                    </div>
                    <div>
                        <p>System Speed</p>
                        <h2>0.12ms</h2>
                    </div>
                </div>
                <div className="dashboard-status">
                    <span></span>
                    All Systems Operational
                </div>
            </div>
        </section>
    );
}
export default Hero;