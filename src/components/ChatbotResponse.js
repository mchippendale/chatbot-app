import About from './About'

export default function ChatbotResponse(message, id) {

    const pathname = window.location.pathname
    
    const lowercase = message.toLowerCase()
   
    if (lowercase === "") {
        return {
            id: id + 2,
            message: "Please type text into the input box :)",
            type: "computer",
            route: "/about",
            options: false,
            component: "Home"
        }
    } else if (lowercase.includes("sound")) {
        if (lowercase.includes("sound on")){
            return {
                id: id + 2,
                message: "Sound is turned on, type 'sound off' to stop.",
                type: "computer",
                route: pathname,
                options: false
            }
        } else if (lowercase.includes("sound off")) {
            return {
                id: id + 2,
                message: "Sound is turned off, type 'sound on' to play.",
                type: "computer",
                route: pathname,
                options: false,
            }
        } else {
            return {
                id: id + 2,
                message: "Would you like to turn the sound on? Type:",
                type: "computer",
                route: pathname,
                options: true,
                listItems: ['Sound on', 'Sound off']
                }
        }
    } else if (lowercase.includes("hello")) {
        return {
            id: id + 2,
            message: "Hey! What would you like to learn about?",
            type: "computer",
            route: "/",
            options: true,
            listItems: ['About us', 'Shopping', 'Travel', 'Plastics', 'Recycling', 'Energy','Food waste', 'Sound'],
            component: "About"
        }
    }  else if (lowercase.includes("food")) {
        return {
            id: id + 2,
            message: `Trying to reduce your food waste? 
            - Shop local and cut down on processed foods.
            `,
            type: "computer",
            route:"/foodwaste",
            options: false,
            component: "Food"
        }
    }  else if (lowercase.includes("energy")) {
        return {
            id: id + 2,
            message: `Make the move to clean energy. 
            Switch to an energy provider who uses renewable energy sources.
            `,
            type: "computer",
            route: "/energy",
            options: false,
            component: "Energy"
        }
        
    }   else if (lowercase.includes("recycling") || lowercase.includes("recycle")) {
        return {
            id: id + 2,
            message: `Reduce, reuse, recycle.`,
            type: "computer",
            route: "/recycle",
            options: false
        }
    } else if (lowercase.includes("shopping") || lowercase.includes("shop")) {
        return {
            id: id + 2,
            message: `Buy biodegradable products.`,
            type: "computer",
            route: "/shopping",
            options: false,
            component: "Shopping"
        }
    } else if (lowercase.includes("plastics") || lowercase.includes("plastic")) {
        return {
            id: id + 2,
            message: `Buy biodegradable products.`,
            type: "computer",
            route: "/plastics",
            options: false,
            component: "Plastic"
        }
    } else if (lowercase.includes("travel")) {
        return {
            id: id + 2,
            message: `Buy biodegradable products.`,
            type: "computer",
            route: "/travel",
            options: false,
            component: "Travel"
        }
    }  else if (lowercase.includes("about")) {
        return {
            id: id + 2,
            message: "Let's check out the about page!",
            type: "computer",
            route: "/about",
            options: false,
            component: "About"
        } 
    } else if (lowercase.includes('home')) {
        return {
            id: id + 2,
            message: `Ok let's go home.`,
            type: "computer",
            route: "/",
            options: false,
            component: "Home"
        }
    } else if (lowercase) {
        return {
            id: id + 2,
            message: `Sorry I didn't understand what you typed, I'll take you back to the about page.`,
            type: "computer",
            route: "/about",
            options: false,
            component: "About"
        }
    }

}
