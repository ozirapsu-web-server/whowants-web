### 프로젝트

- SOPT 동아리에서 사이드 프로젝트를 진행하고 있는 후원츠 팀입니다.
- 기부 플랫폼을 개발하고 있습니다.

- containers 폴더

  - 컨테이너 컴포넌트 모음
  - 데이터를 불러와 프레젠테이셔널 컴포넌트에 뿌려준다
  - 스타일 정보 없음

- components 폴더

  - 프레젠테이셔널 컴포넌트 모음
  - 스타일 정보를 가지고 있음
  - 부모로부터 받은 props만으로 화면에 보여준다

- modules 폴더

  - 리덕스 관련 폴더
  - Ducks 패턴으로 구성 (액션, 액션생성자, 리듀서가 한 파일에 있음)

- pages 폴더
  - 각각의 페이지 폴더
  - containers 컴포넌트로 구성됨

## 배포 v1

- 서버에서 cors 설정 필요한 상태 (진행 중)
- [후원츠 웹 버전 배포 v1](http://whowants2.s3-website.ap-northeast-2.amazonaws.com/)

### [실행]

- yarn install
- yarn start
