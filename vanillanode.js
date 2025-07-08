import http from 'http';
import { buffer } from 'stream/consumers';

const PORT = 3000;
const server = http.createServer((req, res) => {
    const body = []
    req.on('data', chunk => {buffer.push(chunk)})
    req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        console.log('Request received:', req.method, req.url, bodyString);
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (req.url === '/') {
            res.end('Hello World!');
        } else if (req.url === '/about') {
            res.end('About us');
        } else {
            res.end('Not Found');
        }
    }