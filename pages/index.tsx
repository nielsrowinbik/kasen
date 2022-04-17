import { allActivities } from 'contentlayer/generated';
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

const IndexPage = ({
  activities,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <article className="prose prose-neutral prose-a:text-blue-600 prose-a:font-normal prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-a:text-blue-400">
      <h1>Kasen</h1>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.slug}>
            <Link href={`/activity/${activity.slug}`}>{activity.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const getStaticProps = () => {
  const activities = allActivities.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { activities } };
};

export default IndexPage;
