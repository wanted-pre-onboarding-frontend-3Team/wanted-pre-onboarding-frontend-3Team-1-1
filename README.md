# 프로젝트 소개

- 개발 기간 : 2022.12.20 ~ 2022.12.23
- 개발 스택 : JavaScript, React, Styled-Components
- 배포 환경 : AWS Amplify
- 팀장: 안지웅
- 팀원: 김안나, 박혜선, 이윤진, 전해강, 최민정, 최주은
- 배포 링크: https://main.d1vackvhpt30qe.amplifyapp.com/auth

<br/>

# 실행 방법

```
npm install
npm start
```

<br/>

# 기능

1. 로그인, 회원가입
2. 투두리스트

<br/>

# Best Practice 선정 이유

1. axios 모듈화

- class를 활용한 axios 모듈을 생성, 각 성격에 맞는 api를 모아서 관리
- 해당 api를 어디서든 접근할 수 있도록 Context Api를 활용

2. useForm 이용한 form data 관리

- form data를 사용하는 컴포넌트에서 하나의 hook으로 데이터 관리 가능
- register 함수를 통해 props 간편 할당 및 validation 자동 검사

3. tag의 기본 기능을 활용한 컴포넌트 구현

- input 태그의 기본속성들을 활용하여 validation 체크
- validity 프로퍼티를 확인해 type별로 정해진 input의 valid를 확인하여 버튼 활성화

4. RouteComponent를 활용한 페이지 접근 권한 관리

- permission을 확인하고 일치해야만 페이지 컴포넌트 렌더가 되도록 구현
- 추후 모든 컴포넌트에 적용해야 할 부분 일괄적용 가능 ex) seo, version

<br/>

# Commit Convention

| Tag Name  | Description                                                                                   |
| :-------: | :-------------------------------------------------------------------------------------------- |
|   Feat    | 새로운 기능을 추가                                                                            |
|    Fix    | 버그 수정                                                                                     |
|  Design   | CSS 등 사용자 UI 디자인 변경                                                                  |
| !BREAKING | CHANGE 커다란 API 변경의 경우                                                                 |
|  !HOTFIX  | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |
|   Style   | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                                         |
| Refactor  | 프로덕션 코드 리팩토링                                                                        |
|  Comment  | 필요한 주석 추가 및 변경                                                                      |
|   Docs    | 문서 수정                                                                                     |
|   Test    | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
|   Chore   | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
|  Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
|  Remove   | 파일을 삭제하는 작업만 수행한 경우                                                            |
