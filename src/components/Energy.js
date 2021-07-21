
import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function Energy() {
    return (
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">Energy</h1>
                        <p className="page-heading-text">More than one-third of our emissions come from our electricity consumption, so we can make huge emissions reductions by increasing the energy efficiency of our homes and businesses. Switching on to a clean energy future is as simple as switching off. Together, through small changes to the way we use energy, we can make a big difference.</p>
                    </div>
                </div>
                <section>
                    <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">Reduce your energy use</div>
                            </div>
                        </div>
                    </section>
                    <div className="information-section-container">
                        <InfoCard subtopic="Switch off unused appliances"/>
                        <InfoCard subtopic="Use energy efficient globes"/>
                        <InfoCard subtopic="Look at the energy rating"/>
                        <InfoCard subtopic="Switch to a clean renewable energy"/>
                    </div>
                </section>
            </section>
        </section>
    )
}