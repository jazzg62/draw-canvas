function isPointAtArea(x, y, obj) {
    if (x >= obj.x1 && x <= obj.x1 + obj.width && y >= obj.y1 && y <= obj.y1 + obj.height)
        return true;
    return false;
}