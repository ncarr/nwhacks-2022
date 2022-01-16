import { BaseEditor, BaseElement, BaseText } from 'slate';
import { ReactEditor } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = BaseText

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}