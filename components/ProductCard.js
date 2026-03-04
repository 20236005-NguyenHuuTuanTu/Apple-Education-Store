import data from "../assets/data/specificStat.js";

const formatPrice = (p) => p ? `Từ ${p.toLocaleString('vi-VN')}đ` : "";

const createBoxHTML = (option) => {
    const displayName = option.name || option.storage || "";
    const displayDes = option.description || option.chip || "";
    const displayPrice = formatPrice(option.priceBase || option.price);

    return `
        <div class="box" data-id="${option.id}">
            <div class="info">
                <span class="name">${displayName}</span>
                <span class="des">${displayDes}</span>
            </div>
            <div class="price">${displayPrice}</div>
        </div>
    `;
};

const createColorHTML = (option) => {
    return `
        <div class="color-btn" data-id="${option.id}" title="${option.name}">
            <span style="background-color: ${option.hex}"></span>
        </div>
    `;
};

const createExploreHTML = (item) => {
    if (!item.explore) return "";
    return `
        <div class="box-explore">
            <span class="question">${item.explore}</span>
            <span class="answer">${item.exp_des}</span>
        </div>
    `;
};

function renderConfigurator() {
    const selectorMap = {
        "versions": ".size",
        "colors": ".color",
        "storage": ".memory",
        "glass": ".screen",
        "connectivity": ".connection",
        "engraving": ".carve",
        "apple_pencil": ".pencil",
        "keyboard": ".Keyboard",
        "trade_in": ".trade-in",
        "applecare": ".applecare"
    };

    Object.keys(data).forEach(key => {
        const section = data[key];
        const selector = selectorMap[key];
        const container = document.querySelector(selector);

        if (container) {
            const headerHTML = `
                <span class="title">${section.title}. </span>
                <span class="sub-title">${section.des}</span>
            `;

            let optionsHTML = "";
            if (key === "colors") {
                optionsHTML = `<div class="color-list">` + 
                              section.options.map(opt => createColorHTML(opt)).join('') + 
                              `</div>`;
            } else {
                optionsHTML = section.options.map(opt => createBoxHTML(opt)).join('');
            }

            const exploreHTML = createExploreHTML(section);
            
            const isDisabled = section.action === false;
            const disabledClass = isDisabled ? "block-disabled" : "";
            const overlayHTML = isDisabled ? `<div class="block-overlay"></div>` : "";

            container.innerHTML = `
                ${headerHTML}
                <div class="content-wrapper ${disabledClass}">
                    ${overlayHTML}
                    ${optionsHTML}
                    ${exploreHTML}
                </div>
            `;
        }
    });
}

renderConfigurator();