import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Very Funny
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Scrolling was disabled. Even if you scroll beforehand the
        modal is displayed correctly
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum. Proin
        fermentum leo vel orci porta. Purus ut faucibus pulvinar
        elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a. Felis eget velit aliquet sagittis id
        consectetur purus ut faucibus. Vestibulum sed arcu non odio
        euismod lacinia at quis. Arcu non odio euismod lacinia at
        quis. Bibendum enim facilisis gravida neque convallis a cras
        semper auctor. Dui nunc mattis enim ut tellus elementum
        sagittis vitae et. Consectetur purus ut faucibus pulvinar
        elementum integer enim neque. At lectus urna duis convallis
        convallis tellus id interdum. Cursus metus aliquam eleifend
        mi. Lacus suspendisse faucibus interdum posuere lorem ipsum.
        Risus ultricies tristique nulla aliquet enim tortor at.
      </p>
    </div>
  );
}

export default ModalPage;
