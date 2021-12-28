import { Request, Response } from 'express';
import pool from '../database';

import db from '../database';


class GamesController {

    public async list (req: Request, res: Response) {
         await pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
            
        });
        
    }




    public async getOne (req: Request, res: Response) {

        const { id } = req.params;
         await pool.query('SELECT * FROM games where id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            if (result.length === 0){
            res.status(404).json("Product not found");
            }
            else res.json(result);

        });
        
        
    }


    

    public async create (req: Request,res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Game saved'});    


    }

    public async delete (req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE from games WHERE id = ?', [id]);
        res.json({message: 'The game was deleted'});
    }

    public async update (req: Request, res:Response){
        
        const { id } = req.params;
        
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body,id] );
        res.json({message: 'The game was updated'});
        
    }

}

const gamesController = new GamesController();

export default gamesController;