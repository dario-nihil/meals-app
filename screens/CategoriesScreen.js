import { FlatList } from "react-native";

import CategoryGridTyle from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = ({ item }) => {
  return <CategoryGridTyle title={item.title} color={item.color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
