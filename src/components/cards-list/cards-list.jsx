import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCards, selectLoading } from '../../selectors';
import { useEffect, useState } from 'react';
import { ACTION_TYPE, fetchCardsAsync } from '../../actions';
import { Card } from './components';

const CardsListContainer = ({ className }) => {
  const [filter, setFilter] = useState(false);
  const cards = useSelector(selectCards);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardsAsync(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    if (cards.length) {
      dispatch({ type: ACTION_TYPE.SET_LOADING, payload: false });
    }
  }, [cards, dispatch]);

  if (loading) {
    return <h3 style={{ padding: '100px 0' }}>Загрузка...</h3>;
  }

  return (
    <div className={className}>
      {!cards.length ? (
        <h3>Список пуст</h3>
      ) : (
        <>
          <button onClick={() => setFilter(!filter)}>
            Показать {filter ? 'все' : 'залайканые'}
          </button>
          <div className="cards">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const CardsList = styled(CardsListContainer)`
  padding: 50px 0;

  & button {
    width: 200px;
    height: 30px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #666;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }

  & .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
