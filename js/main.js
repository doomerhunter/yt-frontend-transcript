document.addEventListener('DOMContentLoaded', () => {
    const executeBtn = document.getElementById('execute-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultArea = document.getElementById('result');

    // Execute command handler
    executeBtn.addEventListener('click', async () => {
        const url = document.getElementById('youtube-url').value;
        const lang = document.getElementById('language-select').value;
        
        try {
            const response = await fetch('/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url, lang })
            });
            
            const result = await response.text();
            resultArea.value = result;
        } catch (error) {
            resultArea.value = `Error: ${error.message}`;
        }
    });

    // Copy to clipboard handler
    copyBtn.addEventListener('click', () => {
        resultArea.select();
        document.execCommand('copy');
    });
});
