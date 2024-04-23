import $ from 'jquery';

window.addEventListener('load', function(){
    let quoteBlock = document.querySelector('#quote');
    let authorQuote = document.querySelector('#figcaption');
    let btnGet = document.querySelector('.btn-get-quote');
    let quotesContainer = document.querySelector('.quotes-container');
    
    btnGet.addEventListener('click', function(){
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json',
            success: function(data){
                console.log(data)

                if(quoteBlock.innerHTML == 'Место под вашу цитату'){
                    quoteBlock.innerHTML = data.quoteText;
                    if(data.quoteAuthor){
                        authorQuote.innerHTML = `© ${data.quoteAuthor}`;
                    }
                    else{
                        authorQuote.innerHTML = '';
                    }
                }
                else{
                    quotesContainer.innerHTML += `<blockquote>
                                                    <p>${quoteBlock.innerHTML}</p>
                                                    <figcaption>${authorQuote.innerHTML}</figcaption>
                                                    </blockquote>`;
                    quoteBlock.innerHTML = data.quoteText;
                    if(data.quoteAuthor){
                        authorQuote.innerHTML = `© ${data.quoteAuthor}`;
                    }               
                }
            }
        })
    })
})