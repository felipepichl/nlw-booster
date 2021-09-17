import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePointService } from '@modules/points/services/CreatePointService';
import { ListPointsService } from '@modules/points/services/ListPointsService';
import { ShowPointService } from '@modules/points/services/ShowPointService';

import pointView from '@modules/points/views/PointView';

class PointsController {
  async index(request: Request, response: Response): Promise<Response> {
    const listPoints = container.resolve(ListPointsService);

    const points = await listPoints.execute();

    return response.json(pointView.renderMany(points));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPoint = container.resolve(ShowPointService);

    const point = await showPoint.execute({ id });

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

    const user_id = request.user.id;

    const { filename: image } = request.file as Express.Multer.File;

    const createPoint = container.resolve(CreatePointService);

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
      user_id,
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

export { PointsController };
