import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import QuestionEditorList from '../../components/questionEditorList';
import Question from '../../components/question';

export default function LessonViewer() {
    const lesson = {
        title: 'Paris: The Capital of France',
        content: [{
            type: 'paragraph',
            children: [{
                text: `
## Hello World

Paris is the capital and most poplous city of France. It has one of been Europe's major centres of finance since the 17th century.

$\\LaTeX$
    `}]
        }]
    }
    return <>
        <h1>{lesson.title}</h1>
        {lesson.content.map(({ type, children }, index) => type === 'paragraph' && <ReactMarkdown key={index} children={children[0].text} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />)}
    
        <Question />

        <button className="login-button"><a href="/">Back</a></button>
    </>;

}