import { IProduct } from '../types/product';
import Bed from '../img/bed.png';
import Chair from '../img/chair.png';
import Table from '../img/table.png';
import Sofa from '../img/sofa.png';
import Lunar from '../img/chair-lunar.png';
import Closet from '../img/closet.png';

export const CATALOGUE_DATA: IProduct[] = [
  {
    id: 1,
    title: 'Кровать TATRAN',
    description:
      'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    pictureUrl: Bed,
    min: 1,
    max: 5,
  },
  {
    id: 2,
    title: 'Кресло VILORA',
    description:
      'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
    price: 21000,
    pictureUrl: Chair,
    min: 1,
    max: 5,
  },
  {
    id: 3,
    title: 'Стол MENU',
    description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
    pictureUrl: Table,
    min: 1,
    max: 5,
  },
  {
    id: 4,
    title: 'Диван ASKESTA',
    description:
      'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать.',
    price: 68000,
    pictureUrl: Sofa,
    min: 1,
    max: 5,
  },
  {
    id: 5,
    title: 'Кресло LUNAR',
    description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.',
    price: 40000,
    pictureUrl: Lunar,
    min: 1,
    max: 5,
  },
  {
    id: 6,
    title: 'Шкаф Nastan',
    description: 'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
    pictureUrl: Closet,
    min: 1,
    max: 5,
  },
];
