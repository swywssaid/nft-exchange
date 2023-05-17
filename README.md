## 기술스택
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"><img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"/><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"><img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white"/>

<br><br>

## 구현목표

### NFT 컬렉션 목록 화면
#### 헤더
- [x] 로고 삽입
- [x] 지갑 미연결 시 빈 프로필 구현
- [ ] 지갑 연결 시 해당 프로필 정보 구현

<br>

#### 상단 탭바
- [ ] 탭바 클릭 시, 랜덤한 순서로 NFT 컬렉션 카드 배치

<br>

#### NFT 컬렉션
- [ ] NFT 컬렉션 랜덤으로 정보 가져오기

<br><br>

### 프로필
#### 지갑 미연결 시
- [x] 프로필 이미지 없음
- [x] 프로필 버튼 클릭시 메뉴영역 구현
- [x] 드롭다운 메뉴영역 내 지갑 연결 버튼 구현

<br>

#### 지갑 연결 시
- [ ] 이더리움 잔액 및 프로필 이미지 구현
- [ ] 프로필 버튼 클릭시 메뉴영역 구현
- [ ] 메뉴영역 내 지갑 정보 및 메뉴 구현 구현

<br><br>

### 지갑 연동
- [x] 프로필 메뉴의 Connect 버튼 클릭시 메타마스크 지갑 연결
- [ ] 지갑 연결 완료 시, 프로필 및 기타 정보 변경

<br><br>

## 컨벤션
### 브랜치 컨벤션
- **Feature Branch** 전략을 따라 main, develop, feature 브랜치를 갖는다.
- develop 브랜치를 default branch로 설정하고 개발한다.
- develop 브랜치에서 기능 단위의 feature 브랜치를 생성한다.

#### 브랜치 네이밍
- feature 브랜치 명은 `feature/이슈 번호`와 같이 작성한다.
- ex) feature/1, feature/2 ...

<br><br>

### 커밋 컨벤션
[#이슈번호] type: 커밋 메시지

#### type
```
#   [커밋 타입]  리스트
#   feat      : 기능 (새로운 기능)
#   fix       : 버그 (버그 수정)
#   design    : CSS 등 사용자 UI 디자인 변경
#   refactor  : 리팩토링
#   style     : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs      : 문서 (문서 추가, 수정, 삭제)
#   test      : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore     : 기타 변경사항 (빌드 스크립트 수정 등)
#   rename    : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우
#   remove    : 파일을 삭제하는 작업만 수행한 경우
```

<br><br>

### 이슈 템플릿
제목: `tag: 구현할 기능`

```
<!-- 제목 양식 // prefix: 구현할 기능 -->

## ⭐ 주요 기능 <!-- 구현할 기능(목표)에 대한 간략한 설명 -->

## 📋 진행 사항

- [ ] TO-DO 1
- [ ] TO-DO 2

## 📄 참고 사항
```

<br><br>

[추가 문서는 위키에 작성하였습니다](https://github.com/swywssaid/nft-exchange/wiki)
