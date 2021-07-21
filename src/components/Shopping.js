
import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function Shopping() {
    return (
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">Shopping</h1>
                        <p className="page-heading-text">The most significant things we can think about, when we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future. The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world. Learning to live and learning to work together.</p>
                    </div>
                </div>
                <section>
                    <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">Shop sustainably</div>
                            </div>
                        </div>
                    </section>
                    <div className="information-section-container">
                        <InfoCard subtopic="Buy second hand"/>
                        <InfoCard subtopic="Donate old clothes"/>
                        <InfoCard subtopic="Shop local"/>
                        <InfoCard subtopic="By natural products"/>
                    </div>
                </section>
            </section>
        </section>
    )
}