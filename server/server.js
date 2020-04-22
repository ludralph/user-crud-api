import express from 'express';
import devBundle from './devBundle';
import path from 'path';
import { MongoClient } from 'mongodb';
import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', () =>{
    throw new Error(`Unable to connect to database ${ mongoUri}`)
})

if (process.env.NODE_ENV === 'development'){
    devBundle.compile(app);
}

const CURRENT_WORKING_DIR = process.cwd();

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req,res) => {
    res.status(200).send(template())
});

app.listen(config.port, function onStart(err){
    if (err){
        console.log(err)
    }
    console.info('Server started on port %s.', config.port  )
})