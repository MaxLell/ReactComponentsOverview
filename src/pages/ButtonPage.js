import Button from '../components/Button';
import { GoBell, GoAlert, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          onClick={handleClick}
          className={'mb-5'}
          rounded
          success
        >
          <GoBell />
          Huhu
        </Button>
      </div>
      <div>
        <Button primary>
          <GoAlert />
          Hello
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Stuff
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Death by SnuSnu
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
