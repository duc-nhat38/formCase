function login(){
    if($('#formLogin').valid()){
        alert('ok');
    }
}

function showPassword(){
    $('#password').attr('type', 'text');
    $('.showPassword').html('<i class="fas fa-eye-slash" title="Ẩn mật khẩu" onclick="hiddenPassword()"></i>');
}

function hiddenPassword(){
    $('#password').attr('type', 'password');
    $('.showPassword').html('<i class="fas fa-eye" title="Hiện mật khẩu" onclick="showPassword()"></i>');
}