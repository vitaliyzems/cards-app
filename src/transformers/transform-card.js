export const transformCard = (dbCard) => ({
  id: dbCard.id,
  imageUrl: dbCard.image_url,
  description: dbCard.description,
  isLiked: dbCard.is_liked,
});
