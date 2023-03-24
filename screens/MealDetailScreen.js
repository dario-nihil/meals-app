import { useLayoutEffect, useContext } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import IconButton from "../components/IconBUtton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const ctx = useContext(FavoritesContext);

  const mealIsFavorite = ctx.ids.includes(mealId);

  const channgeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      ctx.removeFavorite(mealId);
      return;
    }

    ctx.addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color="#ffffff"
          icon={mealIsFavorite ? "star" : "star-outline"}
          onPress={channgeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, channgeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  detailText: {
    color: "#ffffff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
