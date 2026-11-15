function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-about">
                    <h3>
                        <span className="footer-icon">🛡</span>
                        AegisCore Architecture
                    </h3>
                    <p>
                        Deterministic evaluation frameworks, rigorous automated
                        compliance validation, and architectural validation suites
                        designed for safety-critical enterprise deployments.
                    </p>
                    <div className="footer-badges">
                        <span>✿ ISO/IEC 27001</span>
                        <span>✿ SOC 2 Type II</span>
                        <span>✿ NIST 800-53</span>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>ASSESSMENT STANDARDS</h4>
                    <p>ISO/IEC 42001:2023</p>
                    <p>IEEE 7000 Series Verification</p>
                    <p>OWASP ASVS Level 3</p>
                    <p>Zero Trust Architecture (SP 800-207)</p>
                    <p>FedRAMP High Baseline</p>
                </div>
                <div className="footer-column">
                    <h4>COMPLIANCE SPECS</h4>
                    <p>Real-time Telemetry Audits</p>
                    <p>Continuous Cryptographic Proofs</p>
                    <p>Automated Policy Enforcement</p>
                    <p>GDPR & CCPA Data Sovereignty</p>
                    <p>HIPAA Security Rule Mapping</p>
                </div>
                <div className="footer-column">
                    <h4>PLATFORM INDEX</h4>
                    <p>Architecture Overview</p>
                    <p>System Capabilities</p>
                    <p>Compliance Matrix</p>
                    <p>Audited Implementations</p>
                    <p>Advisory Consultation</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2025 AegisCore Systems Inc. All rights reserved.
                    <span className="dot"> • </span>
                    Engine Spec v4.8.1-prod
                </p>
                <div className="footer-links">
                    <span>Security Policy</span>
                    <span>Trust Center</span>
                    <span>Terms of Assessment</span>
                </div>
            </div>
        </footer>
    );
}
export default Footer;