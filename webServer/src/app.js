const path = require('path') // module for working with paths
const express = require('express') //webserver framework
const hbs = ('hbs')

const app = express() 

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') //This provides a relative path to the public folder
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars enginge and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath, (err) => {})

// Set up status directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/about.html', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/help.html', (req, res) => {
    res.render('help', {
        title: 'Help page',
        message: 'This is the help page'
    })
})

app.get('/weather', (req, res) => {
    res.send(
        {
            loaction:'Philadelphia',
            temperature:27,
            weather: 'overcast'
        }
    )
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})