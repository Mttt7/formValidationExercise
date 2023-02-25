console.log('elo')
const email = document.getElementById('user_email')
const country = document.getElementById('user_country')
const zipCode = document.getElementById('user_zip-code')
const password = document.getElementById('user_password')
const confirmPassword = document.getElementById('confirm_password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    console.log('ss')
    let messages = []
    if(email.value==='' || email.value==null){
        messages.push('•Email is required')
    }
    
    if(country.value==='' || country.value==null){
        messages.push('•Country is required')
    }
    if(zipCode.value==='' || zipCode.value==null){
        messages.push('•zipCode is required')
    }


    if(password.value.length<=6){
        messages.push('•Password must be 6-20 char.')
    }

    if(password.value.length>20){
        messages.push('•Password must be 6-20 char')
    }

    if(password.value!==confirmPassword.value){
        messages.push('•Passwords are not the same!')
    }

    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join('\n ')
    }

   

  

})