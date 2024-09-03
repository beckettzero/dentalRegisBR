const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5001; // Usa un puerto diferente para evitar conflictos

// Configura el middleware
app.use(bodyParser.json());

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'ns1083.ifastnet.com',
  user: 'dentalreg_Beckett',
  password: 'Wolfzero00$$',
  database: 'dentalreg_dendistasLuisTeutli'

});

// Conecta a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ status: 'error', message: 'Datos incompletos' });
  }

  // Consulta para verificar las credenciales
  const query = 'SELECT * FROM usuarios WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return res.status(500).json({ status: 'error', message: 'Error del servidor' });
    }

    if (results.length > 0) {
      res.json({ status: 'success', message: 'Inicio de sesión exitoso' });
    } else {
      res.json({ status: 'error', message: 'Credenciales incorrectas' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor de autenticación corriendo en http://localhost:${port}`);
});
