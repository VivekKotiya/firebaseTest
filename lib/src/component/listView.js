import { useState } from "react";
import { FlatList, View, Text, RefreshControl } from "react-native";

const ListView = () => {
  const [refreshing, setRefreshing] = useState(true);
  const list = [
    { name: "Mon", id: 1 },
    { name: "Tue", id: 2 },
    { name: "Wed", id: 3 },
    { name: "Thu", id: 4 },
    { name: "Fri", id: 5 },
    { name: "Sat", id: 6 },
    { name: "Mon", id: 11 },
    { name: "Tue", id: 12 },
    { name: "Wed", id: 13 },
    { name: "Thu", id: 14 },
    { name: "Fri", id: 15 },
    { name: "Fri", id: 17 },
    { name: "Fri", id: 18 },
    { name: "Fri", id: 19 },
    { name: "Fri", id: 20 },
    { name: "Fri", id: 27 },
    { name: "Sat", id: 16 },
    { name: "Mon", id: 21 },
    { name: "Tue", id: 22 },
    { name: "Wed", id: 23 },
    { name: "Thu", id: 24 },
    { name: "Fri", id: 25 },
    { name: "Sat", id: 26 },
  ];

  const onRefreshAction = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItemView = ({ item }) => (
    <View
      style={{
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        marginHorizontal: 5,
      }}
    >
      <Text>{item.name}</Text>
    </View>
  );

  const refreshView = (
    <RefreshControl
      refreshing={false}
      onRefresh={() => {}}
      title="pull to refresh"
    />
  );

  return (
    <View sryle={{ flex: 1 }}>
      <FlatList
        data={list}
        renderItem={renderItemView}
        ItemSeparatorComponent={() => <View style={{ paddingTop: 10 }}></View>}
        initialNumToRender={10}
        refreshControl={refreshView}
      />
    </View>
  );
};

export default ListView;
