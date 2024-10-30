// ISO 639-1 language codes
const languages = [
    {code: 'en', name: 'English'},
    {code: 'fr', name: 'French'},
    {code: 'es', name: 'Spanish'},
    // Add more languages as needed
];

// Populate language dropdown
function populateLanguages() {
    const select = document.getElementById('language-select');
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = `${lang.name} (${lang.code})`;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateLanguages);
