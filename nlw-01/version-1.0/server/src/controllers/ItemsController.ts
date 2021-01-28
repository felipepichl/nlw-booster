import { Request, Response } from 'express';
import knex from '../database/connection';

export default class ItemsController {

  async index(request: Request, response: Response){
    const items = await knex('items').select('*');

    const serializedItem = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.101:3333/uploads/${item.image}`
      }
    })

    return response.json(serializedItem);
  }

}