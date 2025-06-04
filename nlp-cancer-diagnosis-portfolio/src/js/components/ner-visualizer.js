import { render } from 'lit-html';

export function visualizeNER(entities, text) {
    const container = document.getElementById('ner-visualization');
    container.innerHTML = ''; // Clear previous content

    const words = text.split(' ');
    const highlightedText = words.map((word, index) => {
        const entity = entities.find(ent => ent.start === index);
        if (entity) {
            return `<span class="entity ${entity.label}">${word}</span>`;
        }
        return word;
    }).join(' ');

    const visualization = `
        <div class="ner-output">
            <p>${highlightedText}</p>
        </div>
    `;

    render(visualization, container);
}