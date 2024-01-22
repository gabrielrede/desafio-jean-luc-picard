class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.png";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
        .card {
            margin: 100px;
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        
            box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 40px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > h1 {
            margin-top: 10px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: grey;
        }
        
        .card_right {
            padding-right: 50px;
        }
        
        .card_left, .card_right {
            margin: 10px;
        }
        
        .container img {
            max-width: 300px;
        }

        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);