let fs = require('fs');
let path = require('path');
let Decimal = require('decimal.js');

let arrList = [];

// bsc heco 主网测试 每3s一个区块
let blocksPerDay = 28800;
//一年按照365天计算
let daysPerYear = 365;
// 基准斜率
let baseRatePerBlock = new Decimal(5707762557)
// 区块斜率
let multiplierPerBlock=35673515981;
// 拐点后区块斜率
let jumpMultiplierPerBlock=new Decimal(332952815829);
// 储备金率
let reserveFactor = new Decimal(0)
let one = new Decimal(1)
let hundred = new Decimal(100)

for(let i = 0; i <= 10000; i++) {

  let borrowApy;
  let supplyApy;
  let u = new Decimal(i/10000);
  let percent=u.mul(hundred).toNumber()
  if (i <= 8000) {
    let borrowRatePerBlock = u.mul(multiplierPerBlock).add(baseRatePerBlock).toFixed(0, Decimal.ROUND_DOWN)
    let supplyRatePerBlock = new Decimal(borrowRatePerBlock).mul(u).mul(one.sub(reserveFactor))
    let borrowInfo = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
    let supplyInfo = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
    borrowApy = Decimal.pow(borrowInfo, daysPerYear).sub(one).mul(hundred)
    supplyApy = Decimal.pow(supplyInfo, daysPerYear).sub(one).mul(hundred)
  }else{
    let normalRate = new Decimal(0.8).mul(multiplierPerBlock).add(baseRatePerBlock).toFixed(0, Decimal.ROUND_DOWN)
    let borrowRatePerBlock100 = (u.sub(new Decimal(0.8))).mul(jumpMultiplierPerBlock).add(new Decimal(normalRate))
    let supplyRatePerBlock100 = new Decimal(borrowRatePerBlock100).mul(u).mul(one.sub(reserveFactor))
    let borrowInfo = new Decimal(borrowRatePerBlock100).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
    let supplyInfo = new Decimal(supplyRatePerBlock100).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
    borrowApy = Decimal.pow(borrowInfo, daysPerYear).sub(one).mul(hundred)
    supplyApy = Decimal.pow(supplyInfo, daysPerYear).sub(one).mul(hundred)
  }

  arrList.push(
      { country: '存款APY', percentage: percent, value: supplyApy.toDecimalPlaces(2,Decimal.ROUND_DOWN).toNumber() },
      { country: '借款APY', percentage: percent, value: borrowApy.toDecimalPlaces(2,Decimal.ROUND_DOWN).toNumber() },
      { country: '资金利用率', percentage: percent, value: percent }
  )
}

//把data对象转换为json格式字符串
var content = JSON.stringify(arrList);

//指定创建目录及文件名称，__dirname为执行当前js文件的目录
var file = path.join(__dirname, 'generateInterestRateModel.json');

//写入文件
fs.writeFile(file, content, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('文件创建成功，地址：' + file);
});
