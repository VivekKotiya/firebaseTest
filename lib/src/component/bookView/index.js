import { Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook, addSong } from "../../store";

const BookView = () => {
  const booklist = useSelector((state) => {
    console.log(state);
    return state.books;
  });
  console.log("booklist ", booklist);
  const dispatch = useDispatch();
  const bookView = booklist?.map((item, key) => <Text key={key}>{item}</Text>);
  const add = () => {
    dispatch(addBook("India"));
  };

  const remove = () => {
    dispatch(removeBook("India"));
  };

  return (
    <View>
      {bookView}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={add}
          style={{
            padding: 5,
            borderColor: "black",
            borderWidth: 1,
            margin: 5,
          }}
        >
          <Text>Add Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={remove}
          style={{
            padding: 5,
            borderColor: "black",
            borderWidth: 1,
            margin: 5,
          }}
        >
          <Text>remove Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookView;
