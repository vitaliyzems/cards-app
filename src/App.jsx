import styled from 'styled-components';
import { CardsList } from './components';

const AppContainer = ({ className }) => {
  return (
    <div className={className}>
      <h1>Список карточек</h1>
      <CardsList />
    </div>
  );
};

export const App = styled(AppContainer)`
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
