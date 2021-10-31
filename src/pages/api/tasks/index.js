import { connectDB } from 'config/mongoose';
import Task from 'models/task';

connectDB();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }

    case 'POST':
      try {
        const newTask = new Task(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }

    default:
      return res.status(400).json({ error: 'Method not allowed' });
  }
}
