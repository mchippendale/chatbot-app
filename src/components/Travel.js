import PlaySound from './PlaySound'

import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function Travel() {
    return (
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">Travel</h1>
                        <p className="page-heading-text">Transport – whether by car, bus, motorbike or plane – accounts for about 16% of Australia’s annual greenhouse emissions and about 34% of total household greenhouse gas emissions. Our growing car use and air travel, in particular, is contributing to global warming.</p>
                    </div>
                </div>
                <section>
                    <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">How to reduce your food footprint</div>
                            </div>
                        </div>
                    </section>
                    <div className="information-section-container">
                        <InfoCard subtopic="Take the bus"/>
                        <InfoCard subtopic="Car pool"/>
                        <InfoCard subtopic="Ride a bike"/>
                        <InfoCard subtopic="Travel light"/>
                    </div>
                </section>
                <footer className="footer-outer-container">
                    <div>
                        <PlaySound />
                    </div>
                </footer>
            </section>
        </section>

    )
}