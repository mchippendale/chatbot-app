import { useContext, useState, useEffect, useRef} from 'react'
import { ChatbotContext } from '../ChatbotContext'
import Messages from './Messages'


export default function Chatbot() {

    const {
        userMessages,
        addUserMessage,
        addChatBotMessage,
        inputValue,
        setInputValue
    } = useContext(ChatbotContext)

    const [message, setMessage] = useState("")

    if (userMessages[userMessages.length - 1].type === 'user') {
        setTimeout(() => addChatBotMessage(message), 1000)
    }


    const handleChange = (e) => {
        setMessage(e.target.value)
        setInputValue(e.target.value)
    }


    const messagesEl = useRef(userMessages)

    useEffect(() =>  {
        if (messagesEl) {
            messagesEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behaviour: 'smooth'});
            });
        }
    }, [])

    const handleKeyPress = (e) => {
        if (message.length > 0) {
            if (e.key === 'Enter') {
                return addUserMessage(message)
            }
        }
    }

    

    return ( 
    // <section className="chatbot-outer-container">

        <div className="chatbot-container">
            <div className="chatbot-header">
                <div className="chatbot-header-title">Greta</div>
            </div>

            <div className="chatbot-message-display" ref={messagesEl}>
                {userMessages.map((message, idx) => 
                   <Messages message={message} idx={idx} />
                )}
            </div>

            <div className="message-input-container">
                <input 
                type="text" 
                value={inputValue}
                onKeyPress={handleKeyPress}
                className="message-input-box" 
                placeholder="write your message here"
                onChange={handleChange}
                />
                <button 
                onClick={() => addUserMessage(message)}
                className="message-send-btn">send
                </button>
            </div>
        </div>

    // </section>
    )
}

