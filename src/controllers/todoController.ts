import { Request, Response } from 'express';
import Todo, { ITodo } from '../database/Models/Todo';

// Function to create a new todo
export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body;
        console.log('received body', title, description);
        const newTodo: ITodo = new Todo({
            title: title,
            description: description,
        });
        const savedTodo: ITodo = await newTodo.save();
        res.status(200).json({
            message: 'Todo created successfully',
            data: savedTodo,
        });
    } catch (error) {
        res.status(400).json({
            error: 'Error occurred while creating todo!',
        });
    }
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if (!updatedTodo) {
            res.status(404).json({
                message: 'Todo not found',
            });
            return;
        }
        res.status(200).json({
            message: 'Todo updated successfully',
            data: updatedTodo,
        });
    } catch (error) {
        res.status(400).json({
            error: 'Error occurred while updating todo!',
        });
    }
};


export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const todo: ITodo | null = await Todo.findById(id);
        if (!todo) {
            res.status(404).json({
                message: 'Todo not found',
            });
            return;
        }
        res.status(200).json({
            message: 'Todo found successfully',
            data: todo,
        });
    } catch (error) {
        res.status(400).json({
            error: 'Error occurred while fetching todo!',
        });
    }
};
