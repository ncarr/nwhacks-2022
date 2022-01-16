import { BaseEditor, BaseElement, BaseText } from 'slate';
import { ReactEditor } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] }
interface CustomText {
    text: string;
    bold?: boolean;
    italic?: boolean;
    'code-snippet'?: boolean;
    title?: boolean;
    list?: boolean;
    hr?: boolean;
    blockquote?: boolean;
}

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}