const url = "https://whois.fdnd.nl/api/v1/"
// const data = await fetch(url).then(response => response.json())

//imports the used node modules
import express from "express" 
import morgan from "morgan"
//express app
const app = express()
//listens for requests 
app.listen(5000)
//registers view engine
app.set("view engine", "ejs")
//app.use = middelware that executes on every request regardless of the method or url that is requested
//declares that all static files(css, assets) are in "public"
app.use(express.static('public'))
//parses incoming request in url encoded format
app.use(express.urlencoded({ extended:true }))
//logs when incoming requests are made
app.use(morgan(`
Request is made 
method: :method
url: :url
request: :req[host]
date & time: :date
status: :status
response time: :response-time`))

// renders html page based on url

app.get('/', async (req, res) => {
    //gets slug of selected squad
    let squadSlug = req.query.squad 
    //gets url of selected squad using the base url and squadslug
    let squadUrl = url + "squad/" + squadSlug

    //checks if an in inputbox is checked
    let data = typeof req.query.squad == undefined 
    //if it isnt, "data" is an empty string
    ? ""
    //if it is, "data" is the fetched data of the selected squad
    : await fetch(squadUrl).then(response => response.json()).catch(err => console.log(err))

    //renders html page along with either empty string or actual data
    res.render('index', {data, showingSquadOrNot: (data && data.squad) ? 'showingSquads' : 'notShowingSquads'})
})

//details page, always under the other pages or  else the browser will think that --
//-- any other page name is an id and it will match before the actual page matches
app.get("/member/:id", async (req, res)=>{
    const memberBaseUrl = "https://whois.fdnd.nl/api/v1/member/"
    const personalSlug = req.params.id
    const personalUrl = memberBaseUrl + personalSlug
    const data = await fetch(personalUrl)
    .then(response => response.json())
    .catch(err => err)
    console.log(personalUrl)
    res.render("member", {data, showingSquadOrNot: (data && data.squad) ? 'showingSquads' : 'notShowingSquads'})
})

//default when url does not exist, always last in code
app.use((req, res)=>{
    res.status(404).render("404", { title: "404" })
})