import express, { Express, Request, Response } from 'express';
import ReactPDF from '@react-pdf/renderer';

import MyDocument from './MyDocument';
import React from 'react'

const app: Express = express();
 
app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello, Running on port: ${port}</h2>`);
});

app.get('/pdf', async (req: Request, res: Response) => {
    const pdf  = await ReactPDF.renderToString(<MyDocument />);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
    res.send(pdf);
 });
  
const port = 4001
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})



 