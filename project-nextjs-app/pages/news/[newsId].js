import { useRouter } from "next/router";

const NewsDetailPage = () => {
  const router = useRouter();
  router.query.newsId;
  console.log(router.query.newsId);

  const newsId = router.query.newsId;

  return <h1>news details page</h1>;
};
export default NewsDetailPage;
