function Stats() {
    const partners = [
        "Validation Silicon Research Aliances",
        "NVIDIA",
        "HuggingFace",
        "StanfordAIlab",
        "MITCSAIL",
        "TSMC3nm Nano"
    ];
    return (
        <section className="stats-section">
            <div className="partner-names">
                {partners.map((name, index) => (
                    <span key={index}>{name}</span>
                ))}
            </div>
        </section>
    );
}
export default Stats;