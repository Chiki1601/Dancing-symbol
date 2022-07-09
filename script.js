paths = document.querySelectorAll('path'); 

document.querySelector('button').addEventListener('click',function(){
   
  document.querySelector('.wrapper').classList.toggle('small');
  
  Array.prototype.forEach.call(paths,function(item,index){
  
    item.classList.remove('scaleMe')
  
  })  

})


Array.prototype.forEach.call(paths,function(item,index){  

  item.addEventListener('mouseenter',function(){ 
  
    var _this = this;
  
    this.classList.toggle('scaleMe')
 
    this.addEventListener('transitionend',function(){
    
      _this.classList.toggle('scaleMe')
  
    })

  })
})