import './css/About.css'
import TopicCard from './TopicCard'

export default function About() {
    return (
        <section className="main-content">
            <section className="header-container header-container-mobile">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">About </h1>
                        <p className="page-heading-text">Australians consume a lot more per person than in many other countries. The food, energy and water we use, the timber and plastics that we depend upon – everything we do uses natural resources and produces waste. The measure of this impact on the environment is called our ecological footprint.</p>
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