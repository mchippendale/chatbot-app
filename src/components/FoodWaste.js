import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function FoodWaste() {
    return ( 
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">FoodWaste</h1>
                        <p className="page-heading-text">The most significant things we can think about, when we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future. The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world. Learning to live and learning to work together.
                        </p>
                    </div>
                </div>
            </section>
                <section>
                    <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">How to reduce your food footprint</div>
                            </div>
                        </div>
                    </section>
                    <div className="information-section-container">
                        <InfoCard subtopic="Plan ahead"/>
                        <InfoCard subtopic="Shop local"/>
                        <InfoCard subtopic="Shop fresh"/>
                        <InfoCard subtopic="Freeze your food"/>
                    </div>
                </section>
        </section>
    )
}