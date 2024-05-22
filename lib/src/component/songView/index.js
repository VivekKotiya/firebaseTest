import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../redux-toolkit";
//import { useDispatch }
//useDispatch
const SongView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songs);

  addNewSong = () => dispatch(addSong("No see you again"));
  //  const songArray = ["See you again", "No see you again"];
  const songView = data.map((item, key) => <Text key={key}>{item}</Text>);
  return (
    <View>
      {songView}
      <TouchableOpacity
        onPress={addNewSong}
        style={{ backgroundColor: "gray" }}
      >
        <Text>Add Song</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongView;
