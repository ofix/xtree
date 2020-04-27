class xTreeNode{
    constructor(data,depth=0,xTree){
        this.data = data; //json格式数据
        this.rectBox = []; //包围盒
        this.childrenCount = 0; //儿子节点数目
        this.parent = null; //父节点
        this.children = []; //子节点
        this.leftNo = -1;//后序遍历的序号
        this.rightNo = -1;//后序遍历的序号
        this.x = 0; //起始X坐标
        this.y = 0; //起始Y坐标
        this.w = 0; //宽度
        this.h = 0; //高度
        this.visible = false; //是否显示
        this.foldChildrenNode = true; //是否展开子节点
        this.depth = depth; //当前节点所处深度,从根节点开始算
        this.xTree = xTree;
    }
    hasChildren(){
        return  this.children.length != 0;
    }
    getDepth(){
        return  this.depth;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    moveTo(xPos,yPos){ //移动位置

    }
    zoomIn(factor){ //放大

    }
    zoomOut(factor){ //缩小

    }
    getWidth(){
        return this.w;
    }
    getHeight(){
        return this.h;
    }
    getChildrenCount(){
        return this.childrenCount;
    }
    /**
     * @desc 绘制数据
     * @param {Context2D} ctx 
     */
    draw(ctx){
        if(this.visible){
            this.drawBorder(ctx);
        }
    }
    drawBorder(ctx){
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x+this.w,this.y);
        ctx.lineTo(this.x+this.w,this.y+this.h);
        ctx.lineTo(this.x,this.y+this.h);
        ctx.stroke();
    }
    drawText(ctx){
        ctx.fillText(this.leftNo,this.x,this.y);
        ctx.fillText(this.rightNo,this.x+this.w/2,this.y);
    }
}