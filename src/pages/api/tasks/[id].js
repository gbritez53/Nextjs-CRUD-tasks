import { connectDB } from 'config/mongoose';
import Task from 'models/task';

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const task = await Task.findOne({ _id: id });
        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json(task);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

    case 'PUT':
      try {
        const task = await Task.findOneAndUpdate({ _id: id }, body, {
          new: true,
        });
        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json(task);
      } catch (error) {}

    case 'DELETE':
      try {
        const deleteTask = await Task.findOneAndDelete({ _id: id });
        if (!deleteTask) {
          return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json('Deleted Task');
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ error: 'Method not allowed' });
  }
};
