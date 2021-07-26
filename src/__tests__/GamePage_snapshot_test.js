import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import GamePage from '../containers/GamePage';

it('Renders correctly', () => {
  const match = {
    params: {
      gameId: '3498',
    },
  };

  const wrapper = shallow(
    <GamePage match={match} />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
