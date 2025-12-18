<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Classroom Kit - 선생님을 위한 스마트 도구함

QR 생성기, 랜덤 뽑기, 스탑워치, 주사위 등 수업에 유용한 도구들을 제공하는 웹 애플리케이션입니다.

## 로컬에서 실행하기

**필수 요구사항:** Node.js

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 개발 서버 실행:
   ```bash
   npm run dev
   ```

3. 브라우저에서 `http://localhost:5173` 접속

## 프로젝트 빌드

```bash
npm run build
```

빌드가 완료되면 `dist` 폴더가 생성됩니다. 이 폴더의 내용을 웹 호스팅 서버에 업로드하면 됩니다.

## 주요 기능

- **QR 생성기**: 웹사이트 주소를 QR 코드로 변환
- **랜덤 뽑기**: 학생 명단에서 무작위로 발표자 추첨
- **스탑워치**: 수업 시간 관리용 타이머
- **주사위**: 디지털 주사위 굴리기

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## 문제 해결

### 페이지 새로고침 시 404 오류가 발생하는 경우

`.htaccess` 또는 `web.config` 파일이 제대로 업로드되지 않았을 수 있습니다. 파일이 웹 루트에 있는지 확인하세요.

### 빌드 파일이 너무 큰 경우

`vite.config.ts`에서 이미 최적화 설정이 포함되어 있습니다. 추가 최적화가 필요하면 빌드 설정을 조정할 수 있습니다.

