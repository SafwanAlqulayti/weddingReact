import React, { Component } from 'react';
import axios from 'axios' ;

class Wedding extends Component {
     
    
  

    componentDidMount(){
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/1`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img1").src = data.data.data.img
   document.getElementById("img1").innerHTML = data.data.data.name
 
})
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/2`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img2").src = data.data.data.img
   document.getElementById("img22").innerHTML = data.data.data.name
 
})
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/3`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img3").src = data.data.data.img
   document.getElementById("img33").innerHTML = data.data.data.name
 
})
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/4`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img4").src = data.data.data.img
   document.getElementById("img44").innerHTML = data.data.data.name
 
})
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/5`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img5").src = data.data.data.img
   document.getElementById("img55").innerHTML = data.data.data.name
 
})
axios.get(`https://cors-anywhere.herokuapp.com/https://weddingnew.herokuapp.com/places/6`)
.then(data =>{
   

        console.log(data)
  
   document.getElementById("img6").src = data.data.data.img
   document.getElementById("img66").innerHTML = data.data.data.name
 
})
    }  
 
    
    render() {
         return (
            <div>
          
            
              <div className="row">

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" id="img1" alt=""></img></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id="img1"></a>
      </h4>
      <h5>٥٠٠٠</h5>
      <p className="card-text">اكبر قاعة افراح في منطقة الرياض</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="" id="img2" alt=""></img></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id="img22"> </a>
      </h4>
      <h5>١٠٠٠٠٠</h5>
      <p className="card-text">تتسع لاكثر من ٣٠٠ ضيف</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="" id='img3' alt=""></img></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id='img33'></a>
      </h4>
      <h5>٣٠٠٠٠</h5>
      <p className="card-text">قاعة صغيرة للمناسبات العائلية</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="" id="img4" alt=""></img>
    
    </a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id="img44">Item Four</a>
      </h4>
      <h5>٩٠٠٠٠</h5>
      <p className="card-text">احدى ارقى القاعات في المدينة</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="" id="img5" alt=""></img></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id="img55">Item Five</a>
      </h4>
      <h5>٨٠٠٠٠</h5>
      <p className="card-text">السعر يشمل العشاء ل ١٠٠ ضيف</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
  <div className="card h-100">
    <a href="#"><img className="card-img-top" src="" id="img6" alt=""></img></a>
    <div className="card-body">
      <h4 className="card-title">
        <a href="#" id="img66">Item Six</a>
      </h4>
      <h5>٦٠٠٠٠</h5>
      <p className="card-text">تتسع لاكثر من ٥٠٠ ضيف</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
  </div>
</div>

</div>
            </div>
        );
    }
}

export default Wedding;