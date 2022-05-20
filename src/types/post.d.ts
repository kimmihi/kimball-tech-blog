interface PostMetaType {
  date: string;
  description: string;
  tags: Array<string>;
  thumbnailUrl: string;
  title: string;
}

interface PostParams {
  params: {
    slug: string;
  };
}
