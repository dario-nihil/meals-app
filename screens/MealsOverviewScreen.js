import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsLIst";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryItem = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({
      title: categoryItem.title,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
