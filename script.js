// Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typeing Effect

let typed = new Typed('.auto-input',{
    strings: ['Test Engineer!', 'Freelancer!', 'Web Developer!','YouTuber!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
