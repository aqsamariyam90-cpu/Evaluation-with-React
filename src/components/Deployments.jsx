import deployment1 from "../assets/images/deployment1.jpg";
import deployment2 from "../assets/images/deployment2.jpg";
function DeploymentCard(props) {
    return (
        <div className="deployment-card">
            <img src={props.image} alt={props.title} />
            <div className="deployment-content">
                <span className="deployment-category">
                    {props.category}
                </span>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href="#access">
                    Explore Project →
                </a>

            </div>

        </div>
    );
}
function Deployments() {
    const projects = [
        {
            id: 1,
            image: deployment1,
            category: "MEDICAL ROBOTICS",
            title: "Robotic Micro Surgery System",
            description: "Advanced robotic surgical systems designed to assist surgeons in performing delicate procedures with precision, accuracy, and control."
        },
        {
            id: 2,
            image: deployment2,
            category: "SPACE TECHNOLOGY",
            title: "Autonomous Deep-Space Navigation",
            description: "Intelligent navigation technology that helps spacecraft navigate independently, calculate trajectories, and explore deep space."
        }
    ];
    return (
        <section className="deployments-section" id="deployments">
            <div className="section-heading">
                <p>REAL WORLD APPLICATIONS</p>
                <h2>Autonomous System Deployments</h2>
                <span>
                    Discover how our technology is being
                    used in real-world applications.
                </span>
            </div>
            <div className="deployments-container">
                {projects.map((item) => (
                    <DeploymentCard
                        key={item.id}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
export default Deployments;