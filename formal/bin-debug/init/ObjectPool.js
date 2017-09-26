var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectPool = (function () {
    function ObjectPool() {
    }
    ObjectPool.made = function (clazz) {
        var obj;
        if (ObjectPool.pool[clazz] && ObjectPool.pool[clazz].length > 0) {
            obj = ObjectPool.pool[clazz].shift();
        }
        else {
            var cl = egret.getDefinitionByName(clazz);
            obj = new cl();
        }
        obj.initFromPool();
        return obj;
    };
    ObjectPool.collect = function (obj) {
        var clazz = egret.getQualifiedClassName(obj);
        if (!ObjectPool.pool[clazz]) {
            ObjectPool.pool[clazz] = [];
        }
        obj.disposeByPool();
        ObjectPool.pool[clazz].push(obj);
        return clazz;
    };
    return ObjectPool;
}());
ObjectPool.pool = {};
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map