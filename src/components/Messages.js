import './css/Messages.css'
import About from './About'
import FoodWaste from './FoodWaste'

export default function Messages(props) {

    const component = props.message.component
    console.log(component)

    if (props.message.type === 'computer') {
        if (props.message.options) {
            return <div className="greta-message-container">
                <div className="greta-message-wrapper">
                    <div className="greta-avatar">G</div>
                    <p className="greta-message" key={props.idx}>{props.message.message}</p>
                </div>
                <div className="greta-message-item-container">
                    {props.message.listItems.map((item, itemIdx)=> (
                         <p className="greta-message-item" key={itemIdx}>{item}</p>
                    ))}
                </div>
            </div>
        } else {
            console.log(props.message.route)
            return <div className="greta-message-container">
                <div className="greta-message-wrapper">
                    <div className="greta-avatar">G</div>
                    <p className="greta-message" key={props.idx}>{props.message.message}</p>
                </div>
                {props.message.component === component && <component />}
                </div>
        }
    } else {

        return <div className="user-message-container">
            <div className="user-message-wrapper">
                <p className="user-message" key={props.idx}>{props.message.message}</p>
                <div className="user-avatar">U</div>
            </div>
        </div>
    }

}