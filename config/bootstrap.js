/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
if(await Restaurant.count()>0){
  return;
};

await Restaurant.createEach([
  {"createdAt":1603301368572,"updatedAt":1603301368572,"id":1,"title":"20% discount","Rname":"Pizza Hut","quota":100,"coins":200,"Expirydate":"2020.12.12","region":"Kowloon","mall":"Festival Walk","image":"https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%BF%85%E8%83%9C%E5%AE%A2&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=4265811967,1003414843&os=1306455791,4154220257&simid=3518740856,373260272&pn=25&rn=1&di=26950&ln=1601&fr=&fmq=1603301227120_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100m0j000000axjfl3237.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"pizza hut","_id":1},
  {"createdAt":1603301466003,"updatedAt":1603301466003,"id":2,"title":"30% discount by credit card","Rname":"YOSHINOYA","quota":150,"coins":300,"Expirydate":"2020.12.25","region":"Kowloon","mall":"MegaBox","image":"https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%90%89%E9%87%8E%E5%AE%B6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=44484631,3123870574&os=1181577457,2485543442&simid=4170030156,705121512&pn=11&rn=1&di=48840&ln=1672&fr=&fmq=1603301405359_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fproeb4945.pic46.websiteonline.cn%2Fupload%2FIMG_6260.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"吉野家","_id":2},
  {"createdAt":1603301582782,"updatedAt":1603301582782,"id":3,"title":"20% discount every Sunday","Rname":"Burger King","quota":80,"coins":500,"Expirydate":"2021.04.30","region":"Kowloon","mall":"Elements","image":"https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%B1%89%E5%A0%A1%E7%8E%8B&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=3472058986,3572161170&os=937675034,4250630483&simid=3197805836,3648842965&pn=34&rn=1&di=114840&ln=1606&fr=&fmq=1603301515276_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100v0n000000eu9scF940.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"汉堡王","_id":3},
  {"createdAt":1603301796420,"updatedAt":1603301796420,"id":4,"title":"subtract 30 from 100","Rname":"KFC","quota":210,"coins":50,"Expirydate":"2021.2.10","region":"HKI","mall":"Pacific Place","image":"https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=KFC&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=0&latest=0&copyright=0&cs=1826133524,2107571039&os=2897606547,670186346&simid=3347623704,247410924&pn=29&rn=1&di=213950&ln=1504&fr=&fmq=1603301616570_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01198e5b4edaf0a8012036be6efd24.JPG%401280w_1l_2o_100sh.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"kentucky chicken","_id":4},
  {"createdAt":1603301918931,"updatedAt":1603301918931,"id":5,"title":"30% discount every weekend","Rname":"Mcdonald","quota":350,"coins":130,"Expirydate":"2022.12.30","region":"NT","mall":"New Town Plaza","image":"https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E9%BA%A6%E5%BD%93%E5%8A%B3&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=0&latest=0&copyright=0&cs=1281028255,1024945540&os=3372742156,633950846&simid=4244795888,711658705&pn=44&rn=1&di=108680&ln=1652&fr=&fmq=1603301890183_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fi0.hexunimg.cn%2F2016-01-29%2F182087158.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"麦当劳","_id":5},
  {"createdAt":1603302097842,"updatedAt":1603302097842,"id":6,"title":"20% discount","Rname":"Hui Lau Shan","quota":200,"coins":400,"Expirydate":"2020.11.20","region":"NT","mall":"Tsuen Wan Plaza","image":"https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E8%AE%B8%E7%95%99%E5%B1%B1&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=0&latest=0&copyright=0&cs=925666561,3774880053&os=2749167556,3451947309&simid=4244670792,712234709&pn=16&rn=1&di=82390&ln=1841&fr=&fmq=1603302019354_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.mxj.com.cn%2Fuploads%2F20180526%2F1527328355732725.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined","message":"许留山","_id":6}
  
]);
 


};
