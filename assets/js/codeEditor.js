var htmleditor = CodeMirror.fromTextArea(document.querySelector('#html'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'htmlmixed',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true
});
var csseditor = CodeMirror.fromTextArea(document.querySelector('#css'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'css',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true
});
var jseditor = CodeMirror.fromTextArea(document.querySelector('#js'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'javascript',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true
});
const iframe = document.querySelector('iframe')
emmetCodeMirror(csseditor);
emmetCodeMirror(htmleditor);

function res() {
    let t = iframe.contentWindow.document;
    html = htmleditor.getValue();
    css = `<style>${csseditor.getValue()}</style>`
    js = '<scri' + 'pt>' + jseditor.getValue() + '</scri' + 'pt>'
    t.write(html + css + js)
}
const htmlCode = document.querySelector('#html-code')
htmlCode.onclick = function () {
    htmleditor.focus()
}