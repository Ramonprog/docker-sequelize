import express from 'express';
import routes from './routes.js'
import Users from './models/Users.js'; 
import Sequelize from 'sequelize';
import config from './config/database.js'

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);

Users.init(sequelize);

app.use('/api', routes);

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


