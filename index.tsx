import express, { Express, Request, Response } from 'express';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import React from 'react'

const app: Express = express();
 
app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello, Running on port: ${port}</h2>`);
});


app.get('/pdf', (req: Request, res: Response) => {
    ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
    res.send(`<h2>done</h2>`);
 });
  

const port = 3001
app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})



 