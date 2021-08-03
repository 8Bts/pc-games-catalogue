import toJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GameItem from '../../components/GameItem';
import store from '../../redux/store';

configure({ adapter: new Adapter() });
it('Renders correctly', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <GameItem
          id={1}
          name="Grand Theft Auto V"
          relDate="01/01/11"
          genres={[
            {
              id: 1,
              name: 'action',
            },
            {
              id: 2,
              name: 'indie',
            },
          ]}
          img=""
          rating={4}
        />
      </BrowserRouter>
    </Provider>,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
