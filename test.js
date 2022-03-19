const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;
    saveForm({title, text, description});
});


// Spred
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }
//     console.log('Ford data: ', formData);
// }

function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data
    }
    console.log('Ford data: ', formData);
}