import { useMDXComponent } from 'next-contentlayer/hooks';
// import components from 'components/MDXComponents';
import { allActivities } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

export default function Post({
  activity,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(activity.body.code);

  return (
    <article>
      <h1>{activity.title}</h1>
      <Component />
    </article>
  );
}

export const getStaticPaths = async () => ({
  paths: allActivities.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps = async ({ params }) => {
  const activity = allActivities.find(
    (activity) => activity.slug === params.slug
  );

  return { props: { activity } };
};
