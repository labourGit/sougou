class ActionSheet extends eui.Component {
	private static ins: ActionSheet;

	public scl: eui.Scroller;
	public lst: eui.List;
	public bg: eui.Rect;

	private mCall: Function;
	private mCancelCall: Function;
	private mObj: any;

	private lastValue:string;

	public static getInstance(): ActionSheet {
		if (!ActionSheet.ins) {
			ActionSheet.ins = new ActionSheet();
		}

		return ActionSheet.ins;
	}

	public constructor() {
		super();
		var exml =
            `<e:Skin xmlns:e="http://ns.egret.com/eui">
				<e:Rect id="bg" left="0" right="0" top="0" bottom="0" fillAlpha="0.6"/>
                <e:Scroller id="scl" height="640" width="442" verticalCenter="0" horizontalCenter="0">
				<e:Skin>
					<e:VScrollBar id="verticalScrollBar" width="11" height="100%" right="-20">
						<e:Skin>
							<e:Image height="100%"  source="thumb_bg_png" x="5" scale9Grid="2,5,6,48" />
							<e:Image id="thumb" height="30" x="5" scale9Grid="2,5,6,20" source="thumb_png" />
						</e:Skin>
					</e:VScrollBar>
				</e:Skin>
				<e:List id="lst">
					<e:itemRendererSkinName>
						<e:Skin states="up,down" height="64">
							<e:Image width="100%" height="62" x="1"  source="selected_jpg" source.down="button_down_jpg"/>
							<e:Label size="30" fontFamily="微软雅黑" text="{data}" textAlign="center" width="100%" textColor="0x555555" textColor.down="0xffffff" verticalCenter="0"/>
						</e:Skin>
					</e:itemRendererSkinName>
				</e:List>
			</e:Scroller>
            </e:Skin>`;
		this.skinName = exml;

		this.width = Global.stage.stageWidth;
		this.height = Global.stage.stageHeight;

        this.lst.dataProvider = new eui.ArrayCollection([]);
        this.scl.verticalScrollBar.autoVisibility = false;
        this.lst.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
		bindTapEvent_XY(this.bg, this.onHide, this);
	}

	private onChange(e: egret.Event): void {
		if (this.mCall) {
			this.mCall.apply(this.mObj, [this.lst.selectedItem]);
		}
		this.close();
    }

	private onHide(): void {
		if (this.mCancelCall) {
			this.mCancelCall.apply(this.mObj);
		}
		this.close();
	}

	public showList(source: string[], currentValue: string, call: (selectedItem: string) => void, thisObj: any, cancalCall?:Function): void {
		this.lastValue = Global.stage.dirtyRegionPolicy;
		Global.stage.addChild(this);
		tween_XY_alphaShow(this);
		this.mCall = call;
		this.mObj = thisObj;
		this.mCancelCall = cancalCall;
        (this.lst.dataProvider as eui.ArrayCollection).source = source;
        this.lst.selectedItem = currentValue;

        var maxLen: number = 64 * source.length;
        if (maxLen > 640) {
            maxLen = 640;
        }
        this.scl.height = maxLen;
        this.scl.y = (640 - maxLen) / 2 + 215;

        var maxSc: number = 64 * source.length - maxLen;
        var v: number;
        if (maxSc <= 0) {
            v = 0;
            this.scl.verticalScrollBar.visible = false;
        } else {
            v = Math.min(Math.max(0, (source.indexOf(currentValue) - 5) * 64), maxSc);
            this.scl.verticalScrollBar.visible = true;
        }
        egret.callLater((p) => { this.lst.scrollV = p; }, this, [v]);

        this.scl.validateDisplayList();

		Global.stage.dirtyRegionPolicy = DirtyRegionPolicy$.OFF;
    }

	public close(): void {
		remove_XY(this);
		this.mCall = null;
		this.mObj = null;
		Global.stage.dirtyRegionPolicy = this.lastValue;
	}
}