module.exports = function main(inputs) {
	var price=0.0;
    if(inputs.distance<2){
    	//2公里内价格为起步价6元
    	price=6;
    }else if(inputs.distance<8){
    	//8公里内超过2公里的部分价格为0.8元/公里
    	price=6+0.8*(inputs.distance-2);
    }else{
    	//超过8公里的部分每公里价格为1.2元。前8公里价格为10.8元
    	price=10.8+1.2*(inputs.distance-8);
    }
    //等待价格为每分钟0.25元
    price+=0.25*inputs.parkTime;
    //四舍五入，取整后返回
    return Math.round(price);
};
