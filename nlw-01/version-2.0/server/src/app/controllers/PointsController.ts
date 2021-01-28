import { Request, Response } from 'express';
import { getRepository, In } from 'typeorm';
import * as Yup from 'yup';

import Point from '@models/Point';
import Item from '@models/Item';

import pointView from '../views/PointView';

export default class PointsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const pointRepository = getRepository(Point);

    const points = await pointRepository.find({
      relations: ['images', 'items'],
    });

    return response.json(pointView.renderMany(points));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const pointRepository = getRepository(Point);

    const point = await pointRepository.findOneOrFail(id, {
      relations: ['images', 'items'],
    });

    return response.json(pointView.render(point));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const pointRepository = getRepository(Point);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const itemsIds = items
      .split(',')
      .map((item: string) => Number(item.trim()));

    const itemSchema = Yup.number().required();

    await itemSchema.validate(itemsIds, {
      abortEarly: false,
    });

    const itemsRepository = getRepository(Item);

    const existentsItem = await itemsRepository.find({
      where: {
        id: In(itemsIds),
      },
    });

    const data = {
      name,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      images,
      items: existentsItem,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      whatsapp: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      city: Yup.string().required(),
      uf: Yup.string().required().max(2),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const point = pointRepository.create(data);

    await pointRepository.save(point);

    return response.status(201).json(point);
  }
}
