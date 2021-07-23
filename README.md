# Greener Footprint - a website with a built in rule-based chatbot component. 

[Greener Footprint](greenerfootprint.surge.sh)

## Summary

Greener Footprint is a static web-based application built using React JS. The webiste utilises a built in chatbot component to assist a user to navigate around the website. A user can communicate with the chatbot (Greta) to learn a bout how they can decrease their carbon footprint. Information has been sourced from [WWF - Change the way you live](https://www.wwf.org.au/get-involved/change-the-way-you-live#gs.731cqt)

## Planning:
![Whimsical wireframe 1](https://github.com/mchippendale/chatbot-app/edit/main/public/wireframe1.png)

## User Stories with Associated Technical Tasks

### Key Stories

* All navigation around the website is controlled by the chatbot. 
* Users can ask Greta the rule-based Chatbot to navigate to a page. 
* Chatbot can reply to users basic questions about regarding the outlined topics. 
  * 8 key pages: Foodwaste, Travel, Shopping, Plastics, Recycling and Energy. 
* Users can turn background sound on and off through the chabot. 

### Future Stories 

* User can ask the chatbot more questions. 
* Natural Language Processing via communication with an API e.g IBM Watson API or Google Cloud NLP API. 

## Landing Page Layout 

* Page is separated in two main sections. 
* Chatbot is on the left handside of the page to capture the users attention. 
* Main information is in the right-hand section. 


## Functionality 
The app is built in React JS and CSS. The chatbot has been built to follow a stepo of basic rules when receiving user input.

### Key react components: 
* React Router DOM component was used to switch between pages - Route and Switch were the key components. 
* UseContext component was utilised to manage global state. 
* UseState component was utilised to manage state local to a component.  
* PlaySound thrid party react component was utilised to enable sound in the application. 
* React hooks were utilised with in the application - Usehistory hook to route to a new page. UseEffect hook to enable the chatbot view to scroll to bottom when a new message is posted. 


## Functionality 
* React JS
* PlaySound 
* HTML
* CSS
