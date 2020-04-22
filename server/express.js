import express from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import Template from './../template';

const app = express();

const CURRENT_WORKING_DIR = process.cwd();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req,res) => {
    res.status(200).send(Template())
});

export default app;