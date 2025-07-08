import express from 'express';
const app = express();


//בקשת גט לכל הurl 
app.get('/', (req, res) => {
    // send שווה באותה מידה end
    res.send('Hello World!');
    res.end();
});

//בקשה עם אנדפוינט
app.get('/about', (req, res) => {
    res.send('About us');
    res.end();
});


//מתחיל לההזין לשרת
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
