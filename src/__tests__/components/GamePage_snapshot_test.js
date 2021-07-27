import toJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import GamePage from '../../containers/GamePage';
import store from '../../redux/store';

configure({ adapter: new Adapter() });
it('Renders correctly', () => {
  const match = {
    params: {
      gameId: '3498',
    },
  };

  const wrapper = mount(
    <Provider store={store}>
      <GamePage match={match} />
    </Provider>,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
