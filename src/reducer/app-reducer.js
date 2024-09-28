import { ACTION_TYPE } from '../actions';

const initialState = {
  cards: [],
  loading: true,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_LOADING:
      return { ...state, loading: payload };
    case ACTION_TYPE.SET_CARDS:
      return { ...state, cards: payload };
    case ACTION_TYPE.CHANGE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id !== payload.id) {
            return card;
          }
          return payload;
        }),
      };
    case ACTION_TYPE.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== payload),
      };
    default:
      return state;
  }
};
