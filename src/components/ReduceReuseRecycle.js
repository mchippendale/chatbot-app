

import InfoCard from './InfoCard'

import './css/KeyTopics.css'

export default function RRRecycle() {
    return (
        <section className="main-content">
            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">Reduce Reuse Recycle</h1>
                        <p className="page-heading-text">With a little more thought, we can all change our habits so that we throw out less garbage. It's as easy as developing a few new practices - when shopping and in the kitchen - and very soon it becomes second nature. And Mother Nature will thank you for it.
                        </p>
                    </div>
                </div>
                <section>
                    <section className="subheading-container">
                        <div className="subheading-outer-container">
                            <div className="subheading-inner-container">
                                <div className="subheading">Avoid being wasteful</div>
                            </div>
                        </div>
                    </section>
                    <div className="information-section-container">
                        <InfoCard subtopic="Say no to plastics bags"/>
                        <InfoCard subtopic="Always recycle paper and plastics"/>
                        <InfoCard subtopic="Dont' throw it, upcycle it"/>
                        <InfoCard subtopic="Refill your own drink bottle"/>
                    </div>
                </section>
            </section>
        </section>
    )
}