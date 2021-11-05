import { Component } from "react";
import classes from "./Counter.module.css";

import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler} className={classes.button}>
          Increment
        </button>
        <button onClick={increaseHandler} className={classes.button}>
          Increase
        </button>
        <button onClick={decrementHandler} className={classes.button}>
          Decrement
        </button>
      </div>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return;
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       <div>
//         <button onClick={this.incrementHandler} className={classes.counter}>
//           Increment
//         </button>
//         <button onClick={this.decrementHandler} className={classes.counter}>
//           Decrement
//         </button>
//       </div>
//     </main>;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
