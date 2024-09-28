import { transformCard } from '../transformers/transform-card';

export const putCard = (card) =>
  fetch(`https://66f71230b5d85f31a341f2dd.mockapi.io/api/cards/${card.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      id: card.id,
      image_url: card.imageUrl,
      description: card.description,
      is_liked: card.isLiked,
    }),
  })
    .then((loadedCard) => loadedCard.json())
    .then(transformCard);
