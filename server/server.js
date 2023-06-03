import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './router/routes.js';


/** import connection file */
import connect from './database/conn.js';

const app = express()


/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
// config();


app.get('/', (req, res) => {
    res.send("my name is vaibhav")
}
)

// app.listen(3000, () => {
//     console.log('listening on 3000')
// })

app.use('/api', router) /** apis */


connect().then(() => {
    try {
        app.listen(3000, () => {
            console.log(`Server connected to http://localhost:3000`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})