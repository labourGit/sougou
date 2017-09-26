//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends eui.Component {

    public constructor() {
        super();
        this.skinName='LoadingUIexml'
        this.mcCtrl = new MovieclipController(this.img,12, MovieclipController.makeResLoop('loading_{0}_png', 2, 0));
        this.mcCtrl.play(true);
        // this.createView();
    }

    private textField:egret.TextField;
    private loadBg:egret.Bitmap;

    public background:egret.Bitmap;
    public bar:egret.Bitmap;
    public barMask:egret.Rectangle;
    public reverse = false;
    public img:eui.Image;
    private mcCtrl: MovieclipController;
    public childrenCreated(){
        this.loadBg=new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        this.addChild(this.loadBg);

        // // this.mcCtrl = new MovieclipController(this.img,12, MovieclipController.makeResLoop('loading_{0}_png', 2, 0));
        // // this.mcCtrl.play(true);
        var boom:BitmapMovie = new BitmapMovie();

		//使用整张序列图初始化
		// var bm:egret.Bitmap = new egret.Bitmap(RES.getRes("boom_png"));
		// boom.initByBitmap(bm,4,5,0,18,192,192);

		//使用零散的多张序列图初始化
		boom.initByTile("loading_", "png",3);

		//设置位置
		boom.x = (this.stage.stageWidth - boom.width)/2;
		boom.y = (this.stage.stageHeight - boom.height)/2-200;
		boom.delay = 1000/10;
		this.addChild(boom);
        boom.play(10);

        this.background = new egret.Bitmap(RES.getRes("barBg_png"));
        this.bar = new egret.Bitmap(RES.getRes("bar_png"));
        this.addChild(this.background);
        this.background.x=120;
        this.background.y=400;
        this.addChild(this.bar);
        this.bar.x = (this.background.width - this.bar.width) / 2+120;
        this.bar.y = (this.background.height - this.bar.height) / 2+400;
        this.barMask = new egret.Rectangle(0, 0, this.bar.width, this.bar.height);
        this.barMask.x=120;
        this.barMask.y=400;
        this.bar.mask = this.barMask;

	}

	//所有播放完成


	//播放完一次


    public setProgress(current:number, total:number):void {
        //this.textField.text = `Loading...${current}/${total}`;
        // 传入 进度条纹理名称 进度条背景纹理名称
        //var progress=new ProgressBar("barBg","bar");
//设置进度 0-1
//        this.progress.setProgress(current/total);
        var _p:number=current/total;
        this.barMask = new egret.Rectangle(0, 0, (this.reverse ? (1 - _p) : _p) * this.bar.width, this.bar.height);
        this.bar.mask = this.barMask;
    }
}
