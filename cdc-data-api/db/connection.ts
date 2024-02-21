import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'challenge_cdc_data' 
});

connection.connect((err: any) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default connection;
