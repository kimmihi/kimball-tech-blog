import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
const POST_PATH = "src/public/posts";

export const getAllPosts = () => {
  const files = fs.readdirSync(path.join(POST_PATH));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(POST_PATH, filename),
      "utf-8"
    );
    const { content, data: frontMatter } = matter(markdownWithMeta);
    const mdxSource = serialize(content, {
      mdxOptions: {
        // @ts-ignore: Unreachable code error
        remarkPlugins: [[remarkToc, {}]],
        // @ts-ignore: Unreachable code error
        rehypePlugins: [[rehypeSlug, {}]],
      },
    });
    return {
      frontMatter,
      content,
      slug: filename.split(".")[0],
      mdxSource: mdxSource,
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

export const getPostBySlug = (slug: string) => {
  return getAllPosts().filter((post) => post.slug === slug)[0];
};
