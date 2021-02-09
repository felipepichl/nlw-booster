import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Point from '@models/Point';

import CreatePointServices from '../services/CreatePointServices';
import ListPointsServices from '../services/ListPointsServices';

import pointView from '../views/PointView';

export default class PointsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listPoints = new ListPointsServices();

    const points = await listPoints.execute();

    return response.json(pointView.renderMany(points));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const pointRepository = getRepository(Point);

    const point = await pointRepository.findOneOrFail(id, {
      relations: ['items'],
    });

    return response.json(pointView.render(point));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const { filename: image } = request.file as Express.Multer.File;

    const createPoint = new CreatePointServices();

    const point = await createPoint.execute({
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
      image,
    });

    return response.status(201).json(point);

    /**
    const itemSchema = Yup.number().required();

    await itemSchema.validate(itemsIds, {
      abortEarly: false,
    });

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
    */
  }
}
