# Beyond BackEnd Challenge

<a href="https://beyondso.notion.site/Backend-Coding-Challenge-593b711509744cef843ebc0dca1d89f5"> Briefing </a>
# Improvements

Due to time limitations there were a fwe topics on which the deevelopmnt was simplified:

* Tests
* Health check
* Log control

# Assumptions
* The date requeested will always have the right format (No middleware needed)
* A month has 30 days
* A year has 365 days
* The difference given as a String will go from bigger to lower units: `3 years 2 months 3 days 9 hours 5 minutes and 3 seconds ago`

# Run

Use command `npm start` to run thee server.

# Curl

`curl -d '{"date":"2021-08-11T13:47:51.381Z"}' -H 'Content-Type: application/json' http://localhost:3000/date`