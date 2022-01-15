import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function LessonViewer() {
    const markdown = `
# Hello world

test *formatting*

<https://github.com>

$\\LaTeX$
    `
    return (
        <div>
            <Head>
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
                    integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
                    crossOrigin="anonymous"></link>
            </Head>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} />
        </div>
    )
}