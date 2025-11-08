console.log("hello!");

  // チェックセルをクリックで〇トグル表示
  document.querySelectorAll('td.check-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      if(cell.classList.contains('checked')){
        cell.classList.remove('checked');
        cell.textContent = '';
      } else {
        cell.classList.add('checked');
        cell.textContent = '〇';
      }
    });
  });
