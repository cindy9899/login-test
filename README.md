<h1>간단한 깃 사용법</h1>
<ul>
    <h3>ReadAccount git repository 주소 : "https://github.com/bingual/RedAccount.git"</h3>
    <li>
        <p>git status : 현재 상태 확인</p>
    </li>
    <li>
        <p>git add . : 모든 파일 추가</p>
    </li>
    <li>
        <p>git commit -m "커밋할 내용" : 모든 파일 저장</p>
    </li>
    <li>
        <p>git push origin main : 저장소로 commit한 내용 업로드</p>
    </li>
    <li>
        <p>git pull origin main : 저장소의 업로드된 파일을 현재 파일과 병합</p>
    </li>
    <li>
        <p>git clone "url 주소" : 저장소의 업로드된 파일을 현재 폴더에 다운로드</p>
    </li>
</ul>
<h3>파일 git 저장소에 올리는 방법</h3>
<h5>git add . 명령어로 파일추가 > git status로 상태 확인 > git commit "init" 내용 저장 > git push origin main > 내용 업로드<br />
</h5>
<h3>파일 git 저장소에 다운하는 방법</h3>
<h5>git clone https://github.com/bingual/RedAccount.git 명령어로 원하는 폴더에 저장 > 현재 프로젝트 폴더에서 yarn install로 node-module
    설치 그 이후에는 push해서 git 레파지토리 내용이 변경될때마다 git pull origin main으로 저장소의 최신파일로 현재 프로젝트 파일과 병합하시면 됩니다.
</h5>

<h3>주의 사항</h3>
<h5>파일 수정하실때 서로 합의하신다음에 그 파일만 작업하시고 다른거는 수정하면 안됩니다. git push 할때 꼬입니다. 즉 다른 사람이 작업하고 있는 파일은 건들면 안돼요.<br />
    git push 하기전에는 항상 서로 합의하고 나서 git push 명령어 사용해주세요. 한쪽이 push 했다면 다른 한쪽은 git pull 명령어로 파일 다운받고 작업진행하시면 됩니다.
    폴더 만들어서 날짜별로 백업 하시면 좋습니다.
</h5>