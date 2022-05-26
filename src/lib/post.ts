import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const POST_PATH = "public/posts";

export const getAllPosts = () => {
  const files = fs.readdirSync(path.join(POST_PATH));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(POST_PATH, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return posts;
};

export const getAllPostPaths = () => {
  const postFilePaths = fs
    .readdirSync(POST_PATH)
    .filter((path) => /\.mdx?$/.test(path));
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return paths;
};

export const getPostBySlug = async (slug: string) => {
  const postFilePath = path.join(POST_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data: frontMatter } = matter(source);
  const mdxSource = await serialize(content);
  return { mdxSource, frontMatter, content };
};

export const getPostByTag = async (slug: string) => {
  const postsByCategory = getAllPosts().filter(({ frontMatter }) =>
    frontMatter.tags.includes(slug)
  );

  return postsByCategory;
};

export const getAllPostPathsByTag = () => {
  const tags = getAllPosts()
    .map(({ frontMatter }) => [...frontMatter.tags])
    .flat();
  const paths = tags.map((tag) => ({ params: { slug: tag } }));
  return paths;
};
