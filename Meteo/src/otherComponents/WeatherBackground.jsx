export function parseGradientAsIcon(icon) {
    const gradientMappings = {
        "02d": "radial-gradient(circle,#464C64 0%, #99A9B9 100%)",
        "03d": " radial-gradient(circle, #464C64 0%, #99A9B9 100%)",
        "04d": "radial-gradient(circle, #464C64 0%, #99A9B9 100%)",
        "01d": "linear-gradient(to bottom right, #5374E7, #77B9F5)",
        "01n": "linear-gradient(to bottom right, #5374E7, #77B9F5)",
        "10d": "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
        "13d": "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
        "09d": "radial-gradient(circle, #011354 0%, #5B9FE3 100%)",
        "11d": "radial-gradient(circle, #011354 0%, #5B9FE3 100%)"
    };

    return gradientMappings[icon] || "  radial-gradient(circle, #464C64 0%, #99A9B9 100%)";
}
