import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/Card/Card';


describe('<Card />', () => {
  const card = {
    title: 'Content Record 1',
    copy: 'Content Record 1 Copy Here...',
    media: {
      alt: 'This is a picture',
      title: 'This is the title of the picture',
      href: 'https://placehold.it/200x100',
    },
    links: [
      {
        type: 'primary',
        title: 'Click Me',
        href: 'https://www.foo.com',
      },
      {
        type: 'secodary',
        title: 'Not Me',
        href: 'https://www.bar.com',
      }],
  };

  it('Card is rendered at application start', () => {
    const app = shallow(<Card card={ card }/>);
    expect(app.find('.card').exists()).toBe(true);
  });

  it('content is rendered', () => {
    const app = mount(<Card card={ card }/>);
    expect(app.find('h3').text()).toEqual('Content Record 1');
  });

  it('renders properly', () => {
    const tree = renderer.create(<Card card={ card }/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
