function ArchitectureCard(props) {
    return (
        <div className="architecture-card">

            <div className="card-icon">
                {props.icon}
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href="#benchmark">
                Learn More →
            </a>

        </div>
    );
}
function Architecture() {
    const features = [
        {
            id: 1,
            icon: "🧠",
            title: "Dense Reasoning Architecture",
            description: "Advanced neural models designed for intelligent decision making and complex problem solving."
        },
        {
            id: 2,
            icon: "🤖",
            title: "Multimodal Embedded Robotics",
            description: "Combining multiple data sources to create smarter and more efficient robotic systems."
        },
        {
            id: 3,
            icon: "⚙️",
            title: "Mechanical Interpretability",
            description: "Understanding system behavior through transparent and reliable model architecture."
        }
    ];
    return (
        <section className="architecture-section" id="architecture">
            <div className="section-heading">
                <p>OUR TECHNOLOGY</p>
                <h2>Modular Architecture Pipeline</h2>
                <span>
                    Explore the advanced technology behind
                    our intelligent autonomous systems.
                </span>
            </div>
            <div className="architecture-container">
                {features.map((item) => (
                    <ArchitectureCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
export default Architecture;