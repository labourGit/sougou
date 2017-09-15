
/**
 * 赛贝尔曲线
 * 配合CubicBezierCurve.swf使用
 * @author xy
 */
class CubicBezier {
    // Default values
    private segments: number = 100;
    private color: number = 0x000000;
    private thikness: number = 1;

    //Reference objects
    private anchor1: egret.Point;
    private anchor2: egret.Point;
    private control1: egret.Point;
    private control2: egret.Point;

    /**
     * Constructor
     *
     * used to store references to anchor points and control points
     */
    public constructor(anchorPoint1: egret.Point, anchorPoint2: egret.Point, controlPoint1: egret.Point, controlPoint2: egret.Point) {
        this.anchor1 = anchorPoint1;
        this.anchor2 = anchorPoint2;
        this.control1 = controlPoint1;
        this.control2 = controlPoint2;
        this.color = 0xff0000;
        this.thikness = 5;
    }

    /**
     * Draws a bezier curve by dividing it up in the predefined segments and draws a line between them
     *
     * @todo	find a way to use less segments and use curveTo to draw the line
     */
    public draw(): egret.Shape {
        var step: number = 1 / this.segments;
        var line: egret.Shape = new egret.Shape();
        line.graphics.lineStyle(this.thikness, this.color);
        line.graphics.moveTo(this.anchor1.x, this.anchor1.y);

        var posx: number;
        var posy: number;

		var anchor1 = this.anchor1
		var anchor2 = this.anchor2;
		var control1 = this.control1;
		var control2 = this.control2;

        //This loops draws each step of the curve
        for (var u: number = 0; u <= 1; u += step) {
            posx = Math.pow(u, 3) * (anchor2.x + 3 * (control1.x - control2.x) - anchor1.x) + 3 * Math.pow(u, 2) * (anchor1.x - 2 * control1.x + control2.x) + 3 * u * (control1.x - anchor1.x) + anchor1.x;
            posy = Math.pow(u, 3) * (anchor2.y + 3 * (control1.y - control2.y) - anchor1.y) + 3 * Math.pow(u, 2) * (anchor1.y - 2 * control1.y + control2.y) + 3 * u * (control1.y - anchor1.y) + anchor1.y;
            line.graphics.lineTo(posx, posy);
        }

        //As a final step, make sure the curve ends on the second anchor
        line.graphics.lineTo(anchor2.x, anchor2.y);

        return line;
    }

    /**
     * segments 越大，点越密集
     */
	public calRoadPoints(segments?:number): number[][] {
		var rs: number[][] = [];

        if(!segments){
            segments = this.segments;
        }
		var step: number = 1 / segments;

		rs.push([this.anchor1.x, this.anchor1.y]);

        var posx: number;
        var posy: number;

		var anchor1 = this.anchor1
		var anchor2 = this.anchor2;
		var control1 = this.control1;
		var control2 = this.control2;

        for (var u: number = 0; u <= 1; u += step) {
            posx = Math.pow(u, 3) * (anchor2.x + 3 * (control1.x - control2.x) - anchor1.x) + 3 * Math.pow(u, 2) * (anchor1.x - 2 * control1.x + control2.x) + 3 * u * (control1.x - anchor1.x) + anchor1.x;
            posy = Math.pow(u, 3) * (anchor2.y + 3 * (control1.y - control2.y) - anchor1.y) + 3 * Math.pow(u, 2) * (anchor1.y - 2 * control1.y + control2.y) + 3 * u * (control1.y - anchor1.y) + anchor1.y;

			rs.push([posx, posy]);
        }

		rs.push([this.anchor2.x, this.anchor2.y]);

		return rs;
	}

    /**
     *	Set number of segments
     */
    public setSegments(_segments: number): void {
        this.segments = _segments;
    }

    /**
     * 	Set color
     */
    public setColor(_color: number): void {
        this.color = _color;
    }

    /**
     * 	Set thikness
     */
    public setThikness(_thikness: number): void {
        this.thikness = _thikness;
    }
}