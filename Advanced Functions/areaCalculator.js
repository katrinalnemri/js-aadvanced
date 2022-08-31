function areaCalculator(area, vol, str) {
    const symbols = JSON.parse(str);
    const result = symbols.map(s => ({
        area: Math.abs(area.call(s)),
        volume: Math.abs(vol.call(s))
    }));
    return result;
}
console.log(areaCalculator(function area() {
    return Math.abs(this.x * this.y);
}, function vol() {
    return Math.abs(this.x * this.y * this.z);
}, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
))