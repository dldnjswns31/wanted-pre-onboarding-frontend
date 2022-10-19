# Wanted pre-onboarding Front-end course

이 repository는 Wanted pre-onboarding Front-end 과제 제출용으로 만들어졌습니다.

### 실행 방법

---

```
git clone https://github.com/dldnjswns31/wanted-pre-onboarding-frontend.git

cd wanted-pre-onboarding-frontend

npm install

npm start

이후
http://localhost:3000 접속
```

### 배포 링크

---

https://wanted-pre-onboarding-frontend-hazel.vercel.app/


### 구현 기능

---

로딩에 시간이 필요할 수 있습니다. 잠시만 기다려주세요.

<details>
<summary>Assignment 1. 유효성 검사</summary>
<div markdown="1">
<br>
<ul>
<li>이메일(@ 포함) 및 비밀번호(8자 이상) 유효성 검사</li>
<li>유효성 통과 시 버튼 활성화</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196077800-f94f05ae-9c58-4e62-af1d-3173415d17e0.gif" alt="유효성 검사"/>
</p>
</ul>
</div>
</details>

<details>
<summary>Assignment 2. 회원가입 및 로그인</summary>
<div markdown="1">
<br/>
<ul>
<li>회원가입 성공 시 로그인 페이지로 리다이렉트</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196077962-28820078-55f4-4aa1-b666-ef55eca82f9b.gif" alt="회원가입"/>
<br/>
<br/>
<li>로그인 성공 시 JWT를 local storage에 저장</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196077020-71bae5cd-7a54-404f-8e9f-c22f0b203cd4.gif" alt="로그인"/>
</p>
</ul>
</div>
</details>

<details>
<summary>Assignment 3. 리다이렉팅</summary>
<div markdown="1">
<br/>
<ul>
<li>로컬 스토리지에 토큰이 있는 상태로 <code>/</code>에 접근 시 <code>/todo</code>로 리다이렉팅</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196078412-c5bd34c5-1d67-4804-81e7-526600df1c98.gif" alt="토큰 있을 때"/>
<br/>
<br/>
<li>로컬 스토리지에 토큰이 없는 상태로 <code>/todo</code>에 접근 시 <code>/</code>로 리다이렉팅</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196078523-74367c47-3d3d-4242-ae2a-d71f43429324.gif" alt="토큰 없을 때"/>
</p>
</ul>
</div>
</details>

<details>
<summary>Assignment 4. 투두</summary>
<div markdown="1">
<br>
<ul>
<li><code>/todo</code> 경로에 접속하면 투두 리스트 확인 가능</li>
<li>리스트 페이지에서 투두 리스트의 내용과 완료 여부 확인 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196079868-d241c515-fcf0-4cc0-bad3-6b0ddb86ecfb.gif" alt="투두 접속"/>
<br/>
<br/>
<li>입력창과 추가 버튼을 통해 투두 추가 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196079945-b7cbfe54-653f-4550-ac92-8fa85db30968.gif" alt="투두 추가"/>
</p>
</ul>
</div>
</details>

<details>
<summary>Assignment 5. 수정 및 삭제</summary>
<div markdown="1">
<br>
<ul>
<li>연필 버튼을 클릭하여 수정모드 활성화 가능 및 투두 수정 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196080401-cbc64900-d137-4423-934e-8ba799146a27.gif" alt="투두 수정"/>
<br/>
<br/>
<li>수정 취소 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196080449-fd00b44b-2b77-48ab-8706-a7b5d1d64df6.gif" alt="수정 취소"/><br/>
<br/>
<br/>
<li>쓰레기통 버튼을 클릭하여 투두 삭제 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196080516-4f6b467e-089b-417d-9e30-fa109afeeb75.gif" alt="투두 삭제"/>
</p>
</ul>
</div>
</details>

<details>
<summary>추가 구현</summary>
<div markdown="1">
<br>
<ul>
<li>로그아웃 버튼 클릭시 token 삭제 후 로그인 페이지로 리다이렉팅</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196080668-62300ab2-9523-43c6-9d72-fff94dce8311.gif" alt="로그아웃"/>
<br/>
<br/>
<li>투두 완료 체크 가능</li>
<br/>
<img src="https://user-images.githubusercontent.com/71388830/196080702-30348591-65df-4a76-9729-d452877f71f4.gif" alt="투두 완료"/><br/>
</p>
</ul>
</div>
</details>







