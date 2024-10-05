const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    e.preventDefault()
    console.log(e)
    insert.innerHTML = `<div class= 'color'><table>
<tr>
  <th>KEY</th>
  <th>KEYCODE</th>
  <th>CODE</th>
</tr>
<tr>
  <td>${(e.key===' ')?"spacebar":e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>
</table></div>`
})
