

import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function Plastics() {
    return (
    <section className="main-content">
        <section className="header-container">
            <div className="page-heading-outer-container">
                <div className="page-heading-inner-container">
                    <h1 className="page-heading-title">Plastics</h1>
                    <p className="page-heading-text">On average, Australians use 130kg of plastic per person each year. Less than 12% of that's recycled. More frightening still, up to 130,000 tonnes of plastic will find its way into our waterways and into the ocean.</p>
                </div>
            </div>
            <section>
                <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">Responsible plastic use</div>
                            </div>
                        </div>
                    </section>
                <div className="information-section-container">
                    <InfoCard subtopic="By biodegrabale products"/>
                    <InfoCard subtopic="Use your own coffee cup"/>
                    <InfoCard subtopic="Bring your own shopping bags"/>
                    <InfoCard subtopic="Avoid single use plastics"/>
                </div>
            </section>
        </section>
    </section>
    )
}