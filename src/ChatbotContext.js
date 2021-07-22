// importing new hooks useState and useContext
import React, { useState, createContext } from 'react'
import ChatbotResponse from './components/ChatbotResponse'
import { useHistory } from 'react-router-dom'


// 2 things 
// when you export it becomes a key inside the object being exported
export const ChatbotContext = createContext()

//wraper component for your entire app. 
export function ChatbotProvider(props){
    
    // const mediaQuery = window.matchMedia( '(max-width: 375px )')
    // const [phoneScreenView, setPhoneScreenView] = useState(false)

    // if (mediaQuery.matches){
    //     console.log('Media Query Matched!')
    //     setPhoneScreenView(true)
    // } else {
    //     setPhoneScreenView(true)
    // }

    let history = useHistory();
    const [inputValue, setInputValue] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)

    const [userMessages, setUserMessage] = useState([
        {
            id: 1,
            message: "Hi my name is Greta 😊",
            type: "computer"
        },
        {
            id: 2,
            message: "I'm here to help you learn how to reduce your CO2 footprint 👣",
            type: "computer"
        },
        {
            id: 3,
            message: "Try asking about one of these topics:",
            type: "computer",
            route: "/",
            options: true,
            listItems: ['About us', 'Shopping', 'Travel', 'Plastics', 'Recycling', 'Energy','Food waste', 'Sound']
        }
    ])

    const soundStatus = (message) => {
        const lowercase = message.toLowerCase()
        if (lowercase.includes("sound on")) {
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    }

    // use the callback style () => getCompMessage
    const addUserMessage = (message) => {
        soundStatus(message)
        setInputValue("")    
        setUserMessage([...userMessages,
            {
            id: userMessages.length + 1,
            message: message,
            type: "user"
            }])
    }

    const addChatBotMessage = (message) => {
        const botResponse = ChatbotResponse(message, userMessages.length)
        history.push(botResponse.route)   
        setUserMessage([...userMessages, 
            botResponse])
    }




    // value to provide for consumer on the otherside
    return <ChatbotContext.Provider value={
        { 
        userMessages, 
        addUserMessage, 
        addChatBotMessage, 
        inputValue, 
        setInputValue, 
        isPlaying
        }}>
        {props.children}
    </ChatbotContext.Provider>
}
