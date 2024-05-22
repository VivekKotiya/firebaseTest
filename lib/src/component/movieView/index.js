import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie, resetSlice } from "../../store";
//import { useDispatch }
//useDispatch
let a = 1;
const MovieView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies);

  let b = a - 1;
  addNewMovie = () => dispatch(addMovie("Dil " + a++));
  removeNewMovie = () => dispatch(removeMovie("Dil " + b));
  reset = () => dispatch(resetSlice());

  const songView = data?.map((item, key) => <Text key={key}>{item}</Text>);
  return (
    <View>
      {songView}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={addNewMovie}
          style={{
            padding: 5,
            borderColor: "black",
            borderWidth: 1,
            margin: 5,
          }}
        >
          <Text>Add Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={removeNewMovie}
          style={{
            padding: 5,
            borderColor: "black",
            borderWidth: 1,
            margin: 5,
          }}
        >
          <Text>remove Movie</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={reset}
        style={{
          padding: 5,
          borderColor: "black",
          borderWidth: 1,
          margin: 5,
        }}
      >
        <Text>reset all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieView;
