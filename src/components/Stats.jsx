function Stats() {
    const statistics = [
        {
            title: "Model Parameters"
        },
        {
            title: "Processing Latency"
        },
        {
            title: "Model Accuracy"
        },
        {
            title: "System Monitoring"
        }
    ];
    return (
        <section className="stats-section">
            <div className="stats-container">
                {statistics.map((item, index) => (
                    <div className="stat-item" key={index}>
                        <h2>{item.number}</h2>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="partners">
                <p>TRUSTED BY INNOVATION LEADERS</p>
                <div className="partner-names">
                    <span>NVIDIA</span>
                    <span>Google</span>
                    <span>Microsoft</span>
                    <span>ARM</span>
                    <span>IBM</span>
                </div>
            </div>
        </section>
    );
}
export default Stats;