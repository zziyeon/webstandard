const $loginBtn=document.getElementById('loginBtn');
        $loginBtn.addEventListener('click',function(){
            const $id=document.getElementById('id');
            const $pwd=document.getElementById('pwd');
            const $msg =document.getElementById('msg');

            if($id.value.trim().length==0){
                alertMsg($msg,'아이디를 입력하세요');
                return;
            }
            if($pwd.value.trim().length==0){
                alertMsg($msg,'비밀번호를 입력하세요');
                return;
            }
            else if($pwd.value.trim().length<8||$pwd.value.trim().length>15){
                alertMsg($msg,'비밀번호는 최소 8-15자리입니다.');
                return;
            }
            alert('네이버로 이동합니다!');
            document.location.href="http://www.naver.com";
        })

        function alertMsg(tag,msg){
            tag.textContent=msg;
            //경고메시지 폰트 설정
            tag.style.color='red';
            tag.style.fontweigt='bold';
            tag.style.fontSize='0.8em';
        }

        const $mainBtn=document.getElementById('mainBtn');
        $mainBtn.addEventListener('click',function(){
            document.location.href="main.html";
        })