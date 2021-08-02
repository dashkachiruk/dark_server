const express = require('express')
const app = express()
const port = 3000


const calendarRouter = require('./routes/calendar.routes')
const eventRouter = require('./routes/event.routes')
const phoneRouter = require('./routes/phone.routes')
const reviewRouter = require('./routes/review.routes')
const userRouter = require('./routes/user.routes')

app.use(express.json())

app.use('/api', calendarRouter)
app.use('/api', eventRouter)
app.use('/api', phoneRouter)
app.use('/api', reviewRouter)
app.use('/api', userRouter)

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})