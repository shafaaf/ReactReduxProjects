import {Request, Response} from "express";

import pokemons = require('../db.json');

export class Pokemons {
    public routes(app): void {

        app.route('/pokemons')
            .get((req: Request, res: Response) => {
                res.status(200).send(pokemons);
            });

        app.route('/pokemons/:id')
            .get((req:Request, res: Response) => {
                let id = req.params.id;
                res.status(200).send(pokemons[id]);
            });

        app.route('/pokemons')
            .post((req: Request, res: Response) => {
                let name = req.body.name;   //this requires body-parser package
                let attack = req.body.attack;
                //logic to store in database
            });

    }
}
