document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    const response = await fetch('catalog.json');
    const products = await response.json();
    const container = document.getElementById('productos');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const title = document.createElement('h2');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price;

        const description = document.createElement('p');
        description.textContent = product.description;

        // Ya no añadimos los atributos aquí

        const button = document.createElement('button');
        button.textContent = 'Comprar';
        button.onclick = () => abrirPopup(product);

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(price);
        productDiv.appendChild(description);
        // productDiv.appendChild(attributes); // Eliminado
        productDiv.appendChild(button);

        container.appendChild(productDiv);
    });
}

function abrirPopup(product) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupContent = document.getElementById('popup-content');
    const popupPrice = document.getElementById('popup-price');
    const popupDescription = document.getElementById('popup-description');
    const popupAttributesContainer = document.getElementById('popup-attributes');

    popupImage.src = product.image;
    popupContent.textContent = `${product.code}`;
    popupPrice.textContent = `${product.price}`;
    popupDescription.textContent = `Descripción: ${product.description}`;

    // Limpiar cualquier contenido previo de los atributos en el popup
    popupAttributesContainer.innerHTML = '';

    // Renderiza los atributos HTML dentro del popup si los hay
    if (product.attributes) {
        const popupAttributes = document.createElement('div');
        popupAttributes.innerHTML = product.attributes;
        popupAttributesContainer.appendChild(popupAttributes); // Añade los atributos al popup
    }

    popup.classList.add('visible');
    document.getElementById('overlay').classList.add('visible'); // Mostrar overlay
}

function cerrarPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('visible');
    document.getElementById('overlay').classList.remove('visible'); // Ocultar overlay
}

document.getElementById('overlay').addEventListener('click', cerrarPopup);
document.getElementById('about').addEventListener('click', cerrarPopup);
