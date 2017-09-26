class ObjectPool {
	private static pool: any = {};

	public static made(clazz: string): any {
		var obj: IPoolAble;
		if (ObjectPool.pool[clazz] && ObjectPool.pool[clazz].length > 0) {
			obj = ObjectPool.pool[clazz].shift();
		} else {
			var cl: any = egret.getDefinitionByName(clazz);
			obj = new cl();
		}
		obj.initFromPool();
		return obj;
	}

	public static collect(obj:IPoolAble): string {
		var clazz:string = egret.getQualifiedClassName(obj);
		if(!ObjectPool.pool[clazz]){
			ObjectPool.pool[clazz] = [];
		}
		obj.disposeByPool();
		ObjectPool.pool[clazz].push(obj);

		return clazz;
	}
}

interface IPoolAble{
	initFromPool();
	disposeByPool();
}