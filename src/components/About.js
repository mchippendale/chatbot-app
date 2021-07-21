import './css/About.css'
import TopicCard from './TopicCard'

export default function About() {
    return (
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">About </h1>
                        <p className="page-heading-text">The most significant things we can think about, when we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future. The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world. Learning to live and learning to work together.</p>
                    </div>
                </div>
            </section>
            <div className="keytopics-section-container">
                <TopicCard title="Food waste" icon="🥗"/>
                <TopicCard title="Recycling" icon="♻"/>
                <TopicCard title="Travel" icon="✈"/>
                <TopicCard title="Shopping" icon="🛍"/>
                <TopicCard title="Plastics" icon="🥤"/>
                <TopicCard title="Energy" icon="💡"/>
            </div>
        </section>
    )
}