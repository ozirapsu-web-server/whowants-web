
### 목차 

- [📑 기술 스택](#사용-기술-스택)
- [🎪 프로젝트 구조](#프로젝트-구조)
- [✨개발 이모저모](#개발-이모저모)

## 배포 v3

- github Action으로 CI/CD를 구축했습니다.
- 모바일 웹 디자인 중심으로 태블릿, PC 반응형 디자인을 제공하고 있습니다.
- 추후 추가 개발 예정 중입니다. (결제 기능 등)

### 배포 주소 (반응형 디자인입니다. 태블릿, 모바일, pc 디자인 적용)

- [후원츠 웹 버전 배포 v3](http://whowants.ga/)
- [후원츠 figma](https://www.figma.com/file/lxwvUaVbH8qkfl3TJvIWpE/%ED%9B%84%EC%9B%90%EC%B8%A0_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84_%EC%9B%B9?node-id=695%3A107)

# 사용 기술 스택

**프론트엔드**

- ![title](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)
- ![title](https://img.shields.io/badge/-Vanila_javascript-77216F?&logo=javascript&logoColor=white)
- ![title](https://img.shields.io/badge/-React-00CAFF?&logo=React&logoColor=white)
- ![title](https://img.shields.io/badge/-HTML5-E8E8E8?&logo=html5&logoColor=white)
- ![title](https://img.shields.io/badge/logo-test-blueviolet?logo=Redux&logoColor=white)

**배포**

- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=GitHubActions&logoColor=white)
- ![title](https://img.shields.io/badge/-S3-13FF3D?&logo=Amazon-S3&logoColor=white)

- ![GitHub Actions](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fatrox%2Fsync-dotenv%2Fbadge)

### 프로젝트 구조

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

### 개발 이모저모


- 인턴이 끝나고 다시 React를 공부하려고 마음먹은 시기에 혼자서 웹 개발 부문을 맡게되어 제가 새로 공부하고 싶었던 기술 및 부분을 모두 적용해볼 수 있었습니다. 

    (새로운 폴더 구조, Redux, 배포방법(s3과gitHub actions 사용) 등)

- 이전 프로젝트에서 카로셀 뷰를 UI라이브러리를 사용하여 구현하였는데, 라이브러리없이 직접 구현해보고 싶었습니다. 가장 오른쪽이미지에서 오른쪽 화살표버튼을 클릭하면 맨 처음 이미지가 슬라이드되면서 보이도록 하기 위해서 flex-direction을 뒤집는 것을 활용하여 이미지 방향을 바꾸는 것을 이용하여 구현하였습니다.

- `custom hooks`와 `Redux`를 처음으로 활용해보았고 이를 통해 재사용성을 높이도록 했습니다.
- 제가 지금까지 작성했던 기존의 React 프로젝트 구조는 각 페이지별로 구분하여(mainpage, cartpage) 각 페이지를 구성하는 한 요소 단위로 (navbar, 카테고리, 투두리스트 영역)등으로 구분했는데 스타일요소와 데이터를 불러오는 코드, 그리고 다른 함수 로직 코드가 뒤섞여 있어 재사용성이 낮고 유지보수하기가 힘든 부분이 있었습니다.
- 새로운 React  컴포넌트 구조를 고민하던 중 아래 글을 읽고 Presentational와 Container컴포넌트로 컴포넌트 역할을 분리하여 컴포넌트를 작성했습니다.

    [Presentational 컴포넌트와 Container 컴포넌트](https://redux.vlpt.us/1-2-presentational-and-container-components.html)

  전역 데이터 관리를 위해서 Redux를 사용했는데, `데이터는 Container컴포넌트에서 가져와 관련 컨테이너의 스타일요소를 담당하는 Presentational 컴포넌트에 데이터를 뿌려주는 식`으로 구현했습니다. 이에 따라 `컴포넌트의 역할이 분리`되어 어디에 어떤 요소가 있고 어느 부분을 수정할지 바로 알 수 있어 유지보수면에서는 활용도가 높았으나 데이터를 받아오는 컨테이너 컴포넌트가 중첩된 여러 스타일 컴포넌트를 포함하게 될 경우 가장 하위 컴포넌트까지 계속 data를 보내줘야되는 문제가 있어 결국 전역 데이터 라이브러리를 쓰는 장점이 퇴색되어 다른 구조를 고민하고 있습니다.

  현재 개발하려는 다른 프로젝트에는 아래 글을 참고하여 구조를 적용하려고 합니다.

  [React Folder Structure in 5 Steps - RWieruch](https://www.robinwieruch.de/react-folder-structure)

- 리덕스 폴더구조는 리액트를 다시 공부할 때 참고했던 글을 참고하여 Ducks패턴으로 만들었습니다.

    [https://react.vlpt.us/redux/04-make-modules.html](https://react.vlpt.us/redux/04-make-modules.html)

- Media Query를 이용해 반응형 웹페이지로 작업했습니다. 모바일 웹을 먼저 개발한 후 추후 만들어진 PC디자인대로 추가 디자인 적용했습니다.
