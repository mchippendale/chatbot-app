
import './css/InfoCard.css'

export default function InfoCard(props) {
    return ( <section className="infocard-outer-container">
        <div className=".infocard-inner-container">
            <div className="info-card-container">
                <div className="info-title">
                    <div>{props.subtopic}</div>
                </div>
                <div className="info-text">
                {`95% of Australia’s sugar is grown along the Great Barrier Reef’s coast. Sadly, the impacts of some cane farms are anything but sweet. Polluted run-off from sugarcane farms can weaken reefs and encourage coral-eating crown-of-thorns starfish.
                By looking for the Bonsucro logo when doing your next food shop, you can help ensure the sugar you buy is more responsibly grown and keep our Great Barrier Reef healthy.`}
                </div>
            </div>
        </div>
    </section>
    )
}