const path = require('path');
const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const morgan = require('morgan');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const { notFound } = require('./middleware/error');

dotenv.config();
connectDb();
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
);

const dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '/client/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('Api running');
    });
}

//middleware
app.use(notFound);

//run
app.listen(
    process.env.PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`
    )
);
