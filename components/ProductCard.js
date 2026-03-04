import data from "../assets/Data/specificStat.js";

// 1. Hàm định dạng tiền tệ
const formatPrice = (p) => p ? `Từ ${p.toLocaleString('vi-VN')}đ` : "";

// 2. Hàm tạo HTML cho mỗi "Box" (Lựa chọn)
const createBoxHTML = (option) => {
    // Xử lý linh hoạt cho cả 'name' hoặc 'storage' (vì data của bạn không đồng nhất key)
    const displayName = option.name || option.storage || "";
    const displayDes = option.description || option.chip || "";
    const displayPrice = formatPrice(option.priceBase || option.price);
    const note = option.note ? `<span class="des" style="color: #bf4800; font-weight: 500;">${option.note}</span>` : "";

    return `
        <div class="box" data-id="${option.id}">
            <div class="info">
                <span class="name">${displayName}</span>
                <span class="des">${displayDes}</span>
                ${note}
            </div>
            <div class="price">${displayPrice}</div>
        </div>
    `;
};

// 3. Hàm tạo HTML cho phần "Explore"
const createExploreHTML = (item) => {
    if (!item.explore) return "";
    return `
        <div class="box-explore">
            <span class="question">${item.explore}</span>
            <span class="answer">${item.exp_des}</span>
            ${item.action ? `<span class="action-btn" style="color:#0066cc; cursor:pointer; font-size:14px;">Hiển thị thêm</span>` : ""}
        </div>
    `;
};

// 4. Hàm Render chính
function renderConfigurator() {
    // Map giữa key trong JSON và Class trong HTML của bạn
    const selectorMap = {
        "versions": ".size",
        "colors": ".color",
        "storage": ".memory",
        "glass": ".screen",
        "connectivity": ".connection",
        "engraving": ".carve",
        "apple_pencil": ".pencil",
        "keyboard": ".Keyboard",
        "trade_in": ".trade-in", // Nếu bạn thêm class này
        "applecare": ".applecare" // Nếu bạn thêm class này
    };

    Object.keys(data).forEach(key => {
        const section = data[key];
        const selector = selectorMap[key];
        const container = document.querySelector(selector);

        if (container) {
            // Giữ lại Tiêu đề cũ hoặc render mới hoàn toàn
            const headerHTML = `
                <span class="title">${section.title}. </span>
                <span class="sub-title">${section.des}</span>
            `;

            const optionsHTML = section.options.map(opt => createBoxHTML(opt)).join('');
            const exploreHTML = createExploreHTML(section);

            // Đổ tất cả vào container tương ứng
            container.innerHTML = headerHTML + optionsHTML + exploreHTML;
        }
    });
}

// Chạy hàm render
renderConfigurator();