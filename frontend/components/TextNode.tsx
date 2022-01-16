import { RenderLeafProps } from "slate-react"
import styles from '../styles/TextNode.module.css';

export default ({ attributes, children, leaf }: RenderLeafProps) => {
    if (leaf.bold) {
        children = <b>{children}</b>
    }
    if (leaf.italic) {
        children = <i>{children}</i>
    }
    if (leaf['code-snippet']) {
        children = <code>{children}</code>
    }
    if (leaf.title) {
        children = <h4>{children}</h4>
    }
    if (leaf.list) {
        children = <span className={styles.list}>{children}</span>
    }
    if (leaf.hr) {
        children = <span className={styles.hr}>{children}</span>
    }
    if (leaf.blockquote) {
        children = <span className={styles.blockquote}>{children}</span>
    }
    return <span {...attributes}>{children}</span>
}