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

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();
    }
    private loadBg:egret.Bitmap;
    public background:egret.Bitmap;
    public bar:egret.Bitmap;
    public barMask:egret.Rectangle;
    public reverse = false;
    private createView():void {
        this.loadBg=new egret.Bitmap(RES.getRes("loadBg"));
        this.addChild(this.loadBg);
        this.background = new egret.Bitmap(RES.getRes("barBg"));
        this.bar = new egret.Bitmap(RES.getRes("bar"));
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

    public setProgress(current:number, total:number):void {
        var _p:number=current/total;
        this.barMask = new egret.Rectangle(0, 0, (this.reverse ? (1 - _p) : _p) * this.bar.width, this.bar.height);
        this.bar.mask = this.barMask;
    }
}
