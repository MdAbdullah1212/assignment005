
// Data Transiction Database
const dataTanasiction = [];

// Heart increment

let count = 1;
function heartsCouner(id) {
    const heartCount = document.getElementById(id);
    heartCount.innerText = count++;
}

document.getElementById('increase-heart').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('polic').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('fire-service').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('ambulance').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('childHelpLine').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('corporateHelpLine').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('electricityHelpLine').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('bracHelpline').addEventListener('click', function () {
    heartsCouner('hear-balance')
})
document.getElementById('railwayHelpLine').addEventListener('click', function () {
    heartsCouner('hear-balance')
})



// Deduct 20 pint for 1 call

function callButton(id) {
    const callPoint = document.getElementById(id);
    callPoint.innerText -= point;
}

let point = 20;

function callButtons (id){
    callButton('call-point')

    const viewAllTransiction = document.getElementById(id);
    viewAllTransiction.innertex = ''
    for (const data of dataTanasiction) {
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="flex justify-between items-center my-2 p-3 bg-gray-50 rounded-lg shadow-sm">
            <div>
                <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-400">${data.number}</p>
             </div>
            <div>
                <p class="text-gray-500">${data.date}</p>
            </div>
        </div>
        `
        viewAllTransiction.appendChild(div)
    }
}
document.getElementById('call-btn1').addEventListener('click', function () {
    alert('National Emergency Number')
    const data = {
        name: 'National Emergency Number',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn2').addEventListener('click', function () {
    alert('Police Helpline Number')
    
    const data = {
        name: 'Police Helpline Number',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn3').addEventListener('click', function () {
    alert('Fire Service Number')
    
    const data = {
        name: 'Fire Service Number',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn4').addEventListener('click', function () {
    alert('Ambulance Service')
    
    const data = {
        name: 'Ambulance Service',
        number: 1994-999999,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn5').addEventListener('click', function () {
    alert('Women & Child Helpline')
    
    const data = {
        name: 'Women & Child Helpline',
        number: 109,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn6').addEventListener('click', function () {
    alert('Anti-Corruption Helpline')
    
    const data = {
        name: 'Anti-Corruption Helpline',
        number: 106,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn7').addEventListener('click', function () {
    alert('Electricity Helpline')
    
    const data = {
        name: 'Electricity Helpline',
        number: 16216,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn8').addEventListener('click', function () {
    alert('Brac Helpline')
    
    const data = {
        name: 'Brac Helpline',
        number: 16445,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})
document.getElementById('call-btn9').addEventListener('click', function () {
    alert('Bangladesh Railway Helpline')
    
    const data = {
        name: 'Bangladesh Railway Helpline',
        number: 163,
        date: new Date().toLocaleTimeString()
    }
    dataTanasiction.push(data)
    callButtons ('view-all-transiction')
})


// Document Copy
function textCopyElemnet(id){
    const copyElement = document.getElementById(id)
    const copyText = copyElement.innerText;
    navigator.clipboard.writeText(copyText).then(alert('Text Copy'))
}
let copysCout = 1;
function copyCounters (id){
    const elementCopyCount = document.getElementById(id);
    elementCopyCount.innerText = copysCout++;
}

document.getElementById('copy1').addEventListener('click', function (){
    textCopyElemnet('copyBord1')
    copyCounters('copyCount')
})

document.getElementById('copy2').addEventListener('click', function (){
    textCopyElemnet('copyBord2')
    copyCounters('copyCount')
})

document.getElementById('copy3').addEventListener('click', function (){
    textCopyElemnet('copyBord3')
    copyCounters('copyCount')
})

document.getElementById('copy4').addEventListener('click', function (){
    textCopyElemnet('copyBord4')
    copyCounters('copyCount')
})

document.getElementById('copy5').addEventListener('click', function (){
    textCopyElemnet('copyBord5')
    copyCounters('copyCount')
})

document.getElementById('copy6').addEventListener('click', function (){
    textCopyElemnet('copyBord6')
    copyCounters('copyCount')
})

document.getElementById('copy7').addEventListener('click', function (){
    textCopyElemnet('copyBord7')
    copyCounters('copyCount')
})

document.getElementById('copy8').addEventListener('click', function (){
    textCopyElemnet('copyBord8')
    copyCounters('copyCount')
})

document.getElementById('copy9').addEventListener('click', function (){
    textCopyElemnet('copyBord9')
    copyCounters('copyCount')
})
// History Clear
document.getElementById('hitoryClear').addEventListener('click', function(){
    console.log('clear')
    const historyClear = document.getElementById('view-all-transiction');
    historyClear.innerText = ''
})
