## 배포 v1

- github Action으로 CI/CD를 구축했습니다.
- 현재 모바일 웹 디자인으로만 제공하고 있습니다.
- 웹 화면 디자인은 현재 진행중입니다.

### 배포 주소 (반응형 디자인입니다. 태블릿, 모바일, pc 디자인 적용)

- [후원츠 웹 버전 배포 v3](http://whowants.ga/)
- [후원츠 figma](https://www.figma.com/file/lxwvUaVbH8qkfl3TJvIWpE/%ED%9B%84%EC%9B%90%EC%B8%A0_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84_%EC%9B%B9?node-id=695%3A107)

### 프로젝트

- SOPT 동아리에서 사이드 프로젝트를 진행하고 있는 후원츠 팀입니다.
- 기부 플랫폼을 개발하고 있습니다.
- 최대한 UI 라이브러리 없이 UI를 개발하고 있습니다.

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

### [실행]

- yarn install
- yarn start
