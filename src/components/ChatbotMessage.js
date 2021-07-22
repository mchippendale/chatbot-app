import About from './About'

export default function ChatbotMessage(props) {

    const component = props.component
    console.log(props.listItems)

    if (props.message) {
        return <div className="greta-message-container">
            <div className="greta-message-wrapper">
                <div className="greta-avatar">G</div>
                <p className="greta-message" key={props.idx}>{props.message}</p>
            </div>
            <div className="greta-message-item-container">
                {console.log(props.listItems)}
                {props.listItems.map((item, itemIdx)=> (
                     <p className="greta-message-item" key={itemIdx}>{item}</p>
                ))}
            </div>
        </div>
    } else {
        console.log(props.route)
        return <div className="greta-message-container">
            <div className="greta-message-wrapper">
                <div className="greta-avatar">G</div>
                <p className="greta-message" key={props.idx}>{props.message.message}</p>
            </div>
            {props.component === component && <About />}
            </div>
    }


}