const items = document.querySelectorAll('li');
const rating_container = document.querySelector('.rating');
const thank_you = document.querySelector('.thank-you');
const selectedRatingDisplay = document.querySelector('#selected-rating');
var selected_item=null;
items.forEach(item=> {
    item.addEventListener('click',()=>
    {
        if(selected_item!=null)
        {
            selected_item.classList.remove('selected');
        }
        item.classList.add('selected');
        selected_item=item;
    }
    );
});
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
   if(selected_item==null)
   {
    alert("Please select a rating.");
   }
   else{
       rating_container.classList.remove('active');
       thank_you.classList.add('active');
       const rating = selected_item.getAttribute('data-value');
       selectedRatingDisplay.textContent = rating;
   }
}
);