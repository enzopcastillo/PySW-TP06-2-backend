require('./database');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors({origin: "http://localhost:4200"}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/libros', require('./routes/libro.routes'));
app.use('/api/transacciones', require('./routes/transaccion.routes'));
app.use('/api/personas', require('./routes/persona.routes'));
app.use('/api/pasajes', require('./routes/pasaje.routes'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Server started on port', app.get('port'));
});
