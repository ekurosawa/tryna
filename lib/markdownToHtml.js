import { remark } from "remark"
import html from "remark-html"
import NextImage from "next/image";
import ReactMarkdown from "react-markdown";

// imgSize.jsを使う
import rehypeImageSize from "/lib/imgSize";


// インポートしたrehypeImageSizeで
const components = {
  img: (props) => <NextImage {...props} />,
};

const MDContent = ({ children }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeImageSize]} components={components}>
      {children}
    </ReactMarkdown>
  );
};
// rehypeImageSize部分ここまで


export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .process(markdown)
  return result.toString()
}
