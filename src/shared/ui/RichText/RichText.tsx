import MarkdownIt from 'markdown-it'
import HighlightJS from 'markdown-it-highlightjs'
import 'highlight.js/styles/atom-one-dark.min.css';
import hljs from "highlight.js";
import DOMPurify from 'dompurify';

hljs.registerAliases(['ts','tsx','typescriptreact'], { languageName: 'typescript' });
hljs.registerAliases(['js','jsx','javascriptreact'], { languageName: 'javascript' });

const md = new MarkdownIt({
    html: true,
    langPrefix: 'language-',
}).use(HighlightJS, {hljs})

interface RichTextProps{
    rawHtml: string,
    className?: string
};


export const RichText = ({rawHtml, className}: RichTextProps) => {
    
    const html = md.render(rawHtml)
    const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{__html: safe}}
        />
    );
};
