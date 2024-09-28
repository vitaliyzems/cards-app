import { getCards } from '../api';
import { ACTION_TYPE } from './ACTION-TYPE';

export const fetchCardsAsync = (filter) => (dispatch) => {
  getCards(filter).then((cards) =>
    dispatch({ type: ACTION_TYPE.SET_CARDS, payload: cards })
  );
};
