import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
import { produce } from 'immer';

const INCREMENT_COUNTER = 'increment-counter';
const DECREMENT_COUNTER = 'decrement-counter';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const SUBMIT = 'submit';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNTER:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case SUBMIT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNTER,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNTER,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-30"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
