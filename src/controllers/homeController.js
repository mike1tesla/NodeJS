
const getHomePage = (req, res) => {
    //process data
    //call models
    res.send('Hello World! I\'m Justin')
}
const getJustin = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getJustin
}