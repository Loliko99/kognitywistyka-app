import { HomePageContent } from "@/components/HomePageContent";
import { Layout } from "@/components/Layout";
import { getAllFacts, getAvailableCategories, getFactOfTheDay } from "@/lib/facts";

const HomePage = () => {
  const allFacts = getAllFacts();
  const factOfTheDay = getFactOfTheDay(new Date());
  const availableCategories = getAvailableCategories();

  return (
    <Layout>
      <HomePageContent
        allFacts={allFacts}
        factOfTheDay={factOfTheDay}
        availableCategories={availableCategories}
      />
    </Layout>
  );
};

export default HomePage;