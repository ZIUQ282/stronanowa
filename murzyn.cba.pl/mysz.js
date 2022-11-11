function funkcjamysz(e){
    var body  = document.getElementsByTagName('body')[0];
    var tebeleczka  = document.createElement('table');
    const stalax = e.clientX, 
          stalay = e.clientY;
    var zmiennax = e.clientX,
        zmiennay = e.clientY;
        console.log(stalax);
        console.log(stalay);
        console.log(zmiennax);
        console.log(zmiennay);
    if(stalax<zmiennax && stalay<zmiennay){
        tebeleczka.style.left = stalax;
        tebeleczka.style.top = stalay;
    }else if(stalax>zmiennax && stalay>zmiennay){
        tebeleczka.style.left = zmiennax;
        tebeleczka.style.top = zmiennay;
    }else if(stalax<zmiennax && stalay>zmiennay){
        tebeleczka.style.left = stalax;
        tebeleczka.style.top = zmiennay;
    }else if(stalax>zmiennax && stalay<zmiennay){
        tebeleczka.style.left = zmiennax;
        tebeleczka.style.top = stalay;
    }
    tebeleczka.id = 'windows-select';
    body.appendChild(tebeleczka);
}

var