/**
 * @author Svetlin Tanyi <svetlintanyi@gmail.com> on 2019. 08. 24.
 */

const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth')
const multer = require('multer')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files')
    },
    filename: (req, file, cb) => {
        cb(null, 'pushfile')
    }
})
const upload = multer({storage})

server.db = router.db

server.use(middlewares)
server.use(jsonServerAuth)
server.use((req, res, next) => {
    console.log(req.headers)
    if(!req.headers.authorization){
        res.sendStatus(401)
    }else {
        next()
    }
})
server.post('/push', upload.single('file'), (req, res, next) => {
    res.sendStatus(201)
})

server.get('/sync', (req, res, next) => {
    res.download('files/pushfile')
})

server.use(jsonServer.bodyParser)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})