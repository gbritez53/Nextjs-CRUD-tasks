import { connect, connection } from 'mongoose';

const conn = () => {
  isConnected: false;
};

export const connectDB = async () => {
  if (conn.isConnected) return;

  const db = await connect(process.env.MONGODB_URI);
  conn.isConnected = db.connections[0].readyState;
  console.log(`Connected to: ${db.connection.db.databaseName}`);
};

connection.on('connected', () => {
  console.log('Mongoose is connected');
});

connection.on('error', (err) => {
  console.log(err);
});
