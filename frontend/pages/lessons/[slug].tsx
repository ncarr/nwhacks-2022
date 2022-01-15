import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function LessonViewer() {
    const markdown = `
# Hello world

test *formatting*

<https://github.com>

$\\LaTeX$
    `
    return <ReactMarkdown children={markdown} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />;
}