import { connectDB } from 'src/config/mongoose';

connectDB();

export default function handler(req, res) {
  res.status(200).json('tasks');
}
