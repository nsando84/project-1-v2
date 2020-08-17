In this project we were given the follow instructions: create an application that uses two server-side APIs, a CSS framework other than Bootstrap, Must be interactive (i.e: accept and respond to user input), Use at least one new third-party API, Must have a polished UI, Must meet good quality coding standards, Does not use alerts, confirms or prompts (look into _modals_), Must be deployed to GitHub Pages.

For my part of the assignment, I wrote the chart feature (trend-chart.js), and did part of the UI(UIkit Framework) as well. For the chart, I used chart.js. It was a good experience being able to experiment with a new library while coding this feature. 

For the stock data, I used the widely available and accessible API, Alpha Advantage. Originally I made three seperate API calls to fetch the past 30 day stock prices, 8 and 21 day moving averages. However, the API only allows 5 pulls per minute on their free tier and that might take away from user experience, so I decided to challenge myself to gather this information using only a single API call. I accomplished this by calculating the moving averages in code from the stock data. Also, I put in a feature that detects a trend based on the direction of the moving averages. A trend is when the 8 and 21 day moving avereages move parallel to each other in either direction for a set number of days, in either scenerio the user will see "uptrend detected" or "downtrend detected", if the lines cross at all the user will see that "No trend detected." Lastly, because of the API limitations, I put a restriction on the searches that the user can make in a 60 seconds period. They will get locked out of searching if they make a search that will exceed the API's limit restrictions. 


