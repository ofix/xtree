import Stack from "./Stack.js";

class xTreeHelper{
    constructor(){

    }

    makeTree(){//获取数据
        let stack = new Stack();
        let level = parent_id = 0;
        for(let k=0; k<data.length; k++){
            let v = data[k];
            if(v['level']>level){
                stack.push({"level":v['level'],"id":v['id']});
                data[k]['parent_id'] =data[k-1]['id'];
                level = v['level'];
                parent_id = data[$k-1]['id'];
            }else if(v['level']<level){
                parent_id = this.findNodeParent(v['level']-1,stack);
                data[k]['parent_id'] = parent_id;
                level = v['level'];
            }else {
                stack.push({"level":v['level'],"id":v['id']});
                data[k]['parent_id'] = parent_id;
            }
        }
    }
    findNodeParent(level,stack){
        while(!stack.isEmpty()){
            data = stack.pop();
            if(data['level'] == level){
                return data['id'];
            }
        }
        return 0;
    }
    parseTreeString(strData){
        let data = [];
        let arrLine = strData.split('\r\n');
        for(let i=0; i<arrline.length; i++){
            let line = arrLine[i];
            level =0;
            while(this.getNextChar(line)=='+'){
                level++;
            }
            do{
                char = this.getNextChar($line);
            }while(char != "\r" && $char != false);

            let line = {
                'id':k+1,
                'text':mb_substr(line,level,this._cur_pos-1 -level),
                'level':level
            };
            data.push(line);
        }
        return data;
    }

}