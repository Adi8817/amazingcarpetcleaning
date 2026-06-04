function validateForm(ids){
  return ids.every(id=>{
    const el=document.getElementById(id);
    if(!el) return true;
    const v=el.value.trim();
    if(!v){el.style.borderColor='#e74c3c';return false;}
    el.style.borderColor='#dce3f0';return true;
  });
}
function submitHeroForm(event){
  if(event) event.preventDefault();
  if(!validateForm(['h-name','h-phone','h-email','h-service','h-suburb'])){
    alert('Please fill in all required fields.');return;
  }
  document.getElementById('hero-success').style.display='block';
  const btn=document.querySelector('#quote-form .btn-submit');
  btn.textContent='✅ Quote Requested!';btn.style.background='var(--green)';
}
function submitLeadForm(event){
  if(event) event.preventDefault();
  if(!validateForm(['l-name','l-phone','l-email','l-service','l-suburb'])){
    alert('Please fill in all required fields.');return;
  }
  document.getElementById('lead-success').style.display='block';
  const btn=document.querySelector('#lead-form .btn-submit');
  btn.textContent='✅ Request Sent!';btn.style.background='var(--green)';
}
document.querySelectorAll('a[href="#lead-form"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.getElementById('lead-form').scrollIntoView({behavior:'smooth',block:'start'});
  });
});

