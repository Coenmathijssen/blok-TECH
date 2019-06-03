$(document).ready(() => {
  $('.deleteUser').on('click', deleteUser)
})

let deleteUser = () => {
  const check = confirm(`Are you sure you want to delete this user? This action can't be undone`)

  if (check) {
    $.ajax({
      type: 'DELETE',
      url: '/users/delete/' + $('.deleteUser').data('id')
    })
    window.location.replace('/users')
  } else {
    return false
  }
}
