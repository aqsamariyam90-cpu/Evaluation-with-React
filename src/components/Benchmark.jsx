function Benchmark() {
    const models = [
        {
            id: 1,
            name: "Cortex-VS",
            accuracy: "99.8%",
            latency: "0.12ms",
            parameters: "420M"
        },
        {
            id: 2,
            name: "Cortex-MoE UltraReasoning",
            accuracy: "97.5%",
            latency: "0.25ms",
            parameters: "350M"
        },
        {
            id: 3,
            name: "Cortex-KineticsEmbodied",
            accuracy: "96.2%",
            latency: "0.40ms",
            parameters: "280M"
        },
        {
            id: 4,
            name: "Legacy Industury Baseline",
            accuracy: "94.8%",
            latency: "0.55ms",
            parameters: "200M"
        }
    ];
    return (
        <section className="benchmark-section" id="benchmark">
            <div className="section-heading">
                <p>PERFORMANCE</p>
                <h2>Model Benchmark And Computational Speed Matrix</h2>
                <span>
                    Compare the performance of our advanced
                    AI models.
                </span>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Model Name</th>
                            <th>Accuracy</th>
                            <th>Latency</th>
                            <th>Parameters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.accuracy}</td>
                                <td>{item.latency}</td>
                                <td>{item.parameters}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default Benchmark;