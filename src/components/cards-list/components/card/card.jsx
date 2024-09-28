import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { ACTION_TYPE, toggleLikeAsync } from '../../../../actions';

const CardContainer = ({ className, card }) => {
  const dispatch = useDispatch();

  const deleteCard = (id) => {
    dispatch({ type: ACTION_TYPE.DELETE_CARD, payload: id });
  };

  return (
    <div className={className}>
      <img src={card.imageUrl} alt="" />
      <div className="card-content">
        <p>{card.description}</p>
        <div className="card-footer">
          {!card.isLiked ? (
            <FontAwesomeIcon
              onClick={() =>
                dispatch(toggleLikeAsync({ ...card, isLiked: true }))
              }
              icon={faHeart}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() =>
                dispatch(toggleLikeAsync({ ...card, isLiked: false }))
              }
              icon={solidHeart}
              style={{ color: 'red', cursor: 'pointer' }}
            />
          )}
          <FontAwesomeIcon
            onClick={() => deleteCard(card.id)}
            icon={faTrashAlt}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export const Card = styled(CardContainer)`
  width: 300px;

  & img {
    display: block;
  }

  & .card-content {
    padding: 5px;
    border: 1px solid #666;
    border-top: none;
  }

  & .card-footer {
    padding: 10px 0 0;
    display: flex;
    justify-content: space-between;
  }
`;
