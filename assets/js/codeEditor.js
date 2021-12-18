var htmlEditor = CodeMirror.fromTextArea(document.querySelector('#html'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'htmlmixed',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true,
    theme: 'blackboard'
});
var cssEditor = CodeMirror.fromTextArea(document.querySelector('#css'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'css',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true,
    theme: 'blackboard'
});
var jsEditor = CodeMirror.fromTextArea(document.querySelector('#js'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'javascript',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true,
    theme: 'blackboard'
});
const iframe = document.querySelector('iframe')
emmetCodeMirror(cssEditor);
emmetCodeMirror(htmlEditor);

function res() {
    let t = iframe.contentWindow.document;
    html = htmlEditor.getValue();
    css = cssEditor.getValue() ? `<style>${cssEditor.getValue()}</style>` : '';
    js = jsEditor.getValue() ? '<scri' + 'pt>' + jsEditor.getValue() + '</scri' + 'pt>' : '';
    if (t.body) t.body.innerHTML = '';
    if (t.head) t.head.innerHTML = '';
    t.write(html + css + js);
    console.log('Generated successfully');
}
const htmlCodeContainer = document.querySelector('#htmlCode');
htmlCodeContainer.onclick = function () {
    htmlEditor.focus();
};
const cssCodeContainer = document.querySelector('#cssCode');
cssCodeContainer.onclick = function () {
    cssEditor.focus();
};
const jsCodeContainer = document.querySelector('#jsCode');
jsCodeContainer.onclick = function () {
    jsEditor.focus();
};

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 13) {
        res()
    }
})
// const resizer = document.getElementById('resizer');
// const editorCone = document.querySelector('.editor-content')
// resizer.onmousedown = function (e) {
//     window.onmousemove = function (e) {
//         editorCone.style.width = e.clientX + 'px'
//     }
// }
// resizer.onmouseup = function (e) {
//     window.onmousemove = null
// }
// window.onmouseup = function () {
//     window.onmousemove = null

// }