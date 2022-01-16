import Prism from 'prismjs'
import { useCallback, useMemo, useState } from "react";
import { createEditor, Descendant, NodeEntry, Text, Range } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import TextNode from '../../components/TextNode';
import { CustomElement } from "../../slate";

export default function LessonEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const initialValue: CustomElement[] = [{
        type: 'paragraph',
        children: [{ text: '' }],
    },];
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const renderLeaf = useCallback(props => <TextNode {...props} />, []);
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
        <Slate
            editor={editor}
            value={value}
            onChange={setValue}
        >
            <Editable
                decorate={decorate}
                renderLeaf={renderLeaf}
                placeholder="Start typing"
            />
        </Slate>
    )
}