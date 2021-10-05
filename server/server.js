const path = require('path');    // require je node nacin importa
const express = require('express'); //ucitavamo express
const app = express(); //formiramo instancu expresa,tj.novu app
const publicPath = path.join(__dirname, '..', 'public'); 
const port = process.env.PORT || 3000; //env.Heroku varijabla||staticna 3000 ako nismo na Heroku 

app.use(express.static(publicPath));  //servujemo sve nase assets-e(4 fajla) iz public foldera

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
}); //ako zahtev za url ne nadje asset u public folderu, neka nadje preko index.html fajla

app.listen(port, () => {
  console.log('Server is up!');   
});        //ceka na din.portu Heroku ili stat.localhost 3000 zahtev i prikazuje fajl i 
		// ispisuje ovaj log