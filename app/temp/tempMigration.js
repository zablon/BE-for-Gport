var restaurants  = require('./restaurants');

function addDB() {
    var obj = restaurants.shift();
    console.log(obj)
    if(typeof obj != 'undefined'){
        models.Place.create({
            title: obj.title,
            type: obj.type,
            folder: obj.folder,
            distance: obj.distance,
            phone: obj.phone,
            address: obj.address,
            description: obj.description,
            children: obj.children,
            conditioner: obj.conditioner,
            dush: obj.dush,
            eat: obj.eat,
            toilet: obj.toilet,
            tv: obj.tv,
            wifi: obj.wifi,
            refrigeter: obj.refrigeter,
            swiming: obj.swiming,
            lat: obj.lat,
            lng: obj.lng
        }).then(function(res) {
            addRoom(obj.room, res);
            addDB()
        });
    }else{
        console.log('========end========')
    }
}
//addDB()

function addRoom(obj, res){
    var room = obj.shift();
    console.log(room)
    if(typeof room != 'undefined') {
        models.Room.create({
            title: room.title,
            folderImg: room.folderImg,
            conditioner: room.conditioner,
            dush: room.dush,
            toilet: room.toilet,
            tv: room.tv,
            wifi: room.wifi,
            refrigeter: room.refrigeter,
            swiming: room.swiming,
            image: room.image,
            PlaceId: res.dataValues.id
        }).then(function (resRoom) {
            addImage(room.image, resRoom)
            addPrice(room.price, resRoom)
            addRoom(obj,res)
        });
    }else{

    }
}
function addImage(obj, resRoom) {
    var image = obj.shift();
    console.log(image)
    if(typeof image != 'undefined') {
        models.Image.create({
            name: image.name,
            RoomId: resRoom.dataValues.id
        }).then(function () {
            addImage(obj, resRoom)
        });
    }else{

    }

}
function addPrice(obj, resRoom) {
    var price = obj.shift();
    console.log(price)
    if(typeof price != 'undefined') {
        models.Price.create({
            price: price.price,
            mounth: price.mounth,
            RoomId: resRoom.dataValues.id
        }).then(function() {

        });
    }else{

    }
}