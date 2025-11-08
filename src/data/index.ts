import { card as royalGoodies } from './royalGoodies';
import { card as royalSoup } from './royalSoup';
import { card as senorFoodTruck } from './senorFoodTruck';
import { card as dreamDrop } from './dreamDrop';
import { card as coyote } from './coyote';
import { card as nemo } from './nemo';
import { card as oopsMine } from './oopsMine';
import { card as amberRush } from './amberRush';

export const cards = {
  royalSoup,
  royalGoodies,
  senorFoodTruck,
  dreamDrop,
  coyote,
  nemo,
  oopsMine,
  amberRush,
};
export type gameInfoType = {
  title: string;
  description: string[] | string;
  isList?: boolean;
};
export type CardKey = keyof typeof cards;
export type Game = (typeof cards)[CardKey];