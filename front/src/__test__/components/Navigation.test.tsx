import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Navigation from '../../components/Navigation';

describe('<Navigation/>', () => {
  let container = null;

  it('renders correctly', () => {
    // 렌더링 테스트
    container = mount(<Navigation loginDone={false} />);
  });

  it('matches snapshot', () => {
    // 스냅샷 비교
    expect(container.html()).toMatchSnapshot();
  });
});
