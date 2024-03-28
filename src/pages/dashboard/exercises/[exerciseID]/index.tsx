import Layout from "@/components/Layout";

function ExercisePage() {
  return <p>Hello</p>;
}

// @ts-ignore
ExercisePage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExercisePage;
