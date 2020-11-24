import app from './app';
import database from './database';

database.sync();
console.log('Conexao com o banco realizada com sucesso!')


app.listen(3000);

console.log('Server Executando na porta 3000')