import './css/Messages.css'
import About from './About'

export default function Messages(props) {

    const showComponent = props.message.route
    console.log(showComponent)

    if (props.message.type === 'computer') {
        if (props.message.options) {
            return <div className="greta-message-container">
                <p className="greta-message" key={props.idx}>{props.message.message}</p>
                <div className="greta-message-item-container">
                    {props.message.listItems.map((item, itemIdx)=> (
                         <p className="greta-message-item" key={itemIdx}>{item}</p>
                    ))}
                </div>
            </div>
        } else {
            return <div className="greta-message-container">
            <p className="greta-message" key={props.idx}>{props.message.message}</p>
            </div>
        }
    } else {
        return <div className="user-message-container">
            <p className="user-message" key={props.idx}>{props.message.message}</p>
            {/* <About /> */}
        </div>
    }

}