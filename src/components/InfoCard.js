
import './css/InfoCard.css'

export default function InfoCard(props) {
    return ( <section className="infocard-outer-container">
        <div className=".info-card-outer-container">
            <div className="info-card-container">
                <div className="info-title">
                    <div>{props.subtopic}</div>
                </div>
                <div className="info-text">
                    Over 90% per cent of popular wild seafood, like tuna and cod, are either fully fished or overfished. But if you choose carefully, you can still enjoy your favourite seafood while ensuring there are enough fish in our oceans for the future.
                </div>
            </div>
        </div>
    </section>
    )
}