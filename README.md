# 나만의 블로그

<!--Badges-->

![MIT License][license-shield] ![Repository Size][repository-size-shield] ![Issue Closed][issue-closed-shield]

<!--프로젝트 대문 이미지-->

![alt text](/public/title-img.png)

<!--프로젝트 버튼-->

[![Preview][preview-shield]][preview-url] [![Report bug][report-bug-shield]][report-bug-url] [![Request feature][request-feature-shield]][request-feature-url]

<!--목차-->

# Table of Contents

- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Acknowledgement](#4-acknowledgement)
- [[5] Contact](#5-contact)
- [[6] License](#6-license)

# [1] About the Project

NextJS14버전을 학습하면서 배운 내용을 직접적으로 사용해보고 싶은마음에 무작정 블로그를 제작하게 되었다. 기존에 velog, 티스토리와 같은 플랫폼은 내마음대로 커스텀하기 쉽지 않고, 또한 평소에 notion에 내가 배웠던 내용을 정리하고 있어서 이를 자동화해주는 기능을 넣기 위해 프로젝트를 기획했다.

## Features

1. `react-notion-x`를 이용한 DB로 백엔드코드가 필요없도록 하고, notion에 정리하는 내용들 전부 자동으로 블로그 웹사이트에 연동

2. `tailwind css` + `daysi UI`를 이용한 스타일링 및 다크/라이트 모드 구성

3. `giscus`를 이용한 댓글기능 구현

4. `nodemailer` + `Vercel cron`을 이용한 `Commit Reminder` 자동화 기능

## Technologies

- [Node](https://nodejs.org/) 21.7.1
- [NextJS](https://nextjs.org/) 14.1.3
- [react-notion-x](https://github.com/NotionX/react-notion-x) 6.16.0
- etc

# [2] Getting Started

## Prerequisites

- notion DB등록 및 각 DB ID 필요
- nodemailer를 통한 자동화를 위한 gmail 2차인증 + 앱 비밀번호 필요
- 웹사이트 호스팅할 Vercel 계정 필요

## Installation

1. Repository 클론

```bash
git clone https://github.com/tnqkr3494/ecodev-blog.git
```

2. NPM packages 설치

```bash
npm install
```

3. 아래 Configuration 세팅 완료하고 Vercel에 배포

4. 웹사이트 검색어 노출을 위한 [google search console](https://search.google.com/search-console/welcome), [naver search advisor](https://searchadvisor.naver.com/) 등록

## Configuration

- env파일 등록

```dotenv
# notion DB연동으로 가져온 ID
FRONT_DB_ID=""
BACK_DB_ID=""
CS_DB_ID=""
ALGORITHM_DB_ID=""
ETC_DB_ID=""

# nodemailer에서 발신자로 사용될 유저 메일
EMAIL_USER=""
# 위 유저메일을 사용하는 계정 앱 비밀번호(2차인증 필수)
EMAIL_PASSWORD=""

# commit반영할 github username
GITHUB_USERNAME=""

# 메일에 첨부될 이미지 url
SUCCESS_IMG_URL=""
FAIL_IMG_URL=""
```

- Vercel cron 커스텀

```json
{
  "crons": [
    {
      "path": "/api/check-contributions",
      "schedule": "0 11 * * *"
    }
  ]
}
```

schedule값 수정을 통해 원하는 시간에 메일 알림이 올 수 있도록 수정 가능합니다.

# [3] Usage

> 배포 완료된 모습

https://ecodev-blog.vercel.app/

> 자동 메일 알림

![alt text](/public/mail-img.png)

# [4] Acknowledgement

- [1일 1커밋 스케쥴러](https://github.com/backend-cheolhee-jung/daily-commit-checker)
- [Vercel cron 활용](https://velog.io/@wjd15sheep/Vercel-cron-%ED%99%9C%EC%9A%A9)
- [Read me 템플릿](https://github.com/dev-ujin/awesome-readme-template)

# [5] Contact

- 📧 tnqrk3494@naver.com

<!--Url for Badges-->

[license-shield]: https://img.shields.io/badge/license-MIT-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/tnqkr3494/ecodev-blog?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/tnqkr3494/ecodev-blog?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->

[preview-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20Preview-F3F781?style=for-the-badge
[preview-url]: https://ecodev-blog.vercel.app/
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/tnqkr3494/ecodev-blog/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/tnqkr3494/ecodev-blog/issues
