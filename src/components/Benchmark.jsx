function Benchmark() {
    const models = [
        {
            id: 1,
            name: "Cortex-VS",
            description: "Dense SVD Graph",
            parameters: "420M Parameters",
            accuracy: "99.8%",
            latency: "0.12ms",
            status: "Verified",
            statusClass: "verified"
        },
        {
            id: 2,
            name: "Cortex-MoE UltraReasoning",
            description: "Sparse Gated Mixture",
            parameters: "350M Parameters",
            accuracy: "97.5%",
            latency: "0.25ms",
            status: "Verified",
            statusClass: "verified"
        },
        {
            id: 3,
            name: "Cortex-KineticsEmbodied",
            description: "Continuous Action Policy",
            parameters: "280M Parameters",
            accuracy: "96.2%",
            latency: "0.40ms",
            status: "Zero-Lag",
            statusClass: "zero-lag"
        },
        {
            id: 4,
            name: "Legacy Industry Baseline",
            description: "Standard Autoregressive",
            parameters: "200M Parameters",
            accuracy: "94.8%",
            latency: "0.55ms",
            status: "Reference",
            statusClass: "reference"
        }
    ];
    return (
        <section className="benchmark-section" id="benchmark">
            <div className="benchmark-heading">
                <div>
                    <p className="benchmark-label">
                        OBJECTIVE PERFORMANCE METRICS
                    </p>
                    <h2>
                        Model Benchmark & Computational Speed Matrix
                    </h2>
                    <span>
                        Normalized comparisons against modern foundation
                        standards run on identical configurations.
                    </span>
                </div>
                <div className="benchmark-badge">
                    Benchmarked @ INT4 Batch Size 1
                </div>
            </div>
            <div className="table-container">
                <table className="benchmark-table">
                    <thead>
                        <tr>
                            <th>MODEL ARCHITECTURE</th>
                            <th>PARAMETER SCALE</th>
                            <th>HUMANEVAL BENCHMARK</th>
                            <th>INFERENCE LATENCY</th>
                            <th>VERIFICATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="model-name">
                                        <span className="model-dot"></span>
                                        <div>
                                            <strong>{item.name}</strong>
                                            <small>{item.description}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.parameters}</td>
                                <td>
                                    <strong className="accuracy">
                                        {item.accuracy}
                                    </strong>
                                </td>
                                <td>
                                    <strong className="latency">
                                        {item.latency}
                                    </strong>
                                </td>
                                <td>
                                    <span className={`status-badge ${item.statusClass}`}>
                                        ✓ {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default Benchmark;