import Prism from 'prismjs'
import { useCallback, useMemo, useState } from "react";
import { createEditor, Descendant, NodeEntry, Text, Range } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import QuestionEditorList from '../../components/questionEditorList';
import TextNode from '../../components/TextNode';
import { CustomElement } from "../../slate";

export default function LessonEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const initialValue: CustomElement[] = [{
        type: 'paragraph',
        children: [{ text: '' }],
    },];
    const [content, setContent] = useState<Descendant[]>(initialValue); 
    const renderLeaf = useCallback(props => <TextNode {...props} />, []);
    const [title, setTitle] = useState('');
    const [questionEditorList, setQ] = useState({QuestionEditorList})
    const setTitleCallback = useCallback(({ target }: { target: HTMLInputElement }) => setTitle(target.value), []);
    // TODO: build effect to load data from server with SWR, might need resetNodes function to update slate
    const saveLesson = useCallback(() => {
        const data = {
            title,
            content,
            questionEditorList
        }
        // send data to server with SWR
    }, []);
    // Markdown highlighter
    const decorate = useCallback(([node, path]: NodeEntry) => {
        const ranges: Range[] = []

        if (!Text.isText(node)) {
            return ranges
        }

        const tokens = Prism.tokenize(node.text, Prism.languages.markdown)
        let start = 0

        for (const token of tokens) {
            const end = start + token.length

            if (typeof token !== 'string') {
                ranges.push({
                    [token.type]: true,
                    anchor: { path, offset: start },
                    focus: { path, offset: end },
                })
            }

            start = end
        }

        return ranges
    }, [])

    return (
        <>
            <input placeholder='Add a title...' value={title} onChange={setTitleCallback} />
            <Slate
                editor={editor}
                value={content}
                onChange={setContent}
            >
                <Editable
                    decorate={decorate}
                    renderLeaf={renderLeaf}
                    placeholder="Start typing"
                />
            </Slate>
            <button onClick={saveLesson}>Save</button>

            <QuestionEditorList
                onChange={setQ}
            />
            <button className="login-button"><a href="/">Back</a></button>
        </>
    )
}