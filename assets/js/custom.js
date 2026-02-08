document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.innerHTML = 'Run Code';
        button.className = 'run-code-btn';
        block.parentElement.appendChild(button);

        button.addEventListener('click', function() {
            const code = block.textContent;
            showModal(code);
        });
    });

    function showModal(code) {
        const modal = document.getElementById('code-modal');
        const modalCodeBlock = document.getElementById('modal-code-block');
        modalCodeBlock.value = code;
        modal.style.display = 'block';
    }

    const closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.addEventListener('click', function() {
        const modal = document.getElementById('code-modal');
        modal.style.display = 'none';
    });

    const runCodeBtn = document.getElementById('execute-code-btn');
    runCodeBtn.addEventListener('click', function() {
        const codeToRun = document.getElementById('modal-code-block').value;
        try {
            eval(codeToRun); // Run the code in the modal
        } catch (e) {
            console.error('Error executing code:', e);
            alert('Error executing code. Check the console for details.');
        }
    });
});
