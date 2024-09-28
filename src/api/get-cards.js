import { transformCard } from '../transformers/transform-card';

export const getCards = (filter) => {
  const url = `https://66f71230b5d85f31a341f2dd.mockapi.io/api/cards${
    filter ? '?is_liked=true' : ''
  }`;
  return fetch(url)
    .then((loadedCards) => loadedCards.json())
    .then((dbCards) => dbCards.map(transformCard));
};
