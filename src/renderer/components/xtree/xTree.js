import xTreeNode from "./xTreeNode.js";
import Stack from './stack.js';
class xTree{
    constructor(data){
        this.data = data;
        this.root = new xTreeNode();
        this.childrenCount = 0;
        let canvas = document.getElementById(canvas_id);
        canvas.width = 800;
        canvas.height = 800;
        canvas.style.backgroundColor="#FFF";
        this.ctx = canvas.getContext('2d');
    }
    getRoot(){
        return this.root;
    }
    hasChildren(){ //判断是否有子节点
        return this.childrenCount != 0;
    }
    moveTo(xPos,yPos){

    }
    buildTree(tree,callback=null,parent_id=0,child_node="children"){ //根据二维数据创建树结构
        let tree = [];
        for(let i=0; i<tree.length; i++){
            if(tree[i]['parent_id'] == parent_id){
                unset(tree[i]);
                let tmp =typeof callback === 'function'?callback(tree[i]):tree[i];
                let children = this.buildTree(tree,callback,tree[i]['id'],child_node);
                if(children){
                    tmp[child_node] = children;
                }
                tree.push(tmp);
            }
        }
        return tree;
    }
    visitTree(){ //遍历层级数据

    }
    draw(){
        this.ctx.save();

        this.ctx.restore();
    }
}