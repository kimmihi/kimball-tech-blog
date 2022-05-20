import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POST_PATH = "src/public/posts";

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

export const getPostBySlug = (slug: string) => {
  return getAllPosts().filter((post) => post.slug === slug)[0];
};
