export function parseGradientAsIcon(icon) {
    const gradientMappings = {
        "02d": "linear-gradient(to bottom right, #464C64, #464C64)",
        "03d": "linear-gradient(to bottom right, #464C64, #464C64)",
        "04d": "linear-gradient(to bottom right, #464C64, #464C64)",
        "01d": "linear-gradient(to bottom right, #5374E7, #77B9F5)",
        "01n": "linear-gradient(to bottom right, #5374E7, #77B9F5)",
        "10d": "linear-gradient(to bottom right, #011354, #5B9FE3)",
        "13d": "linear-gradient(to bottom right, #011354, #5B9FE3)",
        "09d": "linear-gradient(to bottom right, #011354, #5B9FE3)",
        "11d": "linear-gradient(to bottom right, #011354, #5B9FE3)"
    };

    return gradientMappings[icon] || "linear-gradient(to bottom right, #5374E7, #77B9F5)";
}
