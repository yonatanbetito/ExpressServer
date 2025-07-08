import express from 'express';
const app = express();

const users = [
    { id: 1, name: 'Yonatan' },
    { id: 2, name: 'David' },
    { id: 3, name: 'Sarah' }
];

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


app.get('/users/:id', (req, res) => {
    
    const userId = req.params.id;
    console.log(userId);
    res.json(users);
});

//מתחיל לההזין לשרת
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
