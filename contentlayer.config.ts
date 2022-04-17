import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type { ComputedFields } from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const Activity = defineDocumentType(() => ({
  name: 'Activity',
  filePathPattern: `activities/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    externalUrl: { type: 'string', required: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Activity],
  markdown: { rehypePlugins: [] },
});
