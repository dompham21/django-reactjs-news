import React, { useState }  from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux'
import { htmlFromEditor } from '../../Actions/ui_actions';
import hljs from 'highlight.js'

function EditorPost() {
    const [html, setHtml] = useState("")
    hljs.configure({
        languages: ['javascript', 'ruby', 'python', 'rust', 'html','c++','jsx', 'sh', 'bash', 'scss', 'css', 'json'],
    })
    const dispatch = useDispatch()

    const modules = {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value,
        },
        toolbar:  [
            ['bold', 'italic', 'underline', 'strike','blockquote', 'code-block'],    
            [{ 'header': 1 }, { 'header': 2 }],   
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],            
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],   
            [{ 'indent': '-1'}, { 'indent': '+1' }],        
            [{ 'direction': 'rtl' }],      
            ["link", "image", "video"],
            [{ 'font': [] }],
            [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],

                                     
        ]
    
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'image', 'video', 'link',"code-block", "video", "blockquote", "font", "align",
        "list","direction", "indent","script"
    ];

    const handleChange = (e) => {
        dispatch(htmlFromEditor(e));
    }
    return (
        <>
            <ReactQuill
                placeholder="Write something amazing ..."
                onChange={handleChange}
                modules={modules}
                formats={formats}
                value={html}
            />
        </>
    )
}

export default EditorPost
