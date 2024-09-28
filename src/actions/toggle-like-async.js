import { putCard } from '../api';
import { ACTION_TYPE } from './ACTION-TYPE';

export const toggleLikeAsync = (card) => (dispatch) => {
  putCard(card).then((likedCard) =>
    dispatch({ type: ACTION_TYPE.CHANGE_CARD, payload: likedCard })
  );
};
