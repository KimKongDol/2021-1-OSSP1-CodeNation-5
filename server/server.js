const bodyParser = require('body-parser');
const express = require('express'); //express 프레임워크 사용합니다.
const app = express();
const port = process.env.port || 5000; //서버의 포트번호를 지정해줍니다. 5000번에서 확인할 수 있습니다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
// 이후 데이터를 주고 받을 때 post방식을 사용하기 위한 초기 설정입니다. 무시하시면 됩니다.

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:osspcodenation@ossp-codenation.6ezqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected!'))
.catch(() => console.log(err)); 

app.get('/api/file', (req, res)=>{
    res.send({ message: '자료조사 봇 서버에 오신걸 환영합니다.'});
})

app.listen(port, ()=>{console.log(`listening on port${port}`)})