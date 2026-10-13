class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const titulo = document.createElement("h1");
        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("title");
        linkTitulo.href = this.getAttribute("link-url") || "#";

        const descricao = document.createElement("p");
        descricao.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        titulo.appendChild(linkTitulo);
        cardLeft.appendChild(descricao);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const image = document.createElement("img");
        image.setAttribute("class", "image");
        image.src = this.getAttribute("link-src") || "assets/Image/Ícone de Perfil Minimalista em Fundo Escuro.png";
        image.alt = this.getAttribute("alt") || "";

        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                justify-content: space-between;
            }

            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1rem;
            }

            .card-left > span {
                font-weight: 400;
            }

            .card-left > h1 {
                margin-top: 1rem;
                font-size: 2rem;
            }

            .card-left > h1 > a {
                color: black;
                text-decoration: none;
            }

            .card-left > p {
                color: gray;
            }

            .image {
                width: 15rem;
                height: 15rem;
                object-fit: cover;
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);