import { useState, useReducer } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const INCREMENT = "Increment";
const DECREMENT = "Decrement";
const ADD = "Add";
const SET_VAl = "setVAl";

const Reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + state.valueToAdd,
      };
    case SET_VAl:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      return state;
  }
};

const CounterView = () => {
  //  const [counter, setCounter] = useState(0);
  //  const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(Reducer, {
    counter: 1,
    valueToAdd: 1,
  });

  const { counter } = state;
  console.log(state);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
          }}
          onPress={() => {
            dispatch({
              type: INCREMENT,
            });
            // setCounter(counter + 1)}
          }}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
          }}
          onPress={() => {
            dispatch({
              type: DECREMENT,
            });
            //setCounter(counter - 1)
          }}
        >
          <Text>{DECREMENT}</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
        }}
        onChangeText={(text) => {
          if (Number.isInteger(parseInt(text))) {
            dispatch({
              type: SET_VAl,
              payload: parseInt(text),
            });
          }
          //setValueToAdd(parseInt(text))
        }}
        placeholder="enter value to add"
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
        }}
        onPress={() => {
          dispatch({
            type: ADD,
          });
          //  setCounter(counter + valueToAdd)
        }}
      >
        <Text>Add Value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterView;
