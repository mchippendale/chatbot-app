
import './css/TopicCard.css'

export default function TopicCard(props) {
    return (
        <section className="topic-card-outer-container">
            <div className="topic-title">{props.title}</div>
            <div className="topic-card-container">
                <div className="topic-icon">{props.icon}</div>
                <div className="topic-text">The most significant things we can think about, when we think about Apollo, is that it has opened for us.</div>
            </div>
        </section>
    )
}