import Rainforest from './Images/rainforestbg.jpg'
import './css/Home.css'

export default function Home() {

    return (
        <section className="main-content">

            <section className="header-container">
                <div className="page-heading-outer-container">
                    <div className="page-heading-inner-container">
                        <h1 className="page-heading-title">Home</h1>
                        <p className="page-heading-text">Australians consume a lot more per person than in many other countries. The food, energy and water we use, the timber and plastics that we depend upon – everything we do uses natural resources and produces waste. The measure of this impact on the environment is called our ecological footprint. Australia's ecological footprint is gigantic. In fact, if the rest of the world lived like we did, we’d need over three planets to meet our total demands on nature. It's a frightening figure, especially when you consider that over-consumption is a major contributor to global warming and climate change.</p>
                        <img className="rainforest-img" src={Rainforest} />
                        <p className="page-heading-text">Eager to play your part and start living a sustainable lifestyle? Keen to explore what changes you can make in your everyday life to help create a cleaner and more sustainable future? See how you can reduce your ecological footprint by adopting new habits that are softer on the environment.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}