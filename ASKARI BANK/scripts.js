// version 1.1
 if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window
     .matchMedia('(prefers-color-scheme: dark)')
     .matches)) {
   document.documentElement.classList.add('dark');
 }
 document.addEventListener('DOMContentLoaded', function() {
   if (typeof lucide !== 'undefined') {
     lucide.createIcons();
   }
 });
