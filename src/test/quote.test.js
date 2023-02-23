import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
