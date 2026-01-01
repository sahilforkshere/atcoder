
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true }
});

const outputDiv = document.getElementById('output-window');
const codePreview = document.getElementById('code-preview');

function printResult(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = `> ${text}`;
    outputDiv.appendChild(entry);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}


workspace.addChangeListener(() => {
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    codePreview.textContent = code || "// Snap blocks to see JS code";
});


function runPetCode() {
    outputDiv.innerHTML = ""; 
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    
    try {
        if (!code.trim()) {
            printResult("Error: No workflow found in workspace."); 
            return;
        }
        eval(code); 
    } catch (e) {
        printResult("Execution Error: Check your block logic.");
    }
}
function resetAll() {
    workspace.clear();
    outputDiv.innerHTML = "Workspace cleared.";
}