var APP_ID = '5BtKqM1Ba5SB0oTIP5oABJUA-gzGzoHsz';
var APP_KEY = 'ymVfLmeEVPEc8yF32AKE8EGl';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

//
//var TestObject = AV.Object.extend('TestObject');
//var testObject = new TestObject();
//testObject.save({
//    words: 'Hello World!'
//}).then(function(object) {
//    alert('LeanCloud Rocks!');
//})/**
// * Created by wan on 2018/8/30.
// */
var query =new AV.Query('Message')
query.find().then(function(messages){

    let array =messages.map((item)=> item.attributes )
    array.forEach((item)=> {
        let li =document.createElement('li')
        li.innerText = item.name+': '+ item.content
        messagelist.append(li)
    })
},function(error){})

var label = document.getElementById('postmessage')

label.addEventListener('submit',function(e){
    e.preventDefault()
    let content = label.querySelector('input[name=content]').value
    let Owner = label.querySelector('input[name=owner]').value
    var Message = AV.Object.extend('Message');
    var message1 = new Message()
    message1.save({
        'content': content,
        name:Owner
    }).then(function(object){
        let li = document.createElement('li')
        li.innerText = object.attributes.name+' '+object.attributes.content
        let messagelist = document.querySelector('#messagelist')
        messagelist.appendChild(li)
        label.querySelector('input[name=content]').value = ''
        console.log(object)

    })
})

