# MAKE YOUR PHOTOBOOK 📸
소프트웨어학부 20213038 이보현 - [웹클라이언트컴퓨팅] 중간대체 과제물
## 프로젝트 소개 (Introduction)
- MAKE YOUR PHOTOBOOK은 온라인 포토북 제작 서비스입니다.
업로드 한 사진을 다양한 테마의 포토북으로 만들어 보관할 수 있습니다.
- 시연 영상: https://youtu.be/6QAoc_wHNjY


## 개발 환경 (Development Environment)
-  React
-  Firebase - Firestore
- npm - v8.1.0
- node - v16.13.0


## 실행 방법 (Set Up)
1.  해당 repository clone 후 이동
2. 터미널에 `npm install`을 입력해 패키지 설치
3.  `npm start`를 통해 실행

## 기능 (Features)
[2023.5.10 기준]
- 제공 기능
  * 회원가입 / 로그인
  * 이미지 업로드 (button)
  * 메뉴
  * 앨범 생성 기능
  * 포토북 
- 제한 기능
  * 유저 정보 변경 (account menu)
  * 이미지 업로드 (url)
  * 포토북 수정 (photobook save button)
  * 포토북 삭제 (photobook delete button)


## 유의사항 (Precautions)
- 모든 기능은 로그인 이후 사용 가능
- 해당 포토북은 셀프 사진부스의 원본 사진 사이즈를 기준으로 함
- 앨범 이름에는 영어 및  ' . ' 만 사용 가능하며, 6자 이내로 제한
- 이미지 형식 'jpg' '.jpeg' '.png' 지원
- 이미지 업로드 시,다중 업로드를 막기 위해 완료 alert가 뜰 때까지 대기
- 한 계정 내 동일한 이름의 이미지 업로드 지양 (중복으로 인한 오류가 발생할 수 있음)
- iPhoneSE까지 반응형 지원


## 스크린샷 (Screenshot)
<div>
<img width="200" alt="start" src="https://github.com/250b/MakeYourPhotobook/assets/84188904/8e587776-4bf8-4af4-b683-2662b0c7d704">
<img width="200" alt="signup/login" src="https://github.com/250b/MakeYourPhotobook/assets/84188904/d1191d11-e9c1-45f3-8eb2-19b6d8317d8c">
<img width="200" alt="main" src="https://github.com/250b/MakeYourPhotobook/assets/84188904/524a28ba-e62c-4eb8-9524-9337ba41aa00">
<img width="200" alt=“menu” src="https://github.com/250b/MakeYourPhotobook/assets/84188904/5a6e3a8a-360d-45e1-bc94-6bfe27acc0f1">
<div>
<div/>
<img width="200" alt="myalbum" src="https://github.com/250b/MakeYourPhotobook/assets/84188904/5134fa06-5da9-45d8-ad30-0b7a0503bb99">
<img width="200" alt=“create” src="https://github.com/250b/MakeYourPhotobook/assets/84188904/fb110521-e825-47a5-90cc-9cdb394e4835">
<img width="200" alt=“photo”book src="https://github.com/250b/MakeYourPhotobook/assets/84188904/3046bb6f-8563-439c-9be7-1a98e42ed785">

<div/>


