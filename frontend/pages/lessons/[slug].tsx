import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function LessonViewer() {
    const lesson = {
        title: 'Document title',
        content: [{
            type: 'paragraph',
            children: [{
                text: `
## Hello world

test *formatting*

<https://github.com>

$\\LaTeX$
    `}]
        }]
    }
    return <>
        <h1>{lesson.title}</h1>
        {lesson.content.map(({ type, children }, index) => type === 'paragraph' && <ReactMarkdown key={index} children={children[0].text} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />)}
    </>;
}