/* eslint-disable react/jsx-key */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PageNav from '../../components/PageNav';

configure({ adapter: new Adapter() });

const [fetchGamesByGenre, setPage] = new Array(2).fill(jest.fn());

const fullSetup = () => {
  const enzymeWrapper = mount(
    <PageNav
      fetchGamesByGenre={fetchGamesByGenre}
      genre="All"
      page={1}
      setPage={setPage}
      totalPages={100}
      showGenre={false}
    />,
  );

  return enzymeWrapper;
};

describe('Full rendered PageNav', () => {
  const wrapper = fullSetup();

  it('should render 10 buttons', () => {
    expect(wrapper.find('.page-btn')).toHaveLength(10);
  });

  it('should disable Previous button when on page 1', () => {
    expect(wrapper.find('.prev-btn').prop('disabled')).toBe(true);
  });

  it('should enable Previous button when page > 1', () => {
    wrapper.setProps({ page: 2 });
    expect(wrapper.find('.prev-btn').prop('disabled')).toBe(false);
  });

  it('should disable Next button when on the last page(100)', () => {
    wrapper.setProps({ page: 100 });
    expect(wrapper.find('.next-btn').prop('disabled')).toBe(true);
  });

  it('should render next/previous page numbers on buttons'
      + ' when next/previous clicked and last/first page button selected', () => {
    wrapper.setProps({ page: 10 });
    wrapper.find('.next-btn').simulate('click');

    expect(wrapper.find('.page-btn').first().text()).toBe('10');
    expect(wrapper.find('.page-btn').last().text()).toBe('19');

    wrapper.find('.prev-btn').simulate('click');

    expect(wrapper.find('.page-btn').first().text()).toBe('1');
    expect(wrapper.find('.page-btn').last().text()).toBe('10');
  });
});
