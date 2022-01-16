import { useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { CustomElement } from "../../slate";

export default function LessonEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const initialValue: CustomElement[] = [{
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },];
    const [value, setValue] = useState<Descendant[]>(initialValue);
    return (
        <Slate
            editor={editor}
            value={value}
            onChange={setValue}
        >
            <Editable />
        </Slate>
    )
}