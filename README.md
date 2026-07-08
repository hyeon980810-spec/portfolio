# Portfolio

레이아웃 프레임만 잡힌 상태의 순수 HTML/CSS/JS 포트폴리오 사이트입니다.

## 구조

```
index.html              메인 페이지 (About / Projects / Contact)
projects/project-1~5.html   프로젝트 상세 페이지 (동일 레이아웃)
css/style.css            공통 스타일
js/main.js               커버 패널 슬라이드 + 아코디언 인터랙션
```

## 채워야 할 것

파일 안의 `[대괄호]` 텍스트를 실제 내용으로 교체하세요.

- `[이름]` — 모든 페이지의 커버/네비게이션
- `index.html` — 자기소개, 프로젝트 5개 제목/기술스택/한줄소개, 연락처 링크
- `projects/project-N.html` — 프로젝트 제목, 역할/기술/기간/링크, 설명, `.image-placeholder` 자리에 실제 이미지(`<img src="...">`)

## 로컬 미리보기

```
cd portfolio
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 접속.

## 배포 (GitHub Pages)

저장소 Settings → Pages → Branch를 `main` / `/(root)`로 지정하면 별도 빌드 없이 바로 배포됩니다.
