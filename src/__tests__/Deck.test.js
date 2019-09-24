import React from 'react';
import renderer from 'react-test-renderer';
import Deck from '../components/Deck/Deck';


describe('<Deck />', () => {
  const deck = {
    title: 'My Deck of Stuff',
    records: [
      {
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
          },
        ],
      },
      {
        title: 'Content Record 2',
        copy: 'Content Record 2 Copy Here...',
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
          },
        ],
      },
      {
        title: 'Content Record 3',
        copy: 'Content Record 3 Copy Here...',
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
          },
        ],
      },
    ],
  };

  it('Deck is rendered at application start', () => {
    const app = shallow(<Deck deck={deck}/>);
    expect(app.find('.deck').exists()).toBe(true);
  });

  it('content is rendered', () => {
    const app = mount(<Deck deck={deck}/>);
    expect(app.find('h2').text()).toEqual('My Deck of Stuff');
  });

  it('renders properly', () => {
    const tree = renderer.create(<Deck deck={deck}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
