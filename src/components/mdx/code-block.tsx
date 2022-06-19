import type { FC } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  className: Language;
}

const CodeBlock: FC<CodeBlockProps> = ({ code, className }) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight {...defaultProps} code={code} language={language as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
