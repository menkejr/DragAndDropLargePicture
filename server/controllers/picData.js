var fs = require('fs');

module.exports.savePic = function (req, res) {  
    var picture = req.body;
    
    try {            
        fs.writeFileSync('data/pictures/' + picture.id + '.json', JSON.stringify(picture));
        res.send(picture);
    } catch (err) {
        res.render('error', { error: err })       
    }                             
    
};

// module.exports.getPics = function (req, res) {  
//     res.setHeader('Content-Type', 'application/json');
//     var pictureList = req.body;
   
//     try { 
//         var picArray = [];
//         pictureList.forEach(pic => {
//             var picture = fs.readFileSync('data/pictures/' + pic.id + '.json', 'utf8');           
//             picture = JSON.parse(picture);
//             picArray.push(picture);
//             fs.unlinkSync('data/pictures/' + pic.id + '.json');
//         });        
//         res.send(picArray);
//     } catch (err) {
//         res.render('error', { error: err })       
//     }                             
    
// };

module.exports.getPic = function (req, res) {      
    try { 
        var picture = fs.readFileSync('data/pictures/' + req.params.id + '.json', 'utf8');
        fs.unlinkSync('data/pictures/' + req.params.id + '.json');
        res.send(picture);               
    } catch (err) {
        res.render('error', { error: err })       
    }                             
    
};

module.exports.saveOrder = function (req, res) {
    var order = req.body;   
    try {
        fs.writeFileSync('data/order.json', JSON.stringify(order)); 
        res.send(order); 
    } catch (err) {
        res.render('error', { error: err }); 
    } 
           
   
};