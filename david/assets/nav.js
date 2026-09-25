'use strict';

const PG_BY_PERSON = {
    ryan: [
        { label: 'Brain-Computer Interfaces', href: '../ryan/brainComputerInterfaces.html' },
        { label: 'Post-Quantum Cryptography', href: '../ryan/postQuantumCryptography.html' },
        { label: 'Green Technology', href: '../ryan/greenTechnology.html' },
        { label: 'Edge Computing', href: '../ryan/edgeComputing.html' },
        { label: 'Extended Reality', href: '../ryan/extendedReality.html' }
    ],
    ian: [
        { label: 'Blockchain', href: '../ian/Blockchain.html' },
        { label: 'Computer Vision', href: '../ian/ComputerVision.html' },
        { label: 'Industrial Internet of Things', href: '../ian/IIoT.html' },
        { label: 'Multimodal User Interfaces', href: '../ian/MUI.html' },
        { label: 'Confidential Computing', href: '../ian/ConfidentialComputing.html' }
    ],
    david: [
        { label: 'Generative AI', href: 'genai.html' },
        { label: 'Physical AI', href: 'physai.html' },
        { label: 'Neuromorphic Computing', href: 'neuro.html' },
        { label: 'DNA-based Data Storage', href: 'dna.html' },
        { label: 'Solid State Batteries', href: 'ssb.html' }
    ],
    haobin: [
        { label: 'Agentic AI', href: '../haobin/agenticai.html' },
        { label: 'Bioinformatics', href: '../haobin/bioinformatics.html' },
        { label: 'Genetic Engineering', href: '../haobin/geneticengineering.html' },
        { label: 'Quantum Computing', href: '../haobin/quantumcomputing.html' },
        { label: 'Spatial Computing', href: '../haobin/spatialcomputing.html' }
    ]
};
const PERSON_SEL = document.querySelector('.david-person-select');
const PG_SEL = document.querySelector('.david-page-select');

/**
 * update pages when depending on person selected
 */
function updatePersonPages() {
    PG_SEL.replaceChildren(...PG_BY_PERSON[PERSON_SEL.value].map(page => {
        const option = document.createElement('option');
        option.textContent = page.label;
        option.value = page.href;
        if (PERSON_SEL.value == 'david' && page.href == location.pathname.split('/').pop())
            option.selected = true;
        return option;
    }));
}

PERSON_SEL.addEventListener('change', updatePersonPages);
PG_SEL.addEventListener('change', () => { if (PG_SEL.value) location.href = PG_SEL.value; });
updatePersonPages();
